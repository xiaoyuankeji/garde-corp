import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  type: 'call_click' | 'form_submit' | 'page_view' | 'ai_reco_used' | 'devis_started';
  meta: {
    page?: string;
    ref?: string;
    device?: string;
    material?: string;
    useCase?: string;
    [key: string]: unknown;
  };
  sessionId?: string;
  createdAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    type: {
      type: String,
      enum: ['call_click', 'form_submit', 'page_view', 'ai_reco_used', 'devis_started'],
      required: true
    },
    meta: {
      type: Schema.Types.Mixed,
      default: {}
    },
    sessionId: String
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

EventSchema.index({ type: 1 });
EventSchema.index({ createdAt: -1 });

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
