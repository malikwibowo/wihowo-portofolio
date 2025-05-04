import { RoundedDivider } from "@/components/global/roundedDivider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import slugify from "react-slugify";

export interface WritingsItemProps {
  title: string;
  date: string;
  readMinutes?: string;
  url?: string;
  imgSrc?: string;
  category?: string;
}

export const WritingsItem = ({ data }: { data: WritingsItemProps }) => {
  const { title, date, readMinutes, url, imgSrc, category } = data;

  return (
    <Link
      href={url ? url : `/poetry/${slugify(title)}`}
      className="flex flex-row justify-between gap-6 pb-6 border-b border-dashed border-gray-200 last-of-type:border-b-0 group"
    >
      <div className="flex flex-col gap-8">
        <span className="text-bodyMedium font-medium">{title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-bodyMedium text-gray-600">{date}</span>
          {readMinutes && (
            <>
              <RoundedDivider />
              <span className="text-bodyMedium text-gray-600">
                {readMinutes}
              </span>
            </>
          )}
          {category && (
            <>
              <RoundedDivider />
              <span className="text-bodyMedium text-gray-600">{category}</span>
            </>
          )}
        </div>
      </div>
      {imgSrc && (
        <div className="w-20 h-20 relative border rounded-xl overflow-hidden">
          <Image src={imgSrc} alt="" className="object-fit" fill />
        </div>
      )}
    </Link>
  );
};
