"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Image, TrendingUp } from "lucide-react";

interface Stats {
  leadsTotal: number;
  leadsNew: number;
  pagesCount: number;
  projectsCount: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    leadsTotal: 0,
    leadsNew: 0,
    pagesCount: 0,
    projectsCount: 0
  });
  const [recentLeads, setRecentLeads] = useState<Array<{
    _id: string;
    name: string;
    phone: string;
    projectType: string;
    createdAt: string;
    status: string;
  }>>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const leadsRes = await fetch("/api/admin/leads?limit=5");
      if (leadsRes.ok) {
        const data = await leadsRes.json();
        setRecentLeads(data.leads);
        setStats(prev => ({
          ...prev,
          leadsTotal: data.pagination.total,
          leadsNew: data.leads.filter((l: { status: string }) => l.status === 'new').length
        }));
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const statCards = [
    { 
      title: "Leads Total", 
      value: stats.leadsTotal, 
      icon: Users, 
      color: "bg-blue-500",
      href: "/admin/leads"
    },
    { 
      title: "Nouveaux Leads", 
      value: stats.leadsNew, 
      icon: TrendingUp, 
      color: "bg-emerald-500",
      href: "/admin/leads?status=new"
    },
    { 
      title: "Pages", 
      value: stats.pagesCount || "—", 
      icon: FileText, 
      color: "bg-purple-500",
      href: "/admin/pages"
    },
    { 
      title: "Projets", 
      value: stats.projectsCount || "—", 
      icon: Image, 
      color: "bg-orange-500",
      href: "/admin/projects"
    },
  ];

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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${stat.color} text-white`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Leads */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Derniers Leads</CardTitle>
          <Link href="/admin/leads" className="text-sm text-orange-600 hover:text-orange-700">
            Voir tout →
          </Link>
        </CardHeader>
        <CardContent>
          {recentLeads.length === 0 ? (
            <p className="text-slate-500 text-center py-8">Aucun lead pour le moment</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Nom</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Téléphone</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Projet</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead._id} className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium">{lead.name}</td>
                      <td className="py-3 px-4">{lead.phone}</td>
                      <td className="py-3 px-4 capitalize">{lead.projectType}</td>
                      <td className="py-3 px-4 text-sm text-slate-500">
                        {formatDate(lead.createdAt)}
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}
