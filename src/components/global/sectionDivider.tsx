"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface SectionDividerProps {
  delay?: number;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  delay = 0,
}) => {
  const dividerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dividerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(dividerRef.current, {
              width: "100%",
              duration: 0.85,
              delay,
              ease: "power2.in",
            });
          } else {
            gsap.to(dividerRef.current, {
              width: "0%",
              duration: 0.85,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(dividerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div className="max-w-md mx-auto px-4 md:px-0">
      <div
        ref={dividerRef}
        className="w-full h-[0.0625rem] bg-gray-200"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};
