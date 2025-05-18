"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { SocialArrayType } from "@/types/sanity.types";

export interface SocialWrapperProps {
  title: string;
  socials: SocialArrayType[];
}

export const SocialWrapper = (props: SocialWrapperProps) => {
  const { title, socials } = props;

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!", {
        duration: 3000,
      });
    });
  };

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
                  src={social.imgSrc ? social.imgSrc : ""}
                  alt={social.name ? social.name : "Social Icon"}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-bodyMedium text-gray-600">
                {social.name}
              </span>
            </div>
            {social.name === "Email" ? (
              <div
                onClick={() =>
                  handleCopyToClipboard(social.link ? social.link : "")
                }
                className="group flex flex-row items-center gap-2 text-bodyMedium cursor-pointer hover:underline underline-offset-2 relative"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-5">
                  {social.link}
                </span>
                <span className="absolute right-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-gray-900">
                  <Copy className="w-3 h-3" />
                </span>
              </div>
            ) : (
              <Link
                href={social.href ? social.href : ""}
                className="text-bodyMedium hover:underline underline-offset-2"
              >
                {social.link}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
