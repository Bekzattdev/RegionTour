import React from "react";
import Welcome from "./homeSection/Welcome";
import WelcomeCity from "./homeSection/WelcomeCity";
import Attractions from "./homeSection/Attractions";
import Culture from "./homeSection/Culture";
import Carta from "./homeSection/Carta";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <WelcomeCity />
      <Attractions />
      <Culture />
      <Carta />
    </div>
  );
};

export default HomePage;
