'use client'
import React from "react";
import Navbar from "../composite/Navbar";
import Header from "../composite/Header"
import { useRouter } from "next/navigation";
import navbarMenu from "@/contents/global.json"

const HeaderNavbar = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Navbar
        logoUrl="/assets/logo.svg"
        title="litas Clinic"
        tagline="Innovative Healthcare Solutions"
        navigationItems={navbarMenu.menuList.map((item) => ({
          label: item.title,
          href: item.link,
        }))}
        ctaButton={{
          title: "Book Appointment",
          onClick: () => router.push("/contact-us"),
          color: "healthcare-primary",
          size: "sm",
          variant: "solid",
        }}
      />
    </>
  );
};

export default HeaderNavbar;
