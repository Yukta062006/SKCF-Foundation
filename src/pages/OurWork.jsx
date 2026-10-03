import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { PageHero } from '../work/PageHero';
import { About } from '../work/About';
import { activities } from '../data/activities';
import { ActivityRow } from '../work/ActivityRow';
import { EventsGallery } from '../work/EventsGallery';
import { Timeline } from '../work/Timeline';
import { Volunteers } from '../work/Volunteers';
import { WaysToHelp } from '../work/WaysToHelp';
import { Contact } from '../work/Contact';

export function OurWork() {
  const description = "Explore SKCF's activities: free offline and online classes for standards I-XII, nutritious meals, clothing drives, workshops and celebrations.";

  return (
    <>
      <title>Our Work | Classes, Nutrition, Clothing & Events | SK Children Foundation</title>
      <meta name="description" content={description} />
      <meta property="og:title" content="Our Work | Classes, Nutrition, Clothing & Events | SK Children Foundation" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://skchildrenfoundation.org/our-work" />
      <meta property="og:image" content="https://skchildrenfoundation.org/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Work | Classes, Nutrition, Clothing & Events | SK Children Foundation" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://skchildrenfoundation.org/og-image.jpg" />
      <link rel="canonical" href="https://skchildrenfoundation.org/our-work" />
      
      <PageHero />
      <About />
      
      <section id="activities" className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8">
          <h2 className="text-h2 font-display text-center mb-12">
            Our Activities
          </h2>
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <ActivityRow key={activity.id} activity={activity} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <EventsGallery />
      <Timeline />
      <Volunteers />
      <WaysToHelp />
      <Contact />
    </>
  );
}

export default OurWork;
