'use client';

import { useEffect, useState } from 'react';
import { Event } from '@/types/event'; // You'll need to create this type

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete event');
      setEvents(events.filter(event => event._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete event');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        <div className="grid gap-4">
          {events.map((event) => (
            <div 
              key={event._id} 
              className="p-4 border rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{new Date(event.startDate).toLocaleDateString()}</p>
              <p>{event.description}</p>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleDelete(event._id)}
                  className="px-3 py-1 text-sm text-red-600 border border-red-600 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
