"use client";

import React, { useEffect, useRef } from "react";
import { Minus } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface StaticProjectData {
  vidSrc: string;
  year: string;
  name: string;
  desc: string;
  categories: string[];
  url?: string;
}

interface WorkCardProps {
  project: StaticProjectData;
}

export const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  const { vidSrc, year, name, desc, categories, url } = project;
  const stickyRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const stickyElement = stickyRef.current;
    const scaleElement = scaleRef.current;
    const sectionElement = sectionRef.current;
    const videoElement = videoRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (stickyElement && scaleElement && sectionElement && videoElement) {
        gsap.fromTo(
          scaleElement,
          { scale: 1, borderRadius: "0px" },
          {
            scale: 1.2,
            borderRadius: "16px",
            scrollTrigger: {
              trigger: sectionElement,
              start: "top top",
              end: "30% top",
              scrub: true,
            },
            ease: "power1.inOut",
          }
        );

        ScrollTrigger.create({
          trigger: sectionElement,
          start: "top top",
          end: "80% top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const duration = videoElement.duration;
            if (!isNaN(duration)) {
              videoElement.currentTime = progress * duration;
            }
          },
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Link href={url ? url : "#"}>
      <div
        ref={sectionRef}
        className="flex flex-col justify-between gap-8 w-full lg:h-[700vh]"
      >
        <div ref={stickyRef} className="lg:sticky lg:top-1/2 lg:mt-60">
          <div
            ref={scaleRef}
            className="lg:transform lg:-translate-y-1/2 lg:overflow-hidden"
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              preload="auto"
            >
              <source src={vidSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="grid grid-cols-[1.4fr_4.7fr] gap-6">
          <div>
            <span className="text-bodyMedium font-medium">{year}</span>
          </div>
          <div className="flex flex-col gap-3 max-w-[24rem]">
            <span className="text-bodyMedium font-medium">{name}</span>
            <p className="text-bodyMedium">{desc}</p>
            <div className="flex gap-2 items-center">
              <Minus className="text-gray-400" />
              {categories.map((category, index) => (
                <span key={index} className="text-bodySmall text-gray-600">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
