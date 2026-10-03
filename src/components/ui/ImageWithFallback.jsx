import React, { useState } from 'react';
import { Placeholder } from './Placeholder';
import { siteImages } from '../../data/images';

export function ImageWithFallback({ slot, alt, className = '', ...props }) {
  const [hasError, setHasError] = useState(false);
  const imageData = siteImages[slot];

  if (!imageData) {
    return (
      <Placeholder type="Camera" className={className} />
    );
  }

  const imageUrl = imageData.path;
  const fallbackAlt = imageData.alt || alt || 'SKCF Image';
  const width = imageData.width;
  const height = imageData.height;

  // If it's a dynamic import, we need to check for the module
  const isModule = typeof imageUrl === 'function';

  // For dynamic imports, we'll show placeholder until user adds actual images
  const showPlaceholder = isModule || hasError;

  if (showPlaceholder) {
    return (
      <Placeholder type={slot.split('-')[1] || 'default'} className={className} />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={fallbackAlt}
      className={className}
      width={width}
      height={height}
      loading={props.fetchPriority === 'high' ? 'eager' : 'lazy'}
      decoding={props.fetchPriority === 'high' ? 'sync' : 'async'}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}

export default ImageWithFallback;
