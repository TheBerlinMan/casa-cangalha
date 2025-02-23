"use client"
import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { IEventWithId, EventFormData } from '@/types/event';

interface Props {
  eventId: string;
  onCancel: () => void;
  onUpdate: (event: IEventWithId) => void;
}

export default function EditEventForm({ eventId, onCancel, onUpdate }: Props) {
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    imageUrl: '',
    isPublished: false,
  });

  useEffect(() => {
    // Fetch event data when component mounts
    const fetchEventData = async () => {
      try {
        console.log(eventId);
        
        const response = await fetch(`/api/events/${eventId}`);
        console.log(response);
        
        if (!response.ok) throw new Error('Failed to fetch event');
        const eventData = await response.json();
        
        // Format dates for datetime-local input
        const formatDate = (date: string) => {
          return new Date(date).toISOString().slice(0, 16);
        };

        setFormData({
          title: eventData.title,
          description: eventData.description,
          startDate: formatDate(eventData.startDate),
          endDate: formatDate(eventData.endDate),
          location: eventData.location || '',
          imageUrl: eventData.imageUrl || '',
          isPublished: eventData.isPublished,
        });
      } catch (error) {
        console.error('Error fetching event:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update event');
      }

      const updatedEvent = await response.json();
      onUpdate(updatedEvent); // Call the callback with the updated event data
    } catch (error) {
      console.error('Error updating event:', error);
      // Handle error (show error message to user)
    }
  };

  return (
    <div className="container mx-auto px-4">
      

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">Title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="description" className="block">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="block">Start Date</label>
          <input
            type="datetime-local"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="block">End Date</label>
          <input
            type="datetime-local"
            id="endDate"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="location" className="block">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.isPublished}
              onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
              className="mr-2"
            />
            Publish Event
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Event
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
