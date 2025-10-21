import React from "react";
import { Phone, MapPin } from "lucide-react";

interface HeaderProps {
  phoneNumber?: string;
  multipleLocation?: string;
  announcement?: string;
}

const Header: React.FC<HeaderProps> = ({
  phoneNumber = "+6 011 1300-1410",
  multipleLocation = "4 Locations Available",
  announcement,
}) => {
  return (
    <div className="bg-healthcare-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {announcement ? (
          // Show announcement centered when there's an announcement
          <div className="flex justify-center items-center py-2 text-sm">
            <p className="text-sm text-healthcare-primary font-medium">
              {announcement}
            </p>
          </div>
        ) : (
          // Show phone number and multiple locations with justify-between when no announcement
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-healthcare-primary" />
              <a href={`tel:${phoneNumber}`}  className="text-sm text-healthcare-primary font-medium">
                {phoneNumber}
              </a>
              <span className="text-healthcare-primary"></span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-healthcare-primary" />
              <a href={`/branches`} className="text-sm text-healthcare-primary font-medium">
                {multipleLocation}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
