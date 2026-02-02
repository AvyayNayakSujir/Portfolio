'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  texts: string[];
  className?: string;
  delay?: number;
  typingSpeed?: number;
  pauseBetween?: number;
}

export default function TypingEffect({ 
  texts,
  className = '', 
  delay = 0,
  typingSpeed = 100,
  pauseBetween = 500
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || isComplete) return;

    const currentText = texts[currentTextIndex];
    
    if (currentCharIndex < currentText.length) {
      // Continue typing current text
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (currentTextIndex < texts.length - 1) {
      // Move to next text after pause
      const timeout = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, pauseBetween);

      return () => clearTimeout(timeout);
    } else {
      // All texts completed
      setIsComplete(true);
    }
  }, [displayText, currentCharIndex, currentTextIndex, texts, isStarted, typingSpeed, pauseBetween, isComplete]);

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <span className="inline-block w-0.5 h-[0.9em] bg-current ml-1 animate-pulse" />
      )}
    </span>
  );
}
