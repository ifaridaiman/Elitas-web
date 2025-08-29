'use client'
import React, { useState, useEffect } from 'react';
import { Clock, Mail, Bell, ArrowRight, Heart, Shield, Users } from 'lucide-react';
import Button from '../ui/Button';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Set target date (30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

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
            We're working hard to bring you an exceptional healthcare experience. 
            Our new platform will revolutionize how you access quality medical care.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-healthcare-primary mb-6 flex items-center justify-center">
            <Clock className="h-6 w-6 mr-2" />
            Launch Countdown
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-healthcare shadow-healthcare p-4">
                <div className="text-2xl md:text-3xl font-bold text-healthcare-primary">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-foreground/70 uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
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

        {/* Email Subscription */}
        <div className="mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-healthcare p-8 shadow-healthcare max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Bell className="h-6 w-6 text-healthcare-primary mr-2" />
              <h3 className="text-xl font-semibold text-healthcare-primary">
                Get Notified
              </h3>
            </div>
            <p className="text-foreground/70 mb-6">
              Be the first to know when we launch. We'll send you an exclusive invitation.
            </p>
            
            {isSubscribed ? (
              <div className="text-center">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <p className="text-success font-medium">Thank you for subscribing!</p>
                <p className="text-sm text-foreground/70">We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-foreground/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 border border-healthcare-secondary rounded-healthcare focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
                    required
                  />
                </div>
                <Button
                  title="Notify Me"
                  onClick={() => {}}
                  size="lg"
                  className="w-full bg-healthcare-primary hover:bg-healthcare-primary/90 text-white rounded-healthcare"
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                />
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-foreground/60">
          <p className="text-sm">
            © 2024 Elitas Clinic. All rights reserved.
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