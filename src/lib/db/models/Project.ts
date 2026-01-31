import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  slug: string;
  title: string;
  description?: string;
  location: {
    city: string;
    region?: string;
    postalCode?: string;
  };
  tags: {
    materials: string[];
    useCases: string[];
  };
  images: {
    url: string;
    alt?: string;
    isMain?: boolean;
  }[];
  client?: string;
  completedAt?: Date;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    location: {
      city: { type: String, required: true },
      region: String,
      postalCode: String
    },
    tags: {
      materials: [String],
      useCases: [String]
    },
    images: [
      {
        url: { type: String, required: true },
        alt: String,
        isMain: { type: Boolean, default: false }
      }
    ],
    client: String,
    completedAt: Date,
    published: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

ProjectSchema.index({ slug: 1 });
ProjectSchema.index({ 'tags.materials': 1 });
ProjectSchema.index({ 'tags.useCases': 1 });
ProjectSchema.index({ 'location.city': 1 });
ProjectSchema.index({ published: 1 });

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
