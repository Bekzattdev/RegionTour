import React from "react";
import Welcome from "./Welcome";
import WelcomeCity from "./WelcomeCity";
import WelcomeAttractions from "./WelcomeAttractions";
import Culture from "./Culture";
import Carta from "./Carta";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <WelcomeCity />
      <WelcomeAttractions />
      <Culture />
      <Carta />
    </div>
  );
};

export default HomePage;
