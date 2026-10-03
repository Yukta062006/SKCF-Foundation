import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { BookOpen, Apple, Shirt, PartyPopper } from 'lucide-react';

const activityIcons = {
  BookOpen,
  Apple,
  Shirt,
  PartyPopper,
};

const activities = [
  {
    id: 'free-classes',
    title: 'Free Classes',
    icon: 'BookOpen',
    description: 'Offline and online classes 7 days a week for standards I-XII. Maths, Science, English, Hindi, Social Sciences and more.',
    image: 'activity-classes',
    large: true,
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    icon: 'Apple',
    description: 'Nutritious meals and refreshments served regularly. Sweets, gifts, stationery and bags distributed at festivals.',
    image: 'activity-nutrition',
    large: false,
  },
  {
    id: 'clothing',
    title: 'Clothing',
    icon: 'Shirt',
    description: 'Regular clothing distribution drives for equitable access. Footwear (2017), socks and sweaters at Christmas (2019).',
    image: 'activity-clothing',
    large: false,
  },
  {
    id: 'events',
    title: 'Events & Holistic Development',
    icon: 'PartyPopper',
    description: 'Workshops, competitions, and life-skills sessions. Diwali "Share the Light", Independence Day, Yoga Day celebrations.',
    image: 'activity-events',
    large: false,
  },
];

export function ActivitiesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-cream/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            heading="More than a classroom."
            subtext="SKCF teaches life values and skills beyond conventional schooling, and also looks after nutrition and clothing."
          />
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Large card - Free Classes */}
          <Reveal className="md:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="group bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-lift transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    slot={activities[0].image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        const Icon = activityIcons[activities[0].icon];
                        return Icon ? <div className="w-14 h-14 rounded-full bg-marigold-400 flex items-center justify-center text-ink shadow-soft"><Icon size={28} /></div> : null;
                      })()}
                      <h3 className="text-h3 font-display font-bold text-white">
                        {activities[0].title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-body mb-6 text-ink/80 leading-relaxed">
                    {activities[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full">7 days a week</span>
                    <span className="px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full">Standards I-XII</span>
                    <span className="px-3 py-1.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full">Free of cost</span>
                  </div>
                  <a href="/our-work" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-marigold-400 transition-colors group/link">
                    Learn more
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
          
          {/* Small cards with stagger */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="lg:col-span-1 space-y-8"
          >
            {activities.slice(1).map((activity, index) => (
              <Reveal key={activity.id} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="group bg-white rounded-3xl shadow-soft overflow-hidden hover:shadow-lift transition-all duration-500 hover:-translate-y-2">
                    <div className="h-48 overflow-hidden relative">
                      <ImageWithFallback
                        slot={activity.image}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute top-6 left-6">
                        {(() => {
                          const Icon = activityIcons[activity.icon];
                          return Icon ? <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-soft"><Icon size={20} className="text-teal-700" /></div> : null;
                        })()}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-display font-bold text-ink mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-body text-ink/70 mb-4 line-clamp-2">
                        {activity.description}
                      </p>
                      <a href="/our-work" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-marigold-400 transition-colors group/link">
                        Learn more
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
        
        <Reveal className="mt-16 text-center">
          <Button variant="primary" href="/our-work">
            Explore all our work
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export default ActivitiesPreview;
