// Image configuration for SKCF website
// All images are local assets in src/assets/images/

import heroImage from '../assets/images/hero.png';
import missionImage from '../assets/images/mission.png';
import educationImage from '../assets/images/education.png';
import foodImage from '../assets/images/food.png';
import communityImage from '../assets/images/community.png';
import eventsImage from '../assets/images/events.png';
import playroomImage from '../assets/images/playroom.png';
import founderImage from '../assets/images/founder.png';

export const siteImages = {
  // Hero section
  'hero-classroom': {
    path: heroImage,
    alt: 'Children studying together in an SKCF classroom',
    width: 1200,
    height: 800,
  },
  'hero-event': {
    path: heroImage,
    alt: 'Children celebrating an event at SKCF',
    width: 400,
    height: 400,
  },
  
  // Mission section
  'mission-classroom': {
    path: missionImage,
    alt: 'SKCF classroom environment',
    width: 800,
    height: 600,
  },
  
  // Activity preview cards - Using actual local images
  'activity-classes': {
    path: educationImage,
    alt: 'Free classes for students I-XII',
    width: 600,
    height: 400,
  },
  'activity-nutrition': {
    path: foodImage,
    alt: 'Nutritious meals served regularly',
    width: 600,
    height: 400,
  },
  'activity-clothing': {
    path: communityImage,
    alt: 'Clothing distribution drive',
    width: 600,
    height: 400,
  },
  'activity-events': {
    path: eventsImage,
    alt: 'Events and holistic development activities',
    width: 600,
    height: 400,
  },
  'activity-community': {
    path: communityImage,
    alt: 'Community support activities',
    width: 600,
    height: 400,
  },
  'activity-playroom': {
    path: playroomImage,
    alt: 'Playroom with toys and safety mats',
    width: 600,
    height: 400,
  },
  
  // Gallery items
  'gallery-diwali': {
    path: eventsImage,
    alt: 'Diwali "Share the Light" celebration',
    width: 600,
    height: 400,
  },
  'gallery-independence-day': {
    path: eventsImage,
    alt: 'Independence Day at the community centre',
    width: 600,
    height: 400,
  },
  'gallery-yoga': {
    path: eventsImage,
    alt: 'Yoga Day and life-skills sessions',
    width: 600,
    height: 400,
  },
  'gallery-beds': {
    path: communityImage,
    alt: 'Bed distribution with Hilti India',
    width: 600,
    height: 400,
  },
  'gallery-playroom': {
    path: playroomImage,
    alt: 'SKCF playroom interior',
    width: 600,
    height: 400,
  },
  'gallery-donation-drive': {
    path: communityImage,
    alt: 'Donation drive for a student\'s father',
    width: 600,
    height: 400,
  },
  
  // Founder
  'founder': {
    path: founderImage,
    alt: 'Mr. Raghav Sharma, Founder of SKCF',
    width: 600,
    height: 600,
  },
  
  // SEO
  'og-image': {
    path: heroImage,
    alt: 'SK Children Foundation - Education is Power',
    width: 1200,
    height: 630,
  },
};
