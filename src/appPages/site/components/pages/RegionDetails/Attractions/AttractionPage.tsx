import React from "react";
import WelcomeDetails from "../WelcomeDetails";
import Attraction from "./Attraction";
import AttractionDetail from "./AttractionDetail";
import ReviewDetails from "../ReviewDetails";
import PlacesDetail from "../PlacesDetail";

const AttractionPage = () => {
  return (
    <>
      <WelcomeDetails />
      <Attraction />
      <AttractionDetail />
      <ReviewDetails />
      <PlacesDetail />
    </>
  );
};

export default AttractionPage;
