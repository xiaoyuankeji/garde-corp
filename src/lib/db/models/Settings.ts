import mongoose, { Schema, Document } from 'mongoose';

export interface ISettings extends Document {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  country: string;
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string[];
  };
  updatedAt: Date;
}

const SettingsSchema = new Schema<ISettings>(
  {
    companyName: {
      type: String,
      default: 'STICK-IT FRANCE'
    },
    phone: {
      type: String,
      default: '03 20 34 50 30'
    },
    email: {
      type: String,
      default: 'contact@stickit-france.com'
    },
    address: {
      type: String,
      default: 'Z.A. de la Broye, Rue du Chaufour'
    },
    city: {
      type: String,
      default: 'Ennevelin'
    },
    postalCode: {
      type: String,
      default: '59710'
    },
    region: {
      type: String,
      default: 'Nord'
    },
    country: {
      type: String,
      default: 'France'
    },
    openingHours: {
      weekdays: { type: String, default: '8h00 - 18h00' },
      saturday: { type: String, default: '9h00 - 12h00' },
      sunday: { type: String, default: 'Fermé' }
    },
    socialLinks: {
      facebook: String,
      instagram: String,
      linkedin: String
    },
    seo: {
      defaultTitle: { type: String, default: 'Garde-Corps Sur Mesure | STICK-IT FRANCE' },
      defaultDescription: { type: String, default: 'Spécialiste garde-corps sur mesure en inox, verre et aluminium.' },
      defaultKeywords: [String]
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);
