import { ArchiveProps } from "@/types/sanity.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ArchiveItemProps {
  title: string;
  url: string;
  imgSrc: string;
}

export const ArchiveItem = ({ data }: { data: ArchiveProps }) => {
  return (
    <Link
      href={`http://${data.url}/`}
      target="_blank"
      className="flex flex-row gap-6 pb-6 border-b border-dashed border-gray-200 last-of-type:border-b-0 group"
    >
      <div className="w-20 h-20 relative border rounded-xl overflow-hidden">
        <Image
          src={data.imgSrc ? data.imgSrc : ""}
          alt=""
          className="object-fit"
          fill
        />
      </div>
      <div className="flex flex-col gap-8">
        <span className="text-bodyMedium font-medium">{data.title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-bodyMedium text-gray-600 font-medium">
            {data.url}
          </span>
        </div>
      </div>
    </Link>
  );
};
