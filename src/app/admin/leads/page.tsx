"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Download, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  zipCode: string;
  projectType: string;
  material: string;
  message?: string;
  source: string;
  status: string;
  createdAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, [pagination.page, statusFilter]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        status: statusFilter
      });
      
      const res = await fetch(`/api/admin/leads?${params}`);
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads);
        setPagination(data.pagination);
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (res.ok) {
        setLeads(leads.map(l => 
          l._id === leadId ? { ...l, status: newStatus } : l
        ));
        if (selectedLead?._id === leadId) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
      }
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  };

  const exportCSV = () => {
    const headers = ["Nom", "Téléphone", "Email", "Code Postal", "Projet", "Matériau", "Statut", "Date"];
    const rows = leads.map(l => [
      l.name,
      l.phone,
      l.email || "",
      l.zipCode,
      l.projectType,
      l.material,
      l.status,
      new Date(l.createdAt).toLocaleDateString('fr-FR')
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(";")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700';
      case 'contacted': return 'bg-yellow-100 text-yellow-700';
      case 'quoted': return 'bg-purple-100 text-purple-700';
      case 'won': return 'bg-emerald-100 text-emerald-700';
      case 'lost': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const statuses = [
    { value: 'all', label: 'Tous' },
    { value: 'new', label: 'Nouveau' },
    { value: 'contacted', label: 'Contacté' },
    { value: 'quoted', label: 'Devisé' },
    { value: 'won', label: 'Gagné' },
    { value: 'lost', label: 'Perdu' },
  ];

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm) ||
    lead.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
        <Button onClick={exportCSV} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Exporter CSV
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Rechercher par nom, téléphone, email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setStatusFilter(s.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === s.value
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leads Table */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-slate-500">Chargement...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-8 text-center text-slate-500">Aucun lead trouvé</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Nom</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Contact</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Projet</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <tr
                          key={lead._id}
                          onClick={() => setSelectedLead(lead)}
                          className={`border-b cursor-pointer transition-colors ${
                            selectedLead?._id === lead._id 
                              ? 'bg-orange-50' 
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="py-3 px-4">
                            <p className="font-medium">{lead.name}</p>
                            <p className="text-xs text-slate-500">{formatDate(lead.createdAt)}</p>
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-sm">{lead.phone}</p>
                            {lead.email && (
                              <p className="text-xs text-slate-500">{lead.email}</p>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-sm capitalize">{lead.projectType}</p>
                            <p className="text-xs text-slate-500 capitalize">{lead.material}</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between p-4 border-t">
                  <p className="text-sm text-slate-500">
                    {pagination.total} leads au total
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page === 1}
                      onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">
                      Page {pagination.page} / {pagination.pages || 1}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={pagination.page >= pagination.pages}
                      onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Lead Detail */}
        <Card>
          <CardHeader>
            <CardTitle>Détail du Lead</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedLead ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">{selectedLead.name}</h3>
                  <p className="text-sm text-slate-500">{selectedLead.zipCode}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="phone" size="sm" className="flex-1" asChild>
                    <a href={`tel:${selectedLead.phone}`}>
                      <Phone className="h-4 w-4 mr-1" />
                      Appeler
                    </a>
                  </Button>
                  {selectedLead.email && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={`mailto:${selectedLead.email}`}>
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </a>
                    </Button>
                  )}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div>
                    <p className="text-xs text-slate-500">Projet</p>
                    <p className="font-medium capitalize">{selectedLead.projectType}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Matériau</p>
                    <p className="font-medium capitalize">{selectedLead.material}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Source</p>
                    <p className="font-medium">{selectedLead.source}</p>
                  </div>
                  {selectedLead.message && (
                    <div>
                      <p className="text-xs text-slate-500">Message</p>
                      <p className="text-sm">{selectedLead.message}</p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs text-slate-500 mb-2">Changer le statut</p>
                  <div className="grid grid-cols-2 gap-2">
                    {statuses.filter(s => s.value !== 'all').map((s) => (
                      <button
                        key={s.value}
                        onClick={() => updateLeadStatus(selectedLead._id, s.value)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          selectedLead.status === s.value
                            ? getStatusColor(s.value)
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 text-center py-8">
                Sélectionnez un lead pour voir les détails
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
