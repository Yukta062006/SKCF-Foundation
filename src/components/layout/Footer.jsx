import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import skcfLogo from '../../assets/images/skcf-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream pt-16 pb-8">
      <div className="container mx-auto px-5 sm:px-8">
        {/* Arch Top */}
        <div className="h-8 mb-12 overflow-hidden">
          <svg
            className="w-full h-full text-teal-700"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,181.3C672,181,768,203,864,208C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Mission */}
          <div>
            <div className="mb-6">
              <img
                src={skcfLogo}
                alt="SK Children Foundation logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-cream/80">
              An NGO in Delhi working throughout India to provide quality education to underprivileged kids.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-teal-50">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-cream/80 hover:text-marigold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-work" className="text-sm text-cream/80 hover:text-marigold-400 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-cream/80 hover:text-marigold-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href={siteConfig.officialSite} className="text-sm text-cream/80 hover:text-marigold-400 transition-colors">
                  Official Site
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-teal-50">Contact Us</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-marigold-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone1}`}
                  className="hover:text-marigold-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.contact.phone1}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Registration */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-teal-50">Registration</h4>
            <p className="text-sm text-cream/80 leading-relaxed">
              Registered under the Indian Trust Act, 1882 (R.NO 1305/2019)
            </p>
            <p className="text-sm text-cream/80 mt-4">
              Founded in 2016 by Mr. Raghav Sharma
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/60 text-center md:text-left">
              Redesign created as a web development assignment. Content and images belong to SK Children Foundation.
            </p>
            <p className="text-xs text-cream/60">
              {currentYear} SK Children Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
