import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-white focus:text-teal-700 focus:font-bold focus:rounded-pill focus:shadow-lift"
    >
      Skip to main content
    </a>
  );
}

export default SkipLink;
