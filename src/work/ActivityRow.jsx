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

const activityColors = {
  teal: {
    icon: 'text-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-50',
    accent: 'text-teal-700',
  },
  leaf: {
    icon: 'text-leaf-500',
    bg: 'bg-leaf-50',
    border: 'border-leaf-50',
    accent: 'text-leaf-500',
  },
  coral: {
    icon: 'text-coral-500',
    bg: 'bg-coral-50',
    border: 'border-coral-50',
    accent: 'text-coral-500',
  },
  marigold: {
    icon: 'text-marigold-400',
    bg: 'bg-marigold-50',
    border: 'border-marigold-100',
    accent: 'text-marigold-400',
  },
};

export function ActivityRow({ activity, index }) {
  const Icon = iconMap[activity.icon];
  const colors = activityColors[activity.color];
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center py-12 ${index > 0 ? 'border-t border-teal-50' : ''}`}>
      {/* Number Badge */}
      <div className="lg:w-16 flex justify-center lg:justify-start">
        <span className="text-h2 font-display text-teal-50">
          0{index + 1}
        </span>
      </div>
      
      {/* Image Section */}
      <div className={`lg:w-1/2 flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
        <div className={`w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <ImageWithFallback
            slot={activity.image}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className={`lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.accent} mb-6`}>
            <Icon size={16} />
            <span className="text-sm font-bold uppercase tracking-wider">{activity.title}</span>
          </div>
          
          <h3 className="text-h3 font-display mb-4">
            {activity.title}
          </h3>
          
          <p className="text-body text-ink/80 mb-6">
            {activity.description}
          </p>
          
          <ul className="space-y-2">
            {activity.details.slice(0, 3).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-ink/70">
                <span className="mt-1 text-teal-700">â€¢</span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityRow;
