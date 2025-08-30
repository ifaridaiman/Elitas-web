'use client'
import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";
import { useRouter } from "next/navigation";
import { useServiceIcon } from "@/hooks/useServiceIcon";

interface BranchLocatorFeature {
  title: string;
  description: string;
  icon: string;
}

interface BranchLocatorData {
  title: string;
  description: string;
  features: BranchLocatorFeature[];
  buttonText: string;
  buttonLink: string;
}

interface BranchLocatorProps {
  branchLocator: BranchLocatorData;
}

const BranchLocator = ({ branchLocator }: BranchLocatorProps) => {
  const router = useRouter();
  const { getIcon } = useServiceIcon();

  return (
    <section className="py-20 bg-healthcare-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-healthcare-primary mb-4">
            {branchLocator.title}
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {branchLocator.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {branchLocator.features.map((feature: BranchLocatorFeature, index: number) => {
            const IconComponent = getIcon(feature.icon);
            const delays = ["100", "200", "300"];
            const animations = ["slide-right", "slide-up", "slide-left"];
            
            return (
              <div
                key={index}
                className="text-center"
                data-aos={animations[index]}
                data-aos-delay={delays[index]}
              >
                <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4">
                  {React.createElement(IconComponent, { className: "h-8 w-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-healthcare-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Button
            title={branchLocator.buttonText}
            size="lg"
            className="bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-healthcare mb-4"
            onClick={() => {
              router.push(branchLocator.buttonLink);
            }}
            leftIcon={<ArrowRight className="h-5 w-5 mr-2" />}
          />
        </div>
      </div>
    </section>
  );
};

export default BranchLocator;
