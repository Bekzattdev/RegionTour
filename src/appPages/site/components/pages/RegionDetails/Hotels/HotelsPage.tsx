import ReviewDetails from "../ReviewDetails";
import WelcomeDetails from "../WelcomeDetails";
import Hotels from "./Hotels";
import HotelsDetails from "./HotelsDetails";

const HotelsPage = () => {
  return (
    <>
      <WelcomeDetails />
      <Hotels />
      <HotelsDetails />
      <ReviewDetails/>
    </>
  );
};

export default HotelsPage;
