import React from "react";
import HeaderPage from "@/components/ui/HeaderPage";
import QuickInfo from "./_partials/QuickInfo";
import branchesData from "@/contents/branch.json"
import BranchList from "./_partials/BranchList";
import CtaFooter from "../_partials/CtaFooter";

const Branches = () => {
  return (
    <>
      <HeaderPage title="Our Branch Locations" description="Five convenient locations across the city, each equipped with modern facilities and staffed by experienced healthcare professionals to serve you better." />
      <QuickInfo />
      <BranchList branches={branchesData.branches} />
      <CtaFooter title="Need Help Finding Us?" description="Our friendly staff is here to help you choose the most convenient location and schedule your appointment at any of our branches." />
    </>
  );
}

export default Branches;
