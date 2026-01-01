"use client";

import { useRef, useState, useEffect } from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollableContainer({ children, className = "" }: ScrollableContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    const rect = scrollRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    
    // Cancel any ongoing momentum scroll
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  // Handle mouse move with smooth scrolling
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    
    const rect = scrollRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX) * 1.2; // Reduced multiplier for smoother drag
    
    // Calculate velocity for momentum
    const now = Date.now();
    const timeDelta = now - lastTimeRef.current;
    if (timeDelta > 0) {
      const distance = e.pageX - lastXRef.current;
      velocityRef.current = distance / timeDelta;
    }
    
    scrollRef.current.scrollLeft = scrollLeft - walk;
    lastXRef.current = e.pageX;
    lastTimeRef.current = now;
  };

  // Momentum scrolling after drag ends
  useEffect(() => {
    if (!isDragging && velocityRef.current !== 0 && scrollRef.current) {
      const animate = () => {
        if (!scrollRef.current) return;
        
        velocityRef.current *= 0.92; // Friction factor
        
        if (Math.abs(velocityRef.current) > 0.1) {
          scrollRef.current.scrollLeft -= velocityRef.current * 10;
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          velocityRef.current = 0;
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging]);

  // Handle mouse up/leave
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle wheel scroll with smooth behavior
  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    
    // Smooth wheel scrolling
    const delta = e.deltaY * 0.5; // Reduced speed for smoother scroll
    scrollRef.current.scrollBy({
      left: delta,
      behavior: 'smooth'
    });
  };

  return (
    <div
      ref={scrollRef}
      className={`scrollable-container flex gap-4 overflow-x-auto cursor-grab active:cursor-grabbing ${className}`}
      style={{
        scrollBehavior: 'smooth',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}

