import React from 'react';
import { Heart, Users, Shield, Stethoscope, Search, Baby, Briefcase, Scissors, Plane, Lightbulb } from 'lucide-react';

export const useServiceIcon = () => {
  const getIcon = (iconName: string, className: string = "h-8 w-8") => {
    const iconMap: { [key: string]: React.ReactNode } = {
      Heart: <Heart className={className} />,
      Users: <Users className={className} />,
      Shield: <Shield className={className} />,
      Stethoscope: <Stethoscope className={className} />,
      Search: <Search className={className} />,
      Baby: <Baby className={className} />,
      Briefcase: <Briefcase className={className} />,
      Scissors: <Scissors className={className} />,
      Plane: <Plane className={className} />,
      Lightbulb: <Lightbulb className={className} />
    };
    return iconMap[iconName] || <Heart className={className} />;
  };

  return { getIcon };
};