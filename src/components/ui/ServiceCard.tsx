import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useServiceIcon } from '../../hooks/useServiceIcon';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href
}) => {
  const { getIcon } = useServiceIcon();

  return (
    <div className="bg-white rounded-healthcare shadow-healthcare hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col">
      {/* Icon */}
      <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mb-4 text-white">
        {icon && getIcon(icon)}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-healthcare-primary mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-foreground/70 mb-4 flex-grow">
        {description}
      </p>

      {/* Features */}
      {/* <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-foreground/80">
            <span className="w-1.5 h-1.5 bg-healthcare-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul> */}

      {/* Learn More Link */}
      {
        href && (

          <Link
            href={href}
            className="inline-flex items-center text-healthcare-primary hover:text-healthcare-accent transition-colors duration-200 font-medium mt-auto"
          >
            Learn More
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        )
      }

    </div>
  );
};

export default ServiceCard;