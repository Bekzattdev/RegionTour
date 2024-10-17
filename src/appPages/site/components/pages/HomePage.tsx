"use client";
import React from "react";
import RoutesPage from "./routesSection/RoutesPage";
import WelcomeCity from "./HomePage/WelcomeCity";
import WelcomeAttractions from "./HomePage/WelcomeAttractions";
import Culture from "./HomePage/Culture";
import Carta from "./HomePage/Carta";
import Welcome from "./HomePage/Welcome";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <WelcomeCity />
      <WelcomeAttractions />
      <Culture />
      <Carta />
    </>
  );
};

export default HomePage;
