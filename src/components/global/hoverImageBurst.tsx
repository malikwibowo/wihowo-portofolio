"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";

export interface HoverImageBurstProps {
  children: ReactNode;
  images: string[];
}

export default function HoverImageBurst({
  children,
  images,
}: HoverImageBurstProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (hovering) {
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (hovering) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Switch image every 0.5 seconds
    } else {
      setCurrentImageIndex(0); // Reset to the first image when not hovering
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hovering, images.length]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="relative"
    >
      {children}

      {hovering && (
        <div
          className="hidden md:block fixed w-[14.5rem] h-[18.125rem] pointer-events-none z-100 transition-transform rounded-xl -rotate-4 overflow-hidden"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
          }}
        >
          <Image
            key={images[currentImageIndex]}
            src={images[currentImageIndex]}
            alt=""
            width={232 * 3}
            height={290 * 3}
            className="opacity-100 scale-100 transition-opacity duration-500 object-cover"
            style={{ position: "relative", marginBottom: "0.5rem" }}
          />
        </div>
      )}
    </div>
  );
}
