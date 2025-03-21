'use client';

import Image from 'next/image';
import { Event } from '@/types/event';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  if (!event) return null;

  return (
    <div className="overflow-hidden flex flex-col h-full border  border-gray-200 rounded-lg shadow-md bg-white">
      <div className="relative h-48 w-full">
        <Image src={event.imageUrl || 'https://picsum.photos/300/200'} fill alt={event.title} className='object-cover'/>
      </div>
      <div id='header'className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{event.title}</h1>
        <p className='text-sm text-gray-500'>{event.description}</p>
      </div>
      <div id='content' className='p-4'>

      <div className='flex items-center gap-2'>
        <Calendar size={16}/>
        <p>{typeof event.startDate === 'object' ? event.startDate.toLocaleDateString() : event.startDate}</p>
      </div>
      <div className='flex items-center gap-2'>
        <Clock size={16}/>
        {/* TODO: Add time */}
        <p>9:00 AM - 12:00 PM</p>
      </div>
      <div className='flex items-center gap-2'>
        <MapPin size={16}/>
        <p>{event.location || 'Location not available'}</p>
      </div>
      </div>
      <div id='footer' className='p-4'>
        <button className='w-full text-black px-4 py-2 border border-black rounded-md'>View Details</button>
      </div>
    </div>
  );
};

export default EventCard; 