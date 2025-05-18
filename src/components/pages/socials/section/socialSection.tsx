import React from "react";
import { SocialWrapper } from "@/components/pages/socials/components/socialWrapper";
import { ContactForm } from "@/components/pages/socials/components/contactForm";
import FadeInSection from "@/components/animations/fadeInSection";
import { SocialProps } from "@/types/sanity.types";

export const SocialSection = ({ data }: { data: SocialProps[] }) => {
  return (
    <section className="w-full pt-6 md:pt-8 pb-16 md:pb-20">
      <div className="max-w-md mx-auto px-4 md:px-0">
        <FadeInSection className="flex flex-col gap-[5.5rem]" delay={1}>
          {data.map((social, index) => (
            <SocialWrapper
              key={index}
              title={social.title ? social.title : "Socials"}
              socials={social.socials ? social.socials : []}
            />
          ))}
          <div className="flex flex-col gap-4">
            <span className="text-bodyMedium font-medium">
              /Or start with typing
            </span>
            <ContactForm />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};
