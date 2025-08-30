import BranchLocator from "./_partials/BranchLocator";
import CtaFooter from "./_partials/CtaFooter";
import HeroBanner from "./_partials/HeroBanner";
import ServicesHighlight from "./_partials/ServicesHighlight";

const HomePage = () => {


  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <ServicesHighlight />
      <BranchLocator />
      <CtaFooter showEmergencyContact title="Ready to Take Care of Your Health?" description="Don't wait to prioritize your wellbeing. Book an appointment today or contact us for more information about our comprehensive healthcare services." />
    </div>
  );
};

export default HomePage;
