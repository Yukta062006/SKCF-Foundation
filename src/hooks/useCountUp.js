import { useEffect, useRef, useState } from 'react';

export function useCountUp({ value, duration = 1600, start = 0, delay = 0 }) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const requestRef = useRef();
  const startTimeRef = useRef();
  
  useEffect(() => {
    if (hasAnimated) return;
    
    const animate = (time) => {
      if (!startTimeRef.current) startTimeRef.current = time + delay;
      const progress = Math.min((time - startTimeRef.current) / duration, 1);
      
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      const newCount = Math.floor(start + (value - start) * ease);
      
      if (progress < 1) {
        setCount(newCount);
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setCount(value);
        setHasAnimated(true);
      }
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [value, duration, start, delay, hasAnimated]);
  
  return { count, hasAnimated };
}
