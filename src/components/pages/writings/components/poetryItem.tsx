import { RoundedDivider } from "@/components/global/roundedDivider";
import { PoetryProps } from "@/types/sanity.types";
import Link from "next/link";
import React from "react";

import slugify from "react-slugify";

export const PoetryItem = ({ data }: { data: PoetryProps }) => {
  return (
    <Link
      href={`/poetry/${slugify(data.title)}`}
      className="flex flex-row justify-between gap-6 pb-6 border-b border-dashed border-gray-200 last-of-type:border-b-0 group"
    >
      <div className="flex flex-col gap-8">
        <span className="text-bodyMedium font-medium">{data.title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-bodyMedium text-gray-600">{data.date}</span>
          {data.category && (
            <>
              <RoundedDivider />
              <span className="text-bodyMedium text-gray-600">
                {data.category}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
