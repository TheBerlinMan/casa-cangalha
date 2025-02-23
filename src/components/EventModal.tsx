'use client';

import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

interface EventModalProps {
  event: {
    title: string;
    start: Date;
    end: Date;
    description: string;
    location?: string;
    extendedProps?: {
      imageUrl?: string;
    };
  } | null;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  const { language } = useLanguage();

  if (!event) return null;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const translations = {
    location: language === 'pt' ? 'Local' : 'Location',
    from: language === 'pt' ? 'De' : 'From',
    to: language === 'pt' ? 'Até' : 'To',
    close: language === 'pt' ? 'Fechar' : 'Close'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4">{event.title}</h2>

        {event.extendedProps?.imageUrl && (
          <div className="relative w-full h-48 mb-4">
            <Image
              src={event.extendedProps.imageUrl}
              alt={event.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}

        <div className="space-y-4">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">{translations.from}:</span>{' '}
              {formatDate(event.start)}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">{translations.to}:</span>{' '}
              {formatDate(event.end)}
            </p>
          </div>

          {event.location && (
            <p className="text-gray-600">
              <span className="font-semibold">{translations.location}:</span>{' '}
              {event.location}
            </p>
          )}

          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-wrap">{event.description}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            {translations.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 