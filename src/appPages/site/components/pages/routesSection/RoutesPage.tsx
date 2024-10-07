import React from "react";
import scss from "./RoutesPage.module.scss";
import MyCalendar from "./calendSection/Calendar";
import Continent from "./regions/Continent";

const RoutesPage = () => {
  return (
    <div className={scss.RoutesPage}>
      <div className={scss.content}>
        <div>Regions</div>
        <div>
          <Continent />
        </div>
      </div>
    </div>
  );
};

export default RoutesPage;
