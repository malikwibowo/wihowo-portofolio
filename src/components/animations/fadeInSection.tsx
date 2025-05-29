"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInSectionProps extends PropsWithChildren {
  delay?: number;
  variant?: "top-to-bottom" | "bottom-to-top";
  stagger?: number;
  className?: string;
}

export default function FadeInSection({
  children,
  delay = 0,
  variant = "bottom-to-top",
  stagger = 0.2,
  className = "",
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = ref.current?.children;
            if (elements) {
              gsap.fromTo(
                elements,
                { opacity: 0, y: variant === "bottom-to-top" ? 25 : -25 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.75,
                  delay,
                  stagger: stagger,
                  ease: "power2.out",
                }
              );
            }
            observerInstance.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [delay, variant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
