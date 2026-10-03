import React from 'react';
import { useCountUp } from '../../hooks/useCountUp';

export function Counter({ value, suffix = '', label, duration = 1600, delay = 0 }) {
  const { count, hasAnimated } = useCountUp({ value, duration, delay });

  return (
    <div className="text-center">
      <div className="text-h1 font-display text-ink mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-body font-medium text-teal-700">
        {label}
      </div>
    </div>
  );
}

export default Counter;
