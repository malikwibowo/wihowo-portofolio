"use client";

import { RoundedDivider } from "@/components/global/roundedDivider";
import { PoetryProps } from "@/types/sanity.types";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";

export const PoetryItem = ({ data }: { data: PoetryProps }) => {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    if (!arrow) return;
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      arrow,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, ease: "power1.out" }
    );

    const link = arrow.closest("a");
    if (link) {
      link.addEventListener("mouseenter", () => tl.play());
      link.addEventListener("mouseleave", () => tl.reverse());
    }

    return () => {
      if (link) {
        link.removeEventListener("mouseenter", () => tl.play());
        link.removeEventListener("mouseleave", () => tl.reverse());
      }
    };
  }, []);

  return (
    <Link
      href={`/writings/${data.slug}`}
      className="flex flex-row justify-between gap-6 pb-6 border-b border-dashed border-gray-200 last-of-type:border-b-0 group"
    >
      <div className="flex flex-col gap-8">
        <span className="text-bodyMedium font-medium">{data.title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-bodyMedium text-gray-600">{data.date}</span>
          {data.category && (
            <>
              <RoundedDivider />
              <span className="text-bodyMedium text-gray-600">
                {data.category}
              </span>
              <ArrowUpRight ref={arrowRef} size={16} />
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
