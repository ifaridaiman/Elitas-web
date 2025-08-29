import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavbar from "@/components/container/HeaderNavbar";
import Footer from "@/components/container/Footer";
import ComingSoon from "@/components/container/ComingSoon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elitas Clinic",
  description: "Compassionate and personalized healthcare to the community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Toggle between coming soon mode and production mode
  // Set to true to show coming soon page, false for normal site
  const isComingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isComingSoonMode ? (
          <ComingSoon />
        ) : (
          <>
            <HeaderNavbar />  
            <div className="flex-1">
              <div className="min-h-screen">
                {children}
              </div>
            </div>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
