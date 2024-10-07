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

const Continent = () => {
  return (
    <div className={scss.Continent}>
      <div className={scss.content}>
        <div className={scss.from}>
          <input type="text" />
          <input type="text" placeholder="Where?" />
          <button>Go</button>
        </div>
        <nav>
          <div>
            <Image src={talas} alt="Talas" />
            <h2>Talas</h2>
          </div>
          <div>
            <Image src={chui} alt="Chui" />
            <h2>Chui</h2>
          </div>{" "}
          <div>
            <Image src={issykKol} alt="Issyk Kyl" />
            <h2>Issyk-Kyl</h2>
          </div>{" "}
          <div>
            <Image src={jalalAbad} alt="Jalal-Abad" />
            <h2>Jalal-Abad</h2>
          </div>{" "}
          <div>
            <Image src={naryn} alt="Naryn" />
            <h2>Naryn</h2>
          </div>{" "}
          <div>
            <Image src={osh} alt="Talas" />
            <h2>Osh</h2>
          </div>
          <div>
            <Image src={batken} alt="Batken" />
            <h2>Batken</h2>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Continent;
