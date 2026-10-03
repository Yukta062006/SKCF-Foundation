import React from 'react';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { BookOpen, Apple, Shirt, PartyPopper, HeartHandshake, Blocks } from 'lucide-react';

const iconMap = {
  BookOpen,
  Apple,
  Shirt,
  PartyPopper,
  HeartHandshake,
  Blocks,
};

export function ActivityCard({ activity }) {
  const icon = iconMap[activity.icon];
  
  return (
    <div className="group bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-lift transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          slot={activity.image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center shadow-soft">
            <React.createElement(icon, { size: 16, className: "text-ink" }) />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-ink mb-2">
          {activity.title}
        </h3>
        <p className="text-sm text-ink/70 mb-4 line-clamp-2">
          {activity.description}
        </p>
        <div className="flex items-center gap-2 text-teal-700 font-bold text-sm group-hover:gap-3 transition-all">
          Learn more
          <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
