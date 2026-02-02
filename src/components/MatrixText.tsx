'use client';

import { useEffect, useState, useRef } from 'react';

interface MatrixTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function MatrixText({ text, className = '', delay = 0 }: MatrixTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const iterations = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealing(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isRevealing) return;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let currentIteration = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            if (index < currentIteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('')
      );

      if (currentIteration >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }

      currentIteration += 1 / 3;
    }, 30);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, isRevealing]);

  return (
    <span className={className} aria-label={text}>
      {displayText || text.split('').map(() => '\u00A0').join('')}
    </span>
  );
}
