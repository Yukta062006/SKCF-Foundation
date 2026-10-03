import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { siteConfig } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { Heart, Users, Share2 } from 'lucide-react';

const ways = [
  {
    id: 'donate',
    title: 'Donate',
    description: 'Your contribution provides education, meals, and clothing to underprivileged children.',
    icon: Heart,
    color: 'text-coral-500',
    bg: 'bg-coral-50',
    href: siteConfig.donateUrl || '#contact',
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Share your skills and time. We need teachers, organizers, and supporters.',
    icon: Users,
    color: 'text-teal-700',
    bg: 'bg-teal-50',
    href: '#contact',
  },
  {
    id: 'spread',
    title: 'Spread the Word',
    description: 'Share our mission with your network. Awareness helps us reach more children.',
    icon: Share2,
    color: 'text-marigold-400',
    bg: 'bg-marigold-50',
    href: '#',
  },
];

export function WaysToHelp() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ways.map((way, index) => (
              <Reveal key={way.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lift transition-all hover:-translate-y-2 group">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${way.bg} flex items-center justify-center ${way.color}`}>
                    <way.icon size={24} />
                  </div>
                  <h3 className="text-h3 font-display font-bold text-ink mb-4">
                    {way.title}
                  </h3>
                  <p className="text-body text-ink/70 mb-6">
                    {way.description}
                  </p>
                  <Button variant="ghost" href={way.href}>
                    Get involved
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default WaysToHelp;
