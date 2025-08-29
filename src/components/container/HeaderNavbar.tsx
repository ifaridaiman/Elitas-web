'use client'
import React from "react";
import Navbar from "../composite/Navbar";
import Header from "../composite/Header"
import { useRouter } from "next/navigation";

const HeaderNavbar = () => {
  const router = useRouter();
  return (
    <>
    <Header  />
      <Navbar
        logoUrl="/assets/logo.svg"
        title="Elitas Clinic"
        tagline="Innovative Healthcare Solutions"
        navigationItems={[
          { label: "Home", href: "/" },
          { label: "Specialties", href: "/specialties" },
          { label: "Doctors", href: "/doctors" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaButton={{
          title: "Book Now",
          onClick: () => router.push("/booking"),
          color: "healthcare-primary",
          size: "lg",
          variant: "solid",
        }}
      />
    </>
  );
};

export default HeaderNavbar;
