import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

interface NavigationItem {
  label: string;
  href: string;
}

interface CTAButtonProps {
  title: string;
  onClick: () => void;
  color?:
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "destructive"
  | "healthcare-primary"
  | "healthcare-accent";
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
}

interface NavbarProps {
  className?: string;
  logoUrl?: string;
  logoAlt?: string;
  title?: string;
  tagline?: string;
  navigationItems?: NavigationItem[];
  ctaButton?: CTAButtonProps;
}

const Navbar: React.FC<NavbarProps> = ({
  logoUrl = "/assets/logo.svg",
  logoAlt = "Elitas Clinic Logo",
  title = "Elitas Clinic",
  tagline = "Your Health, Our Priority",
  navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about-us" },
    { label: "Branches", href: "/branches" },
    { label: "Contact", href: "/contact-us" },
  ],
  ctaButton = {
    title: "Book Appointment",
    onClick: () => (window.location.href = "/contact-us"),
    color: "healthcare-primary",
    size: "md",
  },
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`bg-card shadow-healthcare`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center justify-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-10 h-10">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-healthcare-primary hidden md:block">
                  {title}
                </h1>
                {tagline && (
                  <p className="text-xs text-healthcare-accent hidden sm:block">
                    {tagline}
                  </p>
                )}
              </div>
            </Link>
          </div>

          <div className="flex justify-between items-center gap-8">
            {/* Desktop headerigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${active
                      ? "text-healthcare-primary border-b-2 border-healthcare-primary pb-1"
                      : "text-foreground hover:text-healthcare-primary"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA Button */}
              {ctaButton && (
                <div className="hidden md:m-0 md:block">
                  <Button
                    title={ctaButton.title}
                    onClick={ctaButton.onClick}
                    color={ctaButton.color || "healthcare-primary"}
                    size={ctaButton.size || "sm"}
                    variant={ctaButton.variant || "solid"}
                    className="bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-md"
                  />
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-healthcare-primary hover:text-healthcare-accent hover:bg-healthcare-warm/10 focus:outline-none focus:ring-2 focus:ring-healthcare-accent transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close Icon */}
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-healthcare-warm/5 rounded-lg mt-2 border border-healthcare-secondary">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md font-medium transition-colors duration-200 relative ${active
                  ? "text-healthcare-primary bg-healthcare-warm/10 border-l-4 border-healthcare-primary"
                  : "text-healthcare-primary hover:text-healthcare-accent hover:bg-healthcare-warm/10"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          {/* Mobile CTA Button */}
          {ctaButton && (
            <div className="pt-2">
              <Button
                title={ctaButton.title}
                onClick={() => {
                  ctaButton.onClick();
                  setIsMobileMenuOpen(false);
                }}
                color={ctaButton.color || "healthcare-primary"}
                size={ctaButton.size || "md"}
                variant={ctaButton.variant || "solid"}
                className="w-full shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
