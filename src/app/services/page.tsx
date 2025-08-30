import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import CtaFooter from "../_partials/CtaFooter";
import ServeSOP from "./_partials/ServeSOP";
import serviceData from "@/contents/services.json"
import ServiceProvided from "./_partials/ServiceProvided";

const ServicesPage = () => {
  return (
    <>
      <HeaderPage title="Our Medical Services" description="Comprehensive healthcare solutions delivered by experienced professionals using state-of-the-art technology and evidence-based treatments tailored to your needs." />
      <ServiceProvided services={serviceData.services}/>
      {/* <AdditionalServices /> */}
      <ServeSOP />
      <CtaFooter title="Ready to Start Your Health Journey?" description="Contact us today to learn more about our services, pricing, and to schedule your personalized consultation with our experienced medical team." />
    </>
  );
}

export default ServicesPage;