import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { motion } from 'framer-motion';

export function Reach() {
  return (
    <section className="py-16 lg:py-24 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-marigold-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 font-display mb-4">
              From Thiruvananthapuram to Dehradun.
            </h2>
            <p className="text-body text-ink/70">
              Our free online classes have helped students across India. Volunteers from the USA and Oman have also worked with SKCF in the past.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative arc with dots */}
            <svg
              className="w-full h-32"
              viewBox="0 0 800 150"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0B5563" />
                  <stop offset="100%" stopColor="#F5A623" />
                </linearGradient>
              </defs>
              
              {/* Dotted path */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                d="M100,120 Q400,-50 700,120"
                fill="none"
                stroke="url(#arc-gradient)"
                strokeWidth="2"
                strokeDasharray="10,15"
              />
              
              {/* Start dot */}
              <circle cx="100" cy="120" r="8" fill="#0B5563" />
              <text x="100" y="145" textAnchor="middle" className="text-xs fill-ink font-bold">
                South
              </text>
              
              {/* End dot */}
              <circle cx="700" cy="120" r="8" fill="#F5A623" />
              <text x="700" y="145" textAnchor="middle" className="text-xs fill-ink font-bold">
                North
              </text>
            </svg>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Reach;
