"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { LucideClock8, LucideCalendar, ArrowRight } from "lucide-react";
import EventCard from "@/components/EventCard";
import { Event } from "@/types/event"; // Make sure this import matches your event type definition

export default function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      description1:
        "Casa Cangalha is a cultural center located in the heart of the rural neighborhood of Cangalha, within the city of Aiuruoca.",
      description2:
        "Our goal is to provide a space for the local community that promotes educational opportunities, in addition to serving as a platform for selling handcrafted products made by artisans from the region.",
      description3:
        "We offer vocational courses, workshops, events, and much more!",
      subscribe: "Subscribe",
    },
    pt: {
      description1:
        "Casa Cangalha é um centro cultural localizado no coração do bairro rural de Cangalha, na cidade de Aiuruoca.",
      description2:
        "Nosso objetivo é proporcionar um espaço para a comunidade local que promova oportunidades educacionais, além de servir como plataforma para a venda de produtos artesanais feitos por artesãos da região.",
      description3:
        "Oferecemos cursos profissionalizantes, oficinas, eventos e muito mais!",
      subscribe: "Inscreva-se",
    },
  };

  const currentContent = content[language];

  // State for events and loading status
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, []);

  // Create a sorted copy so we don’t mutate the state array
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  // Get the three most recent/upcoming events
  const recentEvents = sortedEvents.slice(0, 3);

  return (
    <div className="w-[100%]">
      {/* Main Intro */}
      <div className="flex gap-4 -mt-8 justify-center items-center">
        <Image
          src="/Assets-07.png"
          alt="Casa Cangalha"
          width={500}
          height={500}
        />
        <div className="px-4 flex flex-col gap-8 justify-center items-center">
          <div className="space-y-4">
            <p>{currentContent.description1}</p>
            <p>{currentContent.description2}</p>
            <p>{currentContent.description3}</p>
          </div>
          <button
            style={{ backgroundColor: "#65844A" }}
            className="text-white px-4 py-2 rounded-md w-1/2"
          >
            {currentContent.subscribe}
          </button>
        </div>
      </div>

      {/* Hours / Events */}
      <div
        className="flex justify-around items-center w-full px-8 py-6 border-2 rounded-md"
        style={{ borderColor: "#65844A" }}
      >
        <div className="flex flex-col items-center gap-3">
          <LucideClock8 size={24} strokeWidth={2} />
          <div className="flex flex-col items-center">
            <p>Monday - Friday: 10:00 - 18:00</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <LucideCalendar size={24} strokeWidth={2} />
          <div className="flex flex-col items-center">
            <p>See all of our community events.</p>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex justify-between items-center gap-2 p-4">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="flex gap-2 items-center">
            <Link href="/calendar">View all events </Link>
            <ArrowRight size={20} strokeWidth={1} />
          </div>
        </div>

        <div id="recent-events" className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {loading ? (
            <p>Loading events...</p>
          ) : recentEvents.length > 0 ? (
            recentEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))
          ) : (
            <p>No upcoming events found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
