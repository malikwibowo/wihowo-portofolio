"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

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
          className="fixed pointer-events-none z-50 transition-transform"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
          }}
        >
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={100}
              height={100}
              className={clsx(
                "opacity-0 scale-95 animate-fade-in-burst absolute",
                `delay-[${i * 300}ms]`
              )}
              style={{ position: "relative", marginBottom: "0.5rem" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
