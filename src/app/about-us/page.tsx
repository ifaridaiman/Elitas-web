import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import HistoryMission from "./_partials/HistoryMission";
import OurValues from "./_partials/OurValues";
import aboutUsData from "@/contents/about-us.json";
import MeetDoctor from "./_partials/MeetDoctor";
import ChooseUs from "./_partials/ChooseUs";
import Founder from "./_partials/Founder";
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
      <Founder
        image={aboutUsData.founder.image}
        name={aboutUsData.founder.name}
        specialty={aboutUsData.founder.specialty}
        qualifications={aboutUsData.founder.qualifications}
        bio={aboutUsData.founder.bio}
      />
      <MeetDoctor doctors={aboutUsData.doctors} />
      <SupportiveStaff staffs={{
        description: aboutUsData.supportiveStaff.description,
        staffImages: aboutUsData.supportiveStaff.staffImage
      }} />
      <ChooseUs whyChooseUs={aboutUsData.whyChooseUsContent} />
    </>
  );
}

export default AboutUs;