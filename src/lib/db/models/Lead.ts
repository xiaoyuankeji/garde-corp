import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  zipCode?: string;
  projectType?: string;
  material?: string;
  installationType?: string;
  estimatedLength?: string;
  message?: string;
  attachments: string[];
  source: 'seo' | 'ads' | 'direct' | 'referral' | 'ai-reco';
  sourcePage?: string;
  status: 'new' | 'contacted' | 'quoted' | 'won' | 'lost';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true
    },
    zipCode: String,
    projectType: String,
    material: String,
    installationType: String,
    estimatedLength: String,
    message: String,
    attachments: [String],
    source: {
      type: String,
      enum: ['seo', 'ads', 'direct', 'referral', 'ai-reco'],
      default: 'direct'
    },
    sourcePage: String,
    status: {
      type: String,
      enum: ['new', 'contacted', 'quoted', 'won', 'lost'],
      default: 'new'
    },
    notes: String
  },
  {
    timestamps: true
  }
);

LeadSchema.index({ status: 1 });
LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ source: 1 });

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
