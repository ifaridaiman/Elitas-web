import React from "react";
import Image from "next/image";

interface SupportiveStaffProps {
  staffs: {
    description: string;
    staffImages: string;
  };
}

const SupportiveStaff = ({ staffs }: SupportiveStaffProps) => {
  return (
    <section className="py-20 bg-healthcare-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-healthcare-primary mb-6">
          Our Supportive Team
        </h2>
        <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
          {staffs.description}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src={staffs.staffImages}
          alt="Supportive Staff"
          width={1200}
          height={600}
          className="mx-auto mt-10 rounded-healthcare shadow-healthcare"
        />
      </div>
    </section>
  );
};

export default SupportiveStaff;
