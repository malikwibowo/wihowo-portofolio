"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onLinkClick?: () => void;
  variant?: "footer" | "navbar";
}

export const Footer: React.FC<FooterProps> = ({
  onLinkClick,
  variant = "footer",
}) => {
  const pathname = usePathname();

  const links = [
    { href: "/works", label: "Work" },
    { href: "/things", label: "Things" },
    { href: "/socials", label: "Socials" },
    { href: "/moments", label: "Moments" },
    { href: "/writings", label: "Writing" },
    { href: "/archive", label: "Archive" },
  ];

  const variantStyles = {
    footer: {
      container: "w-full py-12 md:py-20",
      layout: "w-full grid grid-cols-2",
      link: "justify-start text-bodyMedium font-normal transition-transform duration-300",
      activeLink: "text-gray-400",
      activeIndicator: "w-2 h-0.25 bg-gray-400",
    },
    navbar: {
      container: "w-full py-8 md:py-12",
      layout: "w-full grid gap-2 md:gap-0 grid-cols-1 md:grid-cols-2",
      link: "justify-center md:justify-start !text-h2 md:!text-bodyMedium font-normal min-h-[3.625rem] md:min-h-auto transition-transform duration-300",
      activeLink: "text-gray-400",
      activeIndicator: "w-2 h-0.25 bg-gray-400",
    },
  };

  const styles = variantStyles[variant];

  return (
    <footer className={styles.container}>
      <div className="max-w-md mx-auto px-4 md:px-0 h-full">
        <div className={styles.layout}>
          {links.map(({ href, label }) => {
            const isActive = pathname.includes(href);
            return (
              <Button
                key={href}
                variant="link"
                className={`${styles.link} hover:no-underline ${
                  isActive ? styles.activeLink : ""
                } group`}
                asChild
              >
                <Link href={href} onClick={onLinkClick}>
                  <div className="flex items-center gap-1.5">
                    <ArrowRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all duration-300"
                    />
                    <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                      {label}
                    </span>
                  </div>
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
