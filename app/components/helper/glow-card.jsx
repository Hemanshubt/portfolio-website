"use client"

import { useEffect } from 'react';

const GlowCard = ({ children, identifier = '' }) => {
  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    // Only proceed if elements are found
    if (!CONTAINER || !CARDS.length) return;

    const UPDATE = (event) => {
      const rect = CONTAINER.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      CARDS.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardX = -(cardRect.left - rect.left) + x;
        const cardY = -(cardRect.top - rect.top) + y;

        card.style.setProperty('--mouse-x', `${cardX}px`);
        card.style.setProperty('--mouse-y', `${cardY}px`);
      });
    };

    document.body.addEventListener('pointermove', UPDATE);

    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container glow-container-${identifier}`}>
      <div className={`glow-card glow-card-${identifier}`}>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;
