import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FadeInSection from "../animations/fadeInSection";

interface FooterProps {
  onLinkClick?: () => void; // Optional callback
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <FadeInSection delay={1}>
          <div className="w-full grid grid-cols-2">
            <Button variant="link" className="justify-start" asChild>
              <Link href="/works" onClick={onLinkClick}>
                Work
              </Link>
            </Button>
            <Button variant="link" className="justify-start" asChild>
              <Link href="/things" onClick={onLinkClick}>
                Things
              </Link>
            </Button>
            <Button variant="link" className="justify-start" asChild>
              <Link href="/socials" onClick={onLinkClick}>
                Socials
              </Link>
            </Button>
            <Button variant="link" className="justify-start" asChild>
              <Link href="/moments" onClick={onLinkClick}>
                Moments
              </Link>
            </Button>
            <Button variant="link" className="justify-start" asChild>
              <Link href="/writings" onClick={onLinkClick}>
                Writing
              </Link>
            </Button>
            <Button variant="link" className="justify-start" asChild>
              <Link href="/archive" onClick={onLinkClick}>
                Archive
              </Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
};
