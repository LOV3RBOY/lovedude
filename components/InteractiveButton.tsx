'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InteractiveButtonProps {
  onClick: () => void;
}

export default function InteractiveButton({ onClick }: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => setIsClicked(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <button
      className={`
        relative
        pointer-events-auto
        transition-all
        duration-300
        transform
        ${isHovered ? 'scale-110' : 'scale-100'}
        ${isClicked ? 'scale-90' : ''}
        group
        mx-2
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Show Easter Egg Video"
    >
      {/* Subtle glow effect */}
      <div
        className={`
          absolute
          inset-0
          rounded-full
          transition-all
          duration-300
          ${isHovered ? 'opacity-100 scale-135' : 'opacity-0 scale-100'}
          bg-white/10
          blur-md
        `}
      />
      
      {/* Animated ring */}
      <div
        className={`
          absolute
          inset-0
          rounded-full
          border-2
          border-white/20
          transition-all
          duration-300
          ${isHovered ? 'scale-135 opacity-100' : 'scale-100 opacity-50'}
          animate-ping
        `}
      />

      {/* Continuous subtle pulse */}
      <div
        className={`
          absolute
          inset-0
          rounded-full
          bg-white/5
          animate-pulse
          ${isHovered ? 'opacity-100' : 'opacity-50'}
        `}
      />

      {/* Button image */}
      <div className="relative z-10 transition-transform duration-300 ease-in-out transform hover:rotate-90">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/087B588C-EFDB-4432-B7B8-060131B6034E.PNG-efKeocz8My2SrOkd4R9fvBsz12qi1I.png"
          width={80}
          height={80}
          alt="Interactive X Button"
          className="transition-all duration-300"
          style={{
            filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
          }}
        />
      </div>
    </button>
  );
}

