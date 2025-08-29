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
      <CtaFooter />
    </div>
  );
};

export default HomePage;
