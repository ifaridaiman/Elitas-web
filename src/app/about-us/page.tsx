import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import HistoryMission from "./_partials/HistoryMission";
import OurValues from "./_partials/OurValues";
import { title, description, values, doctors,whychooseus, supportiveStaffDescription } from "@/contents/about-us.json";
import { Heart, Users, Lightbulb } from "lucide-react";
import MeetDoctor from "./_partials/MeetDoctor";
import ChooseUs from "./_partials/ChooseUs";
import SupportiveStaff from "./_partials/SupportiveStaff";

const AboutUs = () => {
  return (
    <>
      <HeaderPage
        title={title}
        description={description}
      />
      <HistoryMission />
      <OurValues values={values} />
      <MeetDoctor doctors={doctors} />
      <SupportiveStaff description={supportiveStaffDescription} />
      <ChooseUs whyChooseUs={whychooseus} />
    </>
  );
}

export default AboutUs;