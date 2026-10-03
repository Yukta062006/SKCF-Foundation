import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Users, Clock, BookOpen } from 'lucide-react';

const stats = [
  {
    id: 'volunteer-hours',
    value: '1.4M+',
    label: 'Volunteer Hours',
    subtext: 'per year',
    icon: Clock,
  },
  {
    id: 'academic-hours',
    value: '292,000+',
    label: 'Academic Support',
    subtext: 'hours per year',
    icon: BookOpen,
  },
  {
    id: 'student-ratio',
    value: '3:1',
    label: 'Student-Teacher',
    subtext: 'ratio',
    icon: Users,
  },
];

export function Volunteers() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            heading="Powered by 1,000+ volunteers."
            subtext="Our success is built on the dedication of our volunteer community"
          />
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.1}>
              <div className="bg-cream rounded-2xl p-8 text-center hover:shadow-lift transition-all hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center text-teal-700 shadow-soft">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-2xl font-display font-bold text-ink mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-medium text-teal-700 mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-ink/70">
                  {stat.subtext}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal className="mt-12 text-center">
          <Button variant="primary" href="/our-work#contact">
            Volunteer with us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export default Volunteers;
