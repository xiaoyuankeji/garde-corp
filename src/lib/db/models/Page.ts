import mongoose, { Schema, Document } from 'mongoose';

export interface ContentBlock {
  type: 'text' | 'gallery' | 'faq' | 'cta' | 'features';
  content: Record<string, unknown>;
  order: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IPage extends Document {
  type: 'landing' | 'guide' | 'legal';
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    headline: string;
    subheadline?: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  contentBlocks: ContentBlock[];
  faqs: FAQItem[];
  keywords: string[];
  material?: string;
  useCase?: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PageSchema = new Schema<IPage>(
  {
    type: {
      type: String,
      enum: ['landing', 'guide', 'legal'],
      default: 'landing'
    },
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
    metaTitle: {
      type: String,
      required: true
    },
    metaDescription: {
      type: String,
      required: true
    },
    hero: {
      headline: { type: String, required: true },
      subheadline: String,
      image: String,
      ctaText: String,
      ctaLink: String
    },
    contentBlocks: [
      {
        type: {
          type: String,
          enum: ['text', 'gallery', 'faq', 'cta', 'features']
        },
        content: Schema.Types.Mixed,
        order: Number
      }
    ],
    faqs: [
      {
        question: String,
        answer: String
      }
    ],
    keywords: [String],
    material: String,
    useCase: String,
    published: {
      type: Boolean,
      default: false
    },
    publishedAt: Date
  },
  {
    timestamps: true
  }
);

PageSchema.index({ slug: 1 });
PageSchema.index({ type: 1, published: 1 });
PageSchema.index({ material: 1 });
PageSchema.index({ useCase: 1 });

export default mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema);
