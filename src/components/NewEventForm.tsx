"use client"
import { useState, FormEvent } from 'react';
import Link from 'next/link';

interface EventFormData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  imageUrl?: string;
  isPublished: boolean;
}

interface Props {
  onCancel: () => void;
}

export default function EventForm({ onCancel }: Props) {
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    imageUrl: '',
    isPublished: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create event');
      }

      // Clear form after successful submission
      setFormData({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        location: '',
        imageUrl: '',
        isPublished: false,
      });

      // You might want to add success notification or redirect here
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle error (show error message to user)
    }
  };

  return (
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
          Create Event
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
  );
}
