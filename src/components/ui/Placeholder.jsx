import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Apple, Shirt, PartyPopper, HeartHandshake, Blocks, Camera, User, MapPin, Phone, Mail } from 'lucide-react';

const iconMap = {
  BookOpen,
  Apple,
  Shirt,
  PartyPopper,
  HeartHandshake,
  Blocks,
  Camera,
  User,
  MapPin,
  Phone,
  Mail,
};

export function Placeholder({ type = 'default', className = '' }) {
  const Icon = iconMap[type] || Camera;
  
  return (
    <div className={`relative overflow-hidden rounded-arch bg-gradient-to-br from-teal-50 to-marigold-100 flex items-center justify-center ${className}`}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #0B5563 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-4 p-8"
      >
        <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-teal-700">
          <Icon size={48} />
        </div>
        
        <div className="text-center px-4">
          <p className="text-sm font-medium text-ink uppercase tracking-wider mb-2">
            Placeholder Image
          </p>
          <p className="text-body text-ink/80">
            SKCF Image
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Placeholder;
