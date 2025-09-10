import React from "react";
import Image from "next/image";

interface FounderProps {
  image: string;
  name: string;
  specialty: string;
  qualifications: string;
  bio: string;
}
const Founder = ({
  image,
  name,
  specialty,
  qualifications,
  bio,
}: FounderProps) => {
  return (
    <section className="py-20 bg-healthcare-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-healthcare-primary mb-6">
          Our Founder
        </h2>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Elitas Clinic was founded in 2010 with a mission to provide
          high-quality healthcare services to our community. We have since
          grown to become one of the leading healthcare providers in the
          region.
        </p>
        <div>
          <div className="bg-card border border-healthcare-secondary rounded-healthcare p-6 text-center shadow-healthcare">
            <div className="w-24 h-24 bg-healthcare-warm rounded-full flex items-center justify-center mx-auto mb-6">
              {image ? (
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span className="text-3xl font-bold text-healthcare-primary">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-healthcare-primary mb-2">
              {name}
            </h3>
            <div className="text-healthcare-accent font-medium mb-2">
              {specialty}
            </div>
            <div className="text-sm text-foreground/60 mb-4">
              {qualifications}
            </div>
            <p className="text-foreground/80 leading-relaxed">{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
