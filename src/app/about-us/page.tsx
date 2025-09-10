import HeaderPage from "@/components/ui/HeaderPage";
import React from "react";
import HistoryMission from "./_partials/HistoryMission";
import OurValues from "./_partials/OurValues";
import aboutUsData from "@/contents/about-us.json";
import MeetDoctor from "./_partials/MeetDoctor";
import ChooseUs from "./_partials/ChooseUs";
import Founder from "./_partials/Founder";

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
      <Founder
        image={aboutUsData.founder.image}
        name={aboutUsData.founder.name}
        specialty={aboutUsData.founder.specialty}
        qualifications={aboutUsData.founder.qualifications}
        bio={aboutUsData.founder.bio}
      />
      <ChooseUs whyChooseUs={aboutUsData.whyChooseUsContent} />
    </>
  );
}

export default AboutUs;