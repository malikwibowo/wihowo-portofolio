"use client";

import Image from "next/image";
import { useState } from "react";

const ImageWrapper = ({ src }: { src: string }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const handleImageLoad = (img: HTMLImageElement) => {
    const { naturalWidth, naturalHeight } = img;
    setAspectRatio(naturalHeight / naturalWidth);
  };

  return (
    <div
      className="relative w-full rounded-[0.625rem] overflow-hidden"
      style={{
        paddingTop: aspectRatio ? `${aspectRatio * 100}%` : "56.25%",
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        onLoad={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          handleImageLoad(img);
        }}
        quality={100}
      />
    </div>
  );
};

export default ImageWrapper;
