
import React, { useEffect, useRef } from "react";

interface MessageBubbleProps {
  children: React.ReactNode;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ children }) => {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    const handleScroll = () => {
      const rect = bubble.getBoundingClientRect();
      const scrollPercent = rect.top / window.innerHeight;
      const offset = Math.sin(scrollPercent) * 50; // Oscillates between -50px and 50px
      
      // Only apply transform when element is in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bubble.style.transform = `translateX(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex w-full items-center gap-2 text-[32px] text-[rgba(30,30,30,1)] font-normal leading-[38px] px-[200px] mt-5 max-md:max-w-full max-md:px-5">
      <div 
        ref={bubbleRef}
        className="self-stretch bg-white min-w-60 w-[710px] gap-2 my-auto px-16 py-14 rounded-[45px_45px_45px_6px] max-md:max-w-full max-md:px-5 transition-transform duration-300 ease-out"
      >
        {children}
      </div>
    </div>
  );
};
