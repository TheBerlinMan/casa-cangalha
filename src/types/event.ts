// Define the base event interface
export interface IEvent {
  title: string;
  description: string;
  startDate: Date | string;
  endDate: Date | string;
  location?: string;
  imageUrl?: string;
  isPublished: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

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
  