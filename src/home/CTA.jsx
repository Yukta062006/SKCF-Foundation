import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';

export function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-teal-700 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-marigold-400/20 rounded-full blur-3xl" />
      
      <Container>
        <Reveal>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-display text-white mb-6">
              Share the light.
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Contribute, volunteer, or simply spread the word. Every action makes a difference in a child's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/our-work">
                Donate Now
              </Button>
              <Button variant="secondary" size="lg" href="/our-work#contact">
                Volunteer with us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default CTA;
