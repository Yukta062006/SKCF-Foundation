import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { siteConfig } from '../../data/siteConfig';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { MobileMenu } from './MobileMenu';
import skcfLogo from '../../assets/images/skcf-logo.png';

export function Navbar() {
  const location = useLocation();
  const scrollDirection = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '#contact' },
  ];

  const isActive = (path) => {
    if (path === '#contact') {
      return location.pathname === '/our-work';
    }
    return location.pathname === path;
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-4'
        } ${
          scrollDirection === 'down' && isScrolled
            ? '-translate-y-full'
            : 'translate-y-0'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={skcfLogo}
                alt="SK Children Foundation logo"
                className="h-12 w-auto object-contain lg:h-14 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path === '#contact') {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-teal-700'
                      : 'text-ink/70 hover:text-ink'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-700 rounded-full transition-all duration-300" />
                  )}
                </Link>
              ))}
              
              <a
                href={siteConfig.donateUrl || '#contact'}
                className="px-5 py-2.5 bg-teal-700 text-cream font-bold text-sm rounded-pill hover:bg-teal-800 transition-colors shadow-soft"
              >
                Donate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-ink focus:outline-none focus:ring-2 focus:ring-teal-700 rounded-lg"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;
