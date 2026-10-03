import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { siteConfig } from '../data/siteConfig';
import { siteImages } from '../data/images';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-50/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-marigold-50/30 rounded-full blur-2xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                  SK Children Foundation - Delhi, India
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-h1 font-display leading-tight mb-8 text-ink tracking-tight"
              >
                Empowering children through <span className="text-teal-700">education</span> and opportunity.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-body text-[#3A4656] mb-10 max-w-[520px] leading-relaxed"
              >
                We're an NGO in Delhi working across India to give underprivileged children quality education, free of cost. Join us in creating a brighter future for children who need it most.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" href="/our-work">
                  Explore Our Work
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <Button variant="secondary" size="lg" href="/our-work#contact">
                  Get Involved
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xs text-ink/50 mt-8"
              >
                Registered under the Indian Trust Act, 1882 (R.NO 1305/2019)
              </motion.p>
            </Reveal>
          </div>

          {/* Hero Image */}
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lift group">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="transition-transform duration-500 ease-out"
              >
                <ImageWithFallback
                  slot="hero-classroom"
                  className="w-full h-auto object-cover"
                  fetchPriority="high"
                  loading="eager"
                />
              </motion.div>
              
              {/* Subtle decorative shape behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-teal-900/20 to-transparent pointer-events-none" />
              
              {/* Decorative blob behind image */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
              
              {/* Statistics cards - only on desktop */}
              <div className="hidden lg:block absolute bottom-8 left-8 right-8 flex gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="flex-1 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-soft flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-display font-bold text-teal-700">1,000+</span>
                  <span className="text-xs font-medium text-ink/60 uppercase tracking-wider mt-1">Students Taught</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: 'spring' }}
                  className="flex-1 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-soft flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl font-display font-bold text-marigold-600">10</span>
                  <span className="text-xs font-medium text-ink/60 uppercase tracking-wider mt-1">States Active</span>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
