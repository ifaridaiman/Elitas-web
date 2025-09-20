"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/ui/Button";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-healthcare-warm to-healthcare-secondary overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 healthcare-texture opacity-30"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-healthcare-primary leading-tight">
                Your Health,
                <span className="block text-healthcare-accent">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
                Experience comprehensive healthcare with our team of experienced
                professionals. From general health to specialized treatments,
                we&apos;re here for every step of your wellness journey.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-healthcare shadow-healthcare">
              <p className="text-healthcare-primary font-medium">
                &quot;Providing reliable, patient-first care with compassion,
                trust, and innovation at the heart of everything we do.&quot;
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us">
                <Button
                  title="Book Appointment"
                  onClick={() => {}}
                  size="lg"
                  color="healthcare-primary"
                  className="bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  leftIcon={<Calendar className="h-5 w-5 mr-2" />}
                  rightIcon={<ArrowRight className="h-5 w-5 ml-2" />}
                />
              </Link>
              <Link href="https://maps.google.com?q=Elitas+Clinic" target="_blank">
                <Button
                  title="Find Our Clinics"
                  onClick={() => {}}
                  variant="outline"
                  size="lg"
                  color="healthcare-primary"
                  className="border-healthcare-primary bg-white text-healthcare-primary hover:bg-healthcare-primary hover:text-white rounded-sm flex items-center"
                  leftIcon={<MapPin className="h-5 w-5 mr-2" />}
                />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-healthcare-primary">
                  10+
                </div>
                <div className="text-sm text-foreground/70">
                  Years Experience
                </div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-healthcare-primary">
                  3
                </div>
                <div className="text-sm text-foreground/70">
                  Clinic Locations
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-healthcare-primary">
                  15k+
                </div>
                <div className="text-sm text-foreground/70">Happy Patients</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-healthcare overflow-hidden shadow-2xl">
              <Image
                src="/assets/elitas-clinic-front.jpg"
                alt="Elitas Clinic - professional healthcare environment"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-healthcare-primary/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white p-4 rounded-healthcare shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs">Patient Satisfaction</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-healthcare shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-healthcare-primary">
                  100%
                </div>
                <div className="text-xs text-foreground/70">
                   Tailored Care Approach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
