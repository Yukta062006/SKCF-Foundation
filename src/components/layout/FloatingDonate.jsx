import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { motion } from 'framer-motion';

export function FloatingDonate() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      // Hide when near footer or CTA section
      const footer = document.querySelector('footer');
      const cta = document.querySelector('.cta-section');
      const contact = document.getElementById('contact');
      
      if (footer && window.scrollY + window.innerHeight >= footer.offsetTop - 100) {
        setIsVisible(false);
        return;
      }
      
      if (cta && window.scrollY + window.innerHeight >= cta.offsetTop - 100) {
        setIsVisible(false);
        return;
      }
      
      if (contact && window.scrollY + window.innerHeight >= contact.offsetTop - 100) {
        setIsVisible(false);
        return;
      }
      
      // Show after scrolling past hero
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {isMobile ? (
        // Mobile-safe bottom bar
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-marigold-400 to-marigold-500 text-ink"
          style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
        >
          <div className="container mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-bold leading-tight">Support our mission</p>
              <p className="text-xs opacity-80">Donate today</p>
            </div>
            <a
              href={siteConfig.donateUrl || '#contact'}
              className="px-6 py-2.5 bg-ink text-marigold-400 font-bold text-sm rounded-pill hover:bg-cream transition-colors"
            >
              Donate
            </a>
          </div>
        </motion.div>
      ) : (
        // Desktop floating button
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          href={siteConfig.donateUrl || '#contact'}
          className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-marigold-400 text-ink font-bold text-sm rounded-pill shadow-lift hover:bg-marigold-600 transition-all hover:scale-105"
        >
          Donate Now
        </motion.a>
      )}
    </>
  );
}

export default FloatingDonate;
