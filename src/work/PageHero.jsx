import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { motion } from 'framer-motion';
import { Star, Book, Pencil } from 'lucide-react';

export function PageHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-eyebrow text-teal-700 uppercase tracking-wider mb-4">
                SK Children Foundation - Our Work
              </p>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-h1 font-display mb-8"
            >
              Learning, care and celebration, 7 days a week.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body text-[#3A4656] max-w-2xl mx-auto"
            >
              Free education, nutritious meals, clothing drives, and joyful events - creating a holistic learning environment for underprivileged children.
            </motion.p>
          </Reveal>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-marigold-400/30 rounded-full blur-3xl -translate-y-1/2 animate-pulse" />
          <Star className="absolute top-20 left-1/3 w-6 h-6 text-marigold-400 opacity-60" aria-hidden="true" />
          <Pencil className="absolute bottom-32 right-1/4 w-5 h-5 text-teal-700 opacity-60" aria-hidden="true" />
          <Book className="absolute bottom-10 left-1/4 w-4 h-4 text-ink opacity-60" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
