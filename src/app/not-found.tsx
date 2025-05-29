import React from "react";
import FadeInSection from "@/components/animations/fadeInSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-screen min-h-[40rem]">
      <FadeInSection
        delay={0.4}
        className="max-w-md mx-auto px-4 md:px-0 h-full flex flex-col justify-center gap-8 md:gap-16"
      >
        <div className="relative max-w-full w-full aspect-[5.1/2.1]">
          <Image
            src="/assets/images/404.svg"
            fill
            className="object-contain"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-h1 font-medium text-neutral-900">
              We can&apos;t seem to find that page
            </h1>
            <p className="text-bodyMedium text-neutral-600">
              Click below and let&apos;s get you back on track.
            </p>
          </div>
          <Button variant="default" asChild>
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
}
