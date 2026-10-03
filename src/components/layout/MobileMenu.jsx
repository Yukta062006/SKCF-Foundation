import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import skcfLogo from '../../assets/images/skcf-logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const menuRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstButton = menuRef.current.querySelector('button, a');
      firstButton?.focus();
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/our-work' },
  ];

  const handleNavClick = (path) => {
    onClose();
    if (path === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            ref={menuRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-cream z-50 lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-teal-50">
                <div className="flex items-center gap-3">
                  <img
                    src={skcfLogo}
                    alt="SK Children Foundation logo"
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-lg font-display font-bold text-ink">
                    Menu
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:bg-teal-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6 space-y-4 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      if (link.path === '#contact') {
                        e.preventDefault();
                        handleNavClick('#contact');
                      }
                    }}
                    className="block text-xl font-display font-bold text-ink hover:text-marigold-400 transition-colors py-3 px-4 rounded-xl hover:bg-teal-50"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-teal-50">
                  <a
                    href={siteConfig.donateUrl || '#contact'}
                    onClick={(e) => {
                      if (siteConfig.donateUrl) {
                        // Would navigate to external URL
                      }
                    }}
                    className="block w-full px-6 py-4 bg-marigold-400 text-ink font-bold text-center rounded-pill hover:bg-marigold-600 transition-colors"
                  >
                    Donate Now
                  </a>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-teal-50">
                <p className="text-sm text-ink/60 text-center">
                  Registered under the Indian Trust Act, 1882
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
