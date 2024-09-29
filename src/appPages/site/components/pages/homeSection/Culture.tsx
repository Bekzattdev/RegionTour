import Image from "next/image";
import scss from "./Culture.module.scss";
import food from "../../../assets/img/culturefood.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Culture = () => {
  return (
    <section className={scss.culture}>
      <div className={scss.content}>
        <div className="container">
          <h2>Culture</h2>
        </div>
        <div className={scss.cultureActions}>
          <div className="container">
            <div className={scss.cultureBlock}>
              <Image src={food} alt="" />
              <div className={scss.cultureBlockText}>
                <h3>Kitchen</h3>
                <p>
                  Kyrgyzstan is a country where at the crossroads of the Great
                  Silk Road, the traditional nomadic culture and the sedentary
                  culture merged. A distinctive feature of Kyrgyz dishes is that
                  they are all prepared exclusively from fresh products and are
                  rarely stocked up for future use, and the recipes for their
                  preparation, although they seem quite simple, in fact contain
                  many subtleties that are rather difficult to master.
                </p>
                <button>
                  More <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className={scss.cultureBlockSlide}>
              <a>
                <FaAngleLeft />
              </a>
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <a>
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
