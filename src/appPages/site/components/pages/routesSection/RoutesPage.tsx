import React from "react";
import scss from "./RoutesPage.module.scss";
import MyCalendar from "./calendSection/Calendar";
import Continent from "./regions/Continent";
import MapPage from "./map/MapPage";

const RoutesPage = () => {
  return (
    <div className={scss.RoutesPage}>
      <div className={scss.content}>
        <>{<Continent />}</>
      </div>
    </div>
  );
};

export default RoutesPage;
