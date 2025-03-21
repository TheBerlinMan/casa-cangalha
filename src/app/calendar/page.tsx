import React from 'react'
import EventCard from '@/components/EventCard'

const EventsPage = () => {
  const event = {
    title: 'Event 1',
    description: 'Description 1',
    startDate: new Date(),
    endDate: new Date(),
    isPublished: true,
    imageUrl: 'https://picsum.photos/300/200',
    location: 'Location 1',
  }
  return (
    <div>
      <EventCard event={event} />
    </div>
  )
}

export default EventsPage