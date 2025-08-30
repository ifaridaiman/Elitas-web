import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import HistoryMission from "./_partials/HistoryMission";
import OurValues from "./_partials/OurValues";
import { values, doctors,whychooseus } from "@/contents/about-us.json";
import { Heart, Users, Lightbulb } from "lucide-react";
import MeetDoctor from "./_partials/MeetDoctor";
import ChooseUs from "./_partials/ChooseUs";
import SupportiveStaff from "./_partials/SupportiveStaff";

const AboutUs = () => {
  return (
    <>
      <HeaderPage
        title="About Us"
        description="Dedicated to providing exceptional healthcare services with a patient-first approach, modern facilities, and experienced medical professionals who care about your wellbeing."
      />
      <HistoryMission />
      <OurValues values={values} />
      <MeetDoctor doctors={doctors} />
      <SupportiveStaff />
      <ChooseUs whyChooseUs={whychooseus} />
    </>
  );
}

export default AboutUs;