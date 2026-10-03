import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: 2016,
    title: 'Founded',
    description: 'SK Children Foundation established in Delhi by Mr. Raghav Sharma',
  },
  {
    year: 2017,
    title: 'First Clothing Drive',
    description: 'Distribution of footwear to children in need',
  },
  {
    year: 2019,
    title: 'Registered & Christmas Drive',
    description: 'Registered under the Indian Trust Act, 1882 (R.NO 1305/2019). Christmas socks and sweaters distribution.',
  },
  {
    year: 'Later',
    title: 'Permanent Premises',
    description: 'Moved from classes in open space to rented premises, ensuring classes continue in rainy weather.',
  },
  {
    year: 'Recent',
    title: 'New Centre with Playroom',
    description: 'Opened a new centre featuring a vibrant playroom with safety mats and diverse toys.',
  },
];

export function Timeline() {
  return (
    <section className="py-16 lg:py-24 bg-teal-50/30">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            heading="Our Journey"
            subtext="From a small initiative to a growing community center"
          />
        </Reveal>
        
        <div className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-teal-700 to-marigold-400 -translate-y-1/2" />
          
          <div className="space-y-12 lg:space-y-0 relative z-10">
            {timelineEvents.map((event, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Year Dot */}
                  <div className="flex-1 lg:flex-none lg:w-32 flex justify-center">
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', delay: index * 0.1 }}
                        className="w-8 h-8 rounded-full bg-marigold-400 border-4 border-white shadow-lift z-10 relative"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-teal-700 hidden lg:block" />
                      <div className={`absolute top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-teal-700 hidden lg:block ${index % 2 === 0 ? 'lg:-right-0' : 'lg:-left-0'}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-2xl shadow-soft hover:shadow-lift transition-all hover:-translate-y-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="text-h2 font-display text-teal-700 block mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold text-ink mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-ink/70">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Empty for spacing */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Timeline;
