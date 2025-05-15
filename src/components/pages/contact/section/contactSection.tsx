import React from "react";
import { ContactForm } from "../../socials/components/contactForm";
import FadeInSection from "@/components/animations/fadeInSection";

export const ContactSection = () => {
  return (
    <section className="w-full h-screen min-h-[40rem]">
      <FadeInSection
        delay={0.4}
        className="max-w-md mx-auto px-4 md:px-0 h-full flex flex-col justify-center gap-8"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-bodyMedium text-gray-600">
              Let&apos;s get in touch and
            </span>
            <h1 className="text-h1 font-medium">Say Hi!</h1>
          </div>
        </div>
        <ContactForm />
      </FadeInSection>
    </section>
  );
};
