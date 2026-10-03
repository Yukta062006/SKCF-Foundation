import React from 'react';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { siteConfig } from '../data/siteConfig';

export function Contact() {
  const { contact } = siteConfig;
  
  return (
    <section id="contact" className="py-16 lg:py-24 bg-teal-50/30">
      <Container>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-h2 font-display mb-4">
              Get in Touch
            </h2>
            <p className="text-body text-ink/70">
              We'd love to hear from you. Contact us to learn more about our work or how you can get involved.
            </p>
          </div>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-bold text-ink mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-ink/60 mb-1">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg text-teal-700 hover:text-marigold-400 transition-colors font-medium"
                  >
                    {contact.email}
                  </a>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-ink/60 mb-1">Phone</p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${contact.phone1}`}
                      className="block text-lg text-teal-700 hover:text-marigold-400 transition-colors font-medium"
                    >
                      {contact.phone1}
                    </a>
                    <a
                      href={`tel:${contact.phone2}`}
                      className="block text-lg text-teal-700 hover:text-marigold-400 transition-colors font-medium"
                    >
                      {contact.phone2}
                    </a>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-ink/60 mb-1">Address</p>
                  <p className="text-lg text-ink/80">
                    {contact.address}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-teal-50">
                <a
                  href="https://maps.google.com/?q=Wz-646/2/3,+B-1+Mini+Market,+Janak+Puri,+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-marigold-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-bold text-ink mb-6">Send us a Message</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink/60 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-cream rounded-lg border border-teal-50 focus:border-teal-700 focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink/60 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-cream rounded-lg border border-teal-50 focus:border-teal-700 focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink/60 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-cream rounded-lg border border-teal-50 focus:border-teal-700 focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-marigold-400 text-ink font-bold rounded-pill hover:bg-marigold-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Contact;
