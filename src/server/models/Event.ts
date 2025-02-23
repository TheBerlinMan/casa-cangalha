import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  imageUrl?: string;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for the event'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description for the event'],
    },
    startDate: {
      type: Date,
      required: [true, 'Please provide a start date for the event'],
    },
    endDate: {
      type: Date,
      required: [true, 'Please provide an end date for the event'],
    },
    location: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema); 