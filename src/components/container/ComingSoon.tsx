import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';


const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healthcare-warm via-healthcare-secondary to-background flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo and Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-healthcare-primary mb-2">
            Elitas Clinic
          </h1>
          <p className="text-xl text-healthcare-primary/80">
            Your Health, Our Priority
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-healthcare-primary mb-4">
            Something Amazing is Coming Soon
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {`We're working hard to bring you an exceptional healthcare experience. 
            Our new platform will revolutionize how you access quality medical care.`}
          </p>
        </div>

        

        {/* Features Preview */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-healthcare-primary mb-6">
            What to Expect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: 'Comprehensive Care',
                description: 'Complete healthcare solutions for all your medical needs'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Expert Team',
                description: 'Experienced professionals dedicated to your wellbeing'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Modern Facilities',
                description: 'State-of-the-art equipment and comfortable environment'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-healthcare p-6 shadow-healthcare">
                <div className="w-16 h-16 bg-healthcare-primary rounded-healthcare flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-healthcare-primary mb-2">
                  {feature.title}
                </h4>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Footer */}
        <div className="text-center text-foreground/60">
          <p className="text-sm">
            © {new Date().getFullYear()} Elitas Clinic. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Follow us for updates and health tips
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;