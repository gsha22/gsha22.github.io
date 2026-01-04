'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0.8);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    
    // Use requestAnimationFrame to ensure DOM is painted
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (contentRef.current) {
          const height = contentRef.current.scrollHeight;
          // Speed in pixels per second
          const pixelsPerSecond = 1000;
          const calculatedDuration = height / pixelsPerSecond;
          
          console.log('Page height:', height, 'Duration:', calculatedDuration);
          
          setDuration(calculatedDuration);
          setIsReady(true);
        }
      });
    });
  }, [children]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ 
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0
      }}
      animate={isReady ? { 
        clipPath: 'inset(0 0 0 0)',
        opacity: 1
      } : {}}
      exit={{ 
        clipPath: 'inset(0 0 100% 0)',
        opacity: 0
      }}
      transition={{
        duration: duration,
        ease: 'linear',
      }}
      style={{ willChange: 'clip-path, opacity' }}
    >
      {children}
    </motion.div>
  );
}