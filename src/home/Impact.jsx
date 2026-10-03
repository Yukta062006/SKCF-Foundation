import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Counter } from '../components/ui/Counter';
import { motion } from 'framer-motion';

export function Impact() {
  return (
    <section className="py-20 lg:py-32 bg-cream/30">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            heading="Our Impact in Numbers"
            subtext="Figures as published by SKCF"
          />
        </Reveal>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          <Reveal delay={0}>
            <Counter
              value={1000}
              suffix="+"
              label="Students Taught"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Counter
              value={150000}
              suffix="+"
              label="People Benefited"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Counter
              value={10}
              suffix=""
              label="States Active"
            />
          </Reveal>
          <Reveal delay={0.3}>
            <Counter
              value={1000}
              suffix="+"
              label="Volunteers"
            />
          </Reveal>
        </motion.div>
      </Container>
    </section>
  );
}

export default Impact;
