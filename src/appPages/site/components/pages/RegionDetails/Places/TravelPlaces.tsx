import scss from "./TravelPlaces.module.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaTrainSubway } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa";
import Image from "next/image";
import carta from "../../../../assets/img/carta.png";

const TravelPlaces = () => {
  return (
    <section className={scss.travel}>
      <div className="container">
        <div className={scss.content}>
          <h3>- Where to go</h3>
          <div className={scss.inputs}>
            <input type="text" placeholder="Where?" />
            <input type="text" placeholder="Where?" />
            <button>Go</button>
          </div>
          <div className={scss.actions}>
            <div className={scss.action}>
              <a>
                <FaMapLocationDot />
              </a>
              <h4>365 km</h4>
            </div>
            <div className={scss.action}>
              <a>
                <FaRunning />
              </a>
              <h4>72 hours</h4>
            </div>
            <div className={scss.action}>
              <a>
                <FaBusAlt />
              </a>
              <h4>7-8 hours</h4>
            </div>
            <div className={scss.action}>
              <a>
                <FaTrainSubway />
              </a>
              <h4>7-8 hours</h4>
            </div>
            <div className={scss.action}>
              <a>
                <FaPlaneDeparture />
              </a>
              <h4>2 hours</h4>
            </div>
          </div>
          <Image src={carta} alt="" />
        </div>
      </div>
    </section>
  );
};

export default TravelPlaces;
