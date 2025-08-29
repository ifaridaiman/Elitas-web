import BranchLocator from "./_partials/BranchLocator";
import HeroBanner from "./_partials/HeroBanner";
import ServicesHighlight from "./_partials/ServicesHighlight";

const HomePage = () => {
 

  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <ServicesHighlight />
      <BranchLocator />
    </div>
  );
};

export default HomePage;
