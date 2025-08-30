"use client"
import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  const whatsappNumber = "+60123456789"; // Replace with actual WhatsApp number
  const whatsappMessage = "Hello! I would like to inquire about your healthcare services.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <HeaderPage 
        title="Contact Us" 
        description="Get in touch with us for appointments, inquiries, or emergency assistance. We're here to help you with all your healthcare needs." 
      />
      
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Contact Card */}
          <div className="bg-white rounded-healthcare shadow-healthcare border border-healthcare-secondary p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-healthcare-primary mb-4">
                Ready to Connect?
              </h2>
              <p className="text-lg text-foreground/70">
                Reach out to us through WhatsApp for quick responses and easy communication.
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-healthcare text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                Chat with us on WhatsApp
              </button>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-healthcare-warm rounded-healthcare">
                <div className="bg-healthcare-primary p-3 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-primary mb-1">Phone</h3>
                  <p className="text-foreground/80">+1 (555) 123-4567</p>
                  <p className="text-sm text-foreground/60">Available 24/7 for emergencies</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-healthcare-warm rounded-healthcare">
                <div className="bg-healthcare-primary p-3 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-primary mb-1">Email</h3>
                  <p className="text-foreground/80">info@elitasclinic.com</p>
                  <p className="text-sm text-foreground/60">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-healthcare-warm rounded-healthcare">
                <div className="bg-healthcare-primary p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-primary mb-1">Main Location</h3>
                  <p className="text-foreground/80">L2-O3A, CIMB Hub, 26, Jln Sultan Ismail,</p>
                  <p className="text-foreground/80">Kuala Lumpur, 50250 Kuala Lumpur</p>
                  <p className="text-foreground/80">Kuala Lumpur, Malaysia</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-4 bg-healthcare-warm rounded-healthcare">
                <div className="bg-healthcare-primary p-3 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-healthcare-primary mb-1">Operating Hours</h3>
                  <p className="text-foreground/80">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-foreground/80">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-foreground/80">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="bg-red-50 border border-red-200 rounded-healthcare p-6 text-center">
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              Emergency Services
            </h3>
            <p className="text-red-700 mb-4">
              For medical emergencies, please call 999 or visit your nearest emergency room immediately.
            </p>
            <p className="text-sm text-red-600">
              Our WhatsApp service is for non-emergency inquiries and appointments only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;