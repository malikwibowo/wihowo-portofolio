import React from "react";
import Image from "next/image";

export interface SocialWrapperProps {
  title: string;
  socials: Socials[];
}

type Socials = {
  imgSrc: string;
  link: string;
  href: string;
  name: string;
};

export const SocialWrapper = (props: SocialWrapperProps) => {
  const { title, socials } = props;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-bodyMedium font-medium">{title}</span>
      <div className="flex flex-col">
        {socials.map((social, index) => (
          <div
            key={index}
            className="py-3 flex flex-row justify-between items-center gap-4 border-b border-dashed border-gray-200"
          >
            <div className="flex flex-row items-center gap-2">
              <div className="relative w-4 h-4">
                <Image
                  src={social.imgSrc}
                  alt={social.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-bodyMedium text-gray-600">
                {social.name}
              </span>
            </div>
            <span className="text-bodyMedium">{social.link}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
