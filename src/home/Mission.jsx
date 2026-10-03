import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export function Mission() {
  return (
    <section className="py-20 lg:py-32 bg-cream relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <Container>
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <Reveal>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-lift group">
                    <ImageWithFallback
                      slot="mission-classroom"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent" />
                    
                    {/* Decorative element */}
                    <div className="absolute top-6 right-6 w-16 h-16 bg-teal-500/10 rounded-2xl -rotate-6" />
                  </div>
                </motion.div>
              </Reveal>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="space-y-6">
                  <div className="inline-block">
                    <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full">
                      Our Mission
                    </span>
                  </div>
                  
                  <h2 className="text-h2 font-display mb-6 text-ink">
                    Education is a right, not a privilege.
                  </h2>
                  
                  <p className="text-body text-[#3A4656] mb-8 leading-relaxed">
                    The Union Education Ministry cites that 15 crore children are out of the school system in India. The UN goal is inclusive, quality education for all by 2030 (SDGs). SKCF provides quality education free of cost to bridge this gap.
                  </p>
                  
                  <div className="flex items-center gap-4 mb-10">
                    <span className="text-6xl font-display text-teal-50 font-bold">15</span>
                    <div className="flex flex-col">
                      <span className="text-h3 font-display text-ink">crore</span>
                      <span className="text-body text-ink/60">children out of school in India</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" href="/our-work">
                    Read our story
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Mission;
