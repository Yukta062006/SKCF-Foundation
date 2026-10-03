import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { FounderCard } from './FounderCard';
import { siteConfig } from '../data/siteConfig';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export function About() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            {/* Text Content */}
            <div className="lg:col-span-2">
              <h2 className="text-h2 font-display mb-6">
                A young boy's effort became a free school.
              </h2>
              <div className="space-y-6 text-body text-ink/80 leading-relaxed">
                <p>
                  Started in 2016 by Mr. Raghav Sharma, SKCF began as a small initiative to provide free education to underprivileged children. What started as classes in an open space has grown into a permanent center where we teach, feed, cloth children and hold events.
                </p>
                <p>
                  Today, SKCF serves students from standards I to XII, offering free offline and online classes 7 days a week. We've also expanded to include nutrition programs, clothing drives, and holistic development activities.
                </p>
                <p>
                  Our journey has taken us from temporary outdoor classes to rented premises, ensuring education continues even in rainy weather. Most recently, we opened a new center featuring a vibrant playroom with safety mats and diverse toys.
                </p>
              </div>
              
              <Reveal className="mt-8">
                <a
                  href="/our-work#events"
                  className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-marigold-400 transition-colors"
                >
                  Learn more about our events
                  <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Reveal>
            </div>
            
            {/* Founder Card */}
            <div className="lg:col-span-1">
              <Reveal delay={0.2}>
                <FounderCard />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default About;
