"use client";

import { ArchiveProps } from "@/types/sanity.types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const ArchiveItem = ({ data }: { data: ArchiveProps }) => {
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
      href={`http://${data.url}/`}
      target="_blank"
      className="flex flex-row gap-6 pb-6 border-b border-dashed border-gray-200 last-of-type:border-b-0 group"
    >
      <div className="w-20 h-20 relative border rounded-xl overflow-hidden">
        <Image
          src={data.imgSrc ? data.imgSrc : ""}
          alt=""
          className="object-fit"
          fill
        />
      </div>
      <div className="flex flex-col gap-8">
        <span className="text-bodyMedium font-medium">{data.title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-bodyMedium text-gray-600 font-medium underline">
            {data.url}
          </span>
          <ArrowUpRight ref={arrowRef} size={16} />
        </div>
      </div>
    </Link>
  );
};
