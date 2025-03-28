'use client';

import React, { useEffect, useState } from 'react';
import EventCard from '@/components/EventCard';
import { Event } from '@/types/event';

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    fetchEvents();
  }, []);

  if (isLoading) return <div className="text-center py-8">Loading events...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (events.length === 0) return <div className="text-center py-8">No events found.</div>;

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl" >
      <div className="flex flex-col">

      <h1 className="text-2xl font-bold text-center" style={{ color: "#65844A" }}> Casa Cangalha Community Events</h1>
      <h1 className="text-md mb-6 text-gray-500 text-center"> Discover upcoming events and activities at our community center.</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;