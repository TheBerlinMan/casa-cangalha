import { IEvent } from '@/server/models/Event';

export type IEventWithId = IEvent & {
  _id: string;
};

export interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl: string;
  isPublished: boolean;
}
  