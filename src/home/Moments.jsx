import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

const moments = [
  {
    id: 'diwali',
    title: 'Diwali: Share the Light',
    caption: '200+ children and volunteers celebrated together',
    image: 'gallery-diwali',
  },
  {
    id: 'independence',
    title: 'Independence Day',
    caption: '300+ attendees at the community centre',
    image: 'gallery-independence-day',
  },
  {
    id: 'playroom',
    title: 'The Playroom',
    caption: 'Vibrant decor with safety mats and diverse toys',
    image: 'gallery-playroom',
  },
];

export function Moments() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            heading=" Moments of Joy"
            subtext="Celebrating milestones and creating memories with our community"
          />
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <Reveal key={moment.id} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    slot={moment.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-h3 font-display font-bold text-white mb-1">
                    {moment.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {moment.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal className="mt-12 text-center">
          <a
            href="/our-work#events"
            className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-marigold-400 transition-colors"
          >
            See more moments
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export default Moments;
