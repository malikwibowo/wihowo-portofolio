import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className="w-full grid grid-cols-2">
          <Button variant="link" className="justify-start" asChild>
            <Link href="/works">Work</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href="/things">Things</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href="/socials">Socials</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href="/moments">Moments</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href="/writings">Writing</Link>
          </Button>
          <Button variant="link" className="justify-start" asChild>
            <Link href="/archive">Archive</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
