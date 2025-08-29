import React from "react";
import { Phone, MapPin } from "lucide-react";

interface HeaderProps {
  phoneNumber?: string;
  multipleLocation?: string;
  announcement?: string;
}

const Header: React.FC<HeaderProps> = ({
  phoneNumber = "+1 (555) 123-4567",
  multipleLocation = "5 Locations Available",
  announcement,
}) => {
  return (
    <div className="bg-healthcare-warm text-primary-foreground py-2 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {announcement ? (
          // Show announcement centered when there's an announcement
          <div className="flex justify-center">
            <p className="text-sm text-healthcare-primary font-medium">
              {announcement}
            </p>
          </div>
        ) : (
          // Show phone number and multiple locations with justify-between when no announcement
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-healthcare-primary" />
              <p className="text-sm text-healthcare-primary font-medium">
                {phoneNumber}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-healthcare-primary" />
              <p className="text-sm text-healthcare-primary font-medium">
                {multipleLocation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
