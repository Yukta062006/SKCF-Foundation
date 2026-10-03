import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { Twitter, Youtube, Link as LinkIcon } from 'lucide-react';

export function FounderCard() {
  const { founder } = siteConfig;
  
  return (
    <div className="bg-cream rounded-2xl p-6 text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lift">
        <ImageWithFallback
          slot="founder"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-display font-bold text-ink mb-1">
        {founder.name}
      </h3>
      <p className="text-sm text-teal-700 font-medium mb-4">
        {founder.role}
      </p>
      
      <p className="text-sm text-ink/70 mb-6">
        {founder.education}
      </p>
      
      <p className="text-sm text-ink/80 leading-relaxed mb-6">
        {founder.description}
      </p>
      
      <div className="flex justify-center gap-4">
        <a href={founder.social?.twitter || '#'} className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors">
          <Twitter size={14} />
        </a>
        <a href={founder.social?.youtube || '#'} className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors">
          <Youtube size={14} />
        </a>
        <a href={founder.social?.linkedin || '#'} className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 hover:bg-teal-700 hover:text-white transition-colors">
          <LinkIcon size={14} />
        </a>
      </div>
    </div>
  );
}

export default FounderCard;
