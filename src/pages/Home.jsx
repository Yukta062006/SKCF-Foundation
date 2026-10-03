import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Hero } from '../home/Hero';
import { TrustStrip } from '../home/TrustStrip';
import { Mission } from '../home/Mission';
import { Impact } from '../home/Impact';
import { ActivitiesPreview } from '../home/ActivitiesPreview';
import { Reach } from '../home/Reach';
import { Moments } from '../home/Moments';
import { CTA } from '../home/CTA';

export function Home() {
  const description = 'SKCF is a Delhi-based NGO providing free, quality education, nutrition and clothing to underprivileged children across India. Learn how you can donate or volunteer.';
  
  return (
    <>
      <Hero />
      <TrustStrip />
      <Mission />
      <Impact />
      <ActivitiesPreview />
      <Reach />
      <Moments />
      <CTA />
    </>
  );
}

export default Home;
