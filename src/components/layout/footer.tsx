import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-md mx-auto h-full">
        <div className="w-full grid grid-cols-2">
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Work</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Things</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Socials</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Moments</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Writing</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href={""}>Archive</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
