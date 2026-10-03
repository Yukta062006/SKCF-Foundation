import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { CheckCircle, Calendar, MapPin, Users } from 'lucide-react';

const items = [
  {
    icon: CheckCircle,
    text: 'Registered under the Indian Trust Act, 1882',
  },
  {
    icon: Calendar,
    text: 'Founded in 2016',
  },
  {
    icon: MapPin,
    text: 'Active in 10 states',
  },
  {
    icon: Users,
    text: 'Volunteers from India, USA and Oman',
  },
];

export function TrustStrip() {
  return (
    <section className="py-8 bg-marigold-100/50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors">
                <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center text-white flex-shrink-0">
                  <item.icon size={16} />
                </div>
                <span className="text-sm font-medium text-ink/80">
                  {item.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustStrip;
