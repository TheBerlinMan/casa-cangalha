'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { IEventWithId } from '@/types/event';
import { useLanguage } from '../context/LanguageContext';
import EventModal from '../components/EventModal';

const Calendar = () => {
  const [events, setEvents] = useState<any[]>([]);
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data: IEventWithId[] = await response.json();
      
      // Transform events into FullCalendar format
      const calendarEvents = data
        .filter(event => event.isPublished) // Only show published events
        .map(event => ({
          id: event._id,
          title: event.title,
          start: event.startDate,
          end: event.endDate,
          description: event.description,
          location: event.location,
          extendedProps: {
            imageUrl: event.imageUrl
          }
        }));
      
      setEvents(calendarEvents);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsLoading(false);
    }
  };

  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event);
  };

  if (isLoading) return <div className="flex justify-center items-center h-96">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }}
          locale={language === 'pt' ? 'pt-br' : 'en'}
          buttonText={{
            today: language === 'pt' ? 'Hoje' : 'Today',
            month: language === 'pt' ? 'Mês' : 'Month',
            week: language === 'pt' ? 'Semana' : 'Week'
          }}
          height="auto"
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
            hour12: false
          }}
        />
      </div>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default Calendar;