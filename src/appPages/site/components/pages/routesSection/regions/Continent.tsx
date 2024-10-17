"use client";
import Image from "next/image";
import scss from "./Continent.module.scss";
import talas from "../../../../../../assets/routes/Talas.svg";
import chui from "../../../../../../assets/routes/Chui.svg";
import issykKol from "../../../../../../assets/routes/IssykKul.svg";
import jalalAbad from "../../../../../../assets/routes/jalalAbod.svg";
import naryn from "../../../../../../assets/routes/Narun.svg";
import osh from "../../../../../../assets/routes/Osh.svg";
import batken from "../../../../../../assets/routes/Batken.svg";
import MapPage from "../map/MapPage";
import { useState } from "react";
import MyCalendar from "../calendSection/Calendar";

const Continent = () => {
  const [showMap, setShowMap] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const regions = [
    {
      reg: talas,
      name: "Talas",
    },
    {
      reg: chui,
      name: "Chui",
    },
    {
      reg: issykKol,
      name: "Issyk-Kyl",
    },
    {
      reg: jalalAbad,
      name: "Jalal-Abad",
    },
    {
      reg: naryn,
      name: "Naryn",
    },
    {
      reg: osh,
      name: "Osh",
    },
    {
      reg: batken,
      name: "Batken",
    },
  ];

  const handleClick = () => {
    setShowCalendar(true);
    setTimeout(() => {
      setShowMap(true);
    }, 2000);
  };
  return (
    <div className={scss.Continent}>
      <div className={scss.content}>
        <div className={scss.from}>
          <input type="text" />
          <input type="text" placeholder="Where?" />
          <button onClick={handleClick}>Go</button>
        </div>
        <nav>
          <div className={scss.regs}>
            {regions.map((el) => (
              <div>
                <Image src={el.reg} alt="regions" />
                <h2>{el.name}</h2>
              </div>
            ))}
          </div>
        </nav>
      </div>
      {showCalendar && <MyCalendar />}
      {showMap && <MapPage />}
    </div>
  );
};

export default Continent;
