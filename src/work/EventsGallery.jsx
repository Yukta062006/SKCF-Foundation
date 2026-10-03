import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 'diwali',
    title: 'Diwali: Share the Light',
    description: '200+ children and volunteers celebrated together',
    image: 'gallery-diwali',
    size: 'large',
  },
  {
    id: 'independence-day',
    title: 'Independence Day',
    description: '300+ attendees at the community centre',
    image: 'gallery-independence-day',
    size: 'small',
  },
  {
    id: 'yoga-day',
    title: 'Yoga Day & Life Skills',
    description: 'Workshops and interactive sessions',
    image: 'gallery-yoga',
    size: 'small',
  },
  {
    id: 'bed-distribution',
    title: 'Bed Distribution',
    description: 'Partnership with Hilti India Private Limited',
    image: 'gallery-beds',
    size: 'large',
  },
  {
    id: 'playroom',
    title: 'The Playroom',
    description: 'Vibrant decor and safety mats',
    image: 'gallery-playroom',
    size: 'small',
  },
  {
    id: 'donation-drive',
    title: 'Donation Drive',
    description: 'Helped a student\'s differently-abled father earn and live with dignity',
    image: 'gallery-donation-drive',
    size: 'small',
  },
];

export function EventsGallery() {
  return (
    <section id="events" className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            heading="Celebrations & Community"
            subtext="Creating joyful learning experiences and community moments"
          />
        </Reveal>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              <motion.div
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-soft"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <ImageWithFallback
                    slot={item.image}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg font-display font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default EventsGallery;
