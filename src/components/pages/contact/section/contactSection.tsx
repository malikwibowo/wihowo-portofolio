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
        <ContactForm isTitle />
      </FadeInSection>
    </section>
  );
};
