import React from 'react';

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  align = 'left',
}) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="text-eyebrow text-marigold-400 mb-3 tracking-wider uppercase">
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2 className="text-h2 mb-4 leading-tight">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="text-body max-w-2xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
