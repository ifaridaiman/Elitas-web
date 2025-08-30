import React from "react";
import HeaderPage from "@/components/ui/HeaderPage";
import QuickInfo from "./_partials/QuickInfo";
import branchesData from "@/contents/branch.json"
import BranchList from "./_partials/BranchList";

const Branches = () => {
  return (
    <>
      <HeaderPage title="Our Branch Locations" description="Five convenient locations across the city, each equipped with modern facilities and staffed by experienced healthcare professionals to serve you better." />
      <BranchList branches={branchesData.branches} />
      <QuickInfo/>
    </>
  );
}

export default Branches;
