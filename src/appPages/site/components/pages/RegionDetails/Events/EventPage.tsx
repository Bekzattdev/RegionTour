import React from "react";
import WelcomeDetails from "../WelcomeDetails";
import Poster from "./Poster";
import PosterPlaces from "./PosterPlaces";
import PlacesDetail from "../PlacesDetail";

const EventPage = () => {
  return (
    <>
      <WelcomeDetails />
      <Poster />
      <PlacesDetail />
    </>
  );
};

export default EventPage;
