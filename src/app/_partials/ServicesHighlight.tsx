'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";
import ServiceCard from "../../components/ui/ServiceCard";
import topServicesData from "@/contents/homepage.json"

const ServicesHighlight = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
            Our Top Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to meet your unique
            needs with experienced professionals and modern facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topServicesData.services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link href="/services">
            <Button
              title="View All Services"
              onClick={() => {}}
              size="lg"
              className="bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-healthcare"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
