'use client'
import React from "react";
import { MapPin, Calendar, Phone, ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";
import { useRouter } from "next/navigation";

const BranchLocator = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-healthcare-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
            Find Our Nearest Clinic
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            With multiple convenient locations, quality healthcare is always
            within reach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className="text-center"
            data-aos="slide-right"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-healthcare-primary mb-2">
              3 Locations
            </h3>
            <p className="text-foreground/70">
              Strategically located for easy access
            </p>
          </div>
          <div className="text-center" data-aos="slide-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-healthcare-primary mb-2">
              Flexible Hours
            </h3>
            <p className="text-foreground/70">
              Extended hours to fit your schedule
            </p>
          </div>
          <div
            className="text-center"
            data-aos="slide-left"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-healthcare-primary mb-2">
              Easy Booking
            </h3>
            <p className="text-foreground/70">
              Quick appointments via phone or online
            </p>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Button
            title="View All Locations"
            size="lg"
            className="bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-healthcare mb-4"
            onClick={() => {
              router.push("/branches");
            }}
            leftIcon={<ArrowRight className="h-5 w-5 mr-2" />}
          />
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;
