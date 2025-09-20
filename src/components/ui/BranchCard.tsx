
import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  isMain?: boolean;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
}

interface BranchCardProps {
  branch: Branch;
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  return (
    <div
      className={`border border-healthcare-secondary rounded-healthcare hover:shadow-healthcare transition-all duration-300 bg-white ${
        branch.isMain ? 'ring-2 ring-healthcare-accent' : ''
      }`}
    >
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl text-healthcare-primary flex items-center font-semibold">
              <MapPin className="h-5 w-5 mr-2" />
              {branch.name}
              {branch.isMain && (
                <span className="ml-2 bg-healthcare-accent text-white text-xs px-2 py-1 rounded-full">
                  Main Branch
                </span>
              )}
            </h3>
            <p className="text-foreground/70 mt-2">{branch.address}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Phone className="h-4 w-4 text-healthcare-primary flex-shrink-0" />
            <span className="text-foreground/80">{branch.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-4 w-4 text-healthcare-primary flex-shrink-0" />
            <span className="text-foreground/80">{branch.email}</span>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-semibold text-healthcare-primary mb-2 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Operating Hours
          </h4>
          <div className="text-sm text-foreground/80 space-y-1">
            <p>{branch.hours.weekdays}</p>
            <p>{branch.hours.saturday}</p>
            <p>{branch.hours.sunday}</p>
          </div>
        </div>

        {/* Services */}
        {/* <div>
          <h4 className="font-semibold text-healthcare-primary mb-2">Available Services</h4>
          <div className="flex flex-wrap gap-2">
            {branch.services.map((service, index) => (
              <span
                key={index}
                className="bg-healthcare-warm text-healthcare-primary text-xs px-3 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-healthcare-secondary">
          <a
            href={`https://maps.google.com?q=${encodeURIComponent(branch.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-healthcare px-4 py-2 text-center transition-colors duration-200 flex items-center justify-center"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </a>
          <a
            href={`tel:${branch.phone}`}
            className="flex-1 border border-healthcare-primary text-healthcare-primary hover:bg-healthcare-primary hover:text-white rounded-healthcare px-4 py-2 text-center transition-colors duration-200 flex items-center justify-center"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;