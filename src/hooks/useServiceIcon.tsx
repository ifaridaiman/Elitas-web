import React from 'react';
import { Heart, Users, Shield, Stethoscope, Search, Baby, Briefcase, Scissors, Plane, Lightbulb, MapPin, Calendar, Phone } from 'lucide-react';

export const useServiceIcon = () => {
  const getIcon = (iconName: string, className: string = "h-8 w-8") => {
    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
      Heart,
      Users,
      Shield,
      Stethoscope,
      Search,
      Baby,
      Briefcase,
      Scissors,
      Plane,
      Lightbulb,
      MapPin,
      Calendar,
      Phone
    };
    return iconMap[iconName] || Heart;
  };

  return { getIcon };
};