import ImageWrapper from "@/components/pages/home/components/imageWrapper";
import React from "react";

export const PayzenContent = () => {
  return (
    <div className="pt-8 pb-[7.25rem]">
      <div className="max-w-lg mx-auto px-4 md:px-0">
        <div className="w-full flex flex-col gap-6">
          <ImageWrapper src="/assets/images/works/payzen/payzen1.webp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper src="/assets/images/works/payzen/payzen2.webp" />
            <ImageWrapper src="/assets/images/works/payzen/payzen3.webp" />
          </div>
          <ImageWrapper src="/assets/images/works/payzen/payzen4.webp" />
          <ImageWrapper src="/assets/images/works/payzen/payzen5.webp" />
          <ImageWrapper src="/assets/images/works/payzen/payzen6.webp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageWrapper src="/assets/images/works/payzen/payzen7.webp" />
            <ImageWrapper src="/assets/images/works/payzen/payzen8.webp" />
          </div>
          <ImageWrapper src="/assets/images/works/payzen/payzen9.webp" />
          <ImageWrapper src="/assets/images/works/payzen/payzen10.webp" />
        </div>
      </div>
    </div>
  );
};
