"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const LoadComponent = () => {
  const ellipseRefs = useRef<SVGElement[]>([]);

  useEffect(() => {
    // Create the GSAP timeline
    const tl = gsap.timeline({ repeat: -1 });

    // Add animations for each ellipse
    ellipseRefs.current.forEach((ellipse, index) => {
      tl.to(
        ellipse,
        {
          y: -5, // Move up by 10px
          duration: 0.5,
          fillOpacity: 1, // Remove opacity during bounce
          ease: "power1.inOut",
        },
        index * 0.25 // Stagger the animations by 0.25s
      ).to(
        ellipse,
        {
          y: 5, // Move back to the original position
          duration: 0.5,
          fillOpacity: 0.32, // Restore opacity
          ease: "power1.inOut",
        },
        index * 0.25 + 0.5 // Stagger the return animation
      );
    });

    return () => {
      // Clear the timeline on unmount
      tl.kill();
    };
  }, []);

  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        ref={(el) => {
          if (el && !ellipseRefs.current.includes(el))
            ellipseRefs.current.push(el);
        }}
        cx="4.99999"
        cy="12"
        rx="2.00001"
        ry="2"
        transform="rotate(180 4.99999 12)"
        fill="white"
      />
      <ellipse
        ref={(el) => {
          if (el && !ellipseRefs.current.includes(el))
            ellipseRefs.current.push(el);
        }}
        cx="11.999"
        cy="12"
        rx="2.00001"
        ry="2"
        transform="rotate(180 11.999 12)"
        fill="white"
        fillOpacity="0.32"
      />
      <ellipse
        ref={(el) => {
          if (el && !ellipseRefs.current.includes(el))
            ellipseRefs.current.push(el);
        }}
        cx="19"
        cy="12"
        rx="2.00001"
        ry="2"
        transform="rotate(180 19 12)"
        fill="white"
        fillOpacity="0.32"
      />
    </svg>
  );
};
