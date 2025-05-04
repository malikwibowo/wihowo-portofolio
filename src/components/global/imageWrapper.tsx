import React from "react";
import Image from "next/image";

interface ImageWrapperProps {
  className?: string;
  src: string;
  alt: string;
}

export const ImageWrapper = (data: ImageWrapperProps) => {
  const { className, src, alt } = data;

  return (
    <div className={`relative ${className || ""}`}>
      <Image src={src} alt={alt} fill className="object-fit" />
    </div>
  );
};
