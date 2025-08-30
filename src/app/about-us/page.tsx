import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import HistoryMission from "./_partials/HistoryMission";
import OurValues from "./_partials/OurValues";
import aboutUsData from "@/contents/about-us.json";
import MeetDoctor from "./_partials/MeetDoctor";
import ChooseUs from "./_partials/ChooseUs";
import SupportiveStaff from "./_partials/SupportiveStaff";

const AboutUs = () => {
  return (
    <>
      <HeaderPage
        title={aboutUsData.title}
        description={aboutUsData.description}
      />
      <HistoryMission historyandmission={aboutUsData.historyandmission} />
      <OurValues values={aboutUsData.values} />
      <MeetDoctor doctors={aboutUsData.doctors} />
      <SupportiveStaff description={aboutUsData.supportiveStaffDescription} />
      <ChooseUs whyChooseUs={aboutUsData.whyChooseUsContent} />
    </>
  );
}

export default AboutUs;