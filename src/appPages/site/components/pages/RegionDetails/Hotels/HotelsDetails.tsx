import scss from "./HotelsDetails.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { MdPets } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoSnow } from "react-icons/io5";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { IoTvOutline } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { MdOutlineBalcony } from "react-icons/md";
import { PiBatteryPlusVertical } from "react-icons/pi";
import { PiCity } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";

const HotelsDetails = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h2>Hotel Altamira</h2>
          <div className={scss.info}>
            <div className={scss.hotelImg}>
              <img
                src="https://s3-alpha-sig.figma.com/img/d5e8/2cad/9562de03b68e58d5b177ca7dd0fcf6d0?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QRIBWHS6Y6D92v77qcB830pYZ12at7wbkK2ZTwxgIUow18Qk2lp~myl3dBb5vsvETiCzeqO9BpvKKgEFBkGgZgP31c2Yo3ZRgEoSIiFeMfWF08vd3YgoNYnD5TXtehSPKRXPp1IYm8g~UUdQZXDkaPEpv~n6xdcXcK4ACxDOmCmC710gg83xbUsGeQ6PLuoWRiQiDHisRyrJl4hJBXzDmgH7fNdLl1FdCdGDgkEH9GWT7ucHQVFe-7r9fHj8W3vbycU37LdKBYKcuVnCQ0WC-FlSnp3-rqDpIn~qz415meufcUjS3r4nkbaOFZUOzT0w-2SLlzB2hfB0btp5aAC3BA__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/ca37/5c92/610c1289925e3b14e21a779364879c92?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8Zvw07OnR-zpTW8SeCo4gcwAxJ3e0rYt2skzvAVoIqyFS5kJpVis4CQ4lG3DpRFLUVQoRP6ey10NWw3mxarvDLaiWiM2snXw7zVlCY1MygxDeGr9q1gLQHkU4fMIa6x64fnLB9o~-fQM~nQD48sMeL~xsyC9oxr8inbAxqVboKOZY5d8K0jgsnHOmV8irNs238oKzr-Makx1c1iu1IeDlMgm8nfTToBznqZUHYIXbfVsd1XLo53oTjlfJDfMvh60iIvoio7LFcEM786yYt8ClzI-8T~j4Wne7Zdy6PyEbeeASpIPIsiUiT9nMv7w2n9RB1s8dtPd25zjhFtHou2hg__"
                alt=""
              />
              <div className={scss.hotelImgFood}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/2062/559b/282e6aeaedd4c7f7184a22d0c05ad75c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G05KBOEIO7BXiawqqKhu5LIGljE6-yDke6FGsAVSRJbu2vopoHXIEc-125GAimthzppp5d1OEjB6oMYIazI~rVOXAL1xgMiY6I~kxI6Bi9MX7rrLjrpdQgD0RsFFIsZlayw55k~nA0EYWzdr4BHo90NniZzkoXlO9mEhd3fr5Co~~tFBDRVPve~aFtIx1BKtRtI-FJZpDmS0avQAx2OK0rEglwiHg84GBdpnx~lZ4ePlKEUU8bzy2cHo2Dgee8ejg7PC~0i8WdBapdy6bHnigoppGE7FIeHBxYbDd-Ts8jbQc0yRzqbv1JK0ArSpiCXQhg0t-CnnQLeoSMNomUtIzQ__"
                  alt=""
                />
                <img
                  src="https://s3-alpha-sig.figma.com/img/7a4e/6bf9/b4d21890e4b8fe75570acdcdebe0f405?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VabSnTw~C0GxpCyTk0PFokF5ouV9wPN6PFlWC1nIRvj1cmXy8s9atVVvU7nqm0pm1XbnU-ZTmmJFA8TEvm4~kdwrLT-sreSjnOsTEQi780vmUZi8QFprlarrZU9~jYVMsee8fpv7NVIaPmf5wtNQN1YZ8vcCYRjnBF0vCnu6REhImwtOqyTNA4Jq2LSPEjoKDQnSst3ItGTxbUDXo2zOJTvXdwfb8i8FrG3O-Rq2lK01U3OcLjAzO5V8sQ~5jwn4f8PYLT-0AlGc3cTAEeffjTIyCMn5Hx9TWyMdlB6tdz37O38PGCDVj6gRh01vPkTSEyNgZEwEwiQisqQMVssXYQ__"
                  alt=""
                />
              </div>
            </div>
            <div className={scss.infoDetails}>
              <div className={scss.infoAppartment}>
                <div className={scss.mainAllText}>
                  <div className={scss.mainText}>
                    <h2>Well Furnished Apartment</h2>
                    <h6>107 Przhevalsky str., Karakol 722360</h6>
                  </div>
                  <div className={scss.mainIcons}>
                    <a>
                      <FaRegHeart />
                    </a>
                    <a>
                      <FiShare2 />
                    </a>
                  </div>
                </div>
                <div className={scss.appartmentBlocks}>
                  <div className={scss.appartmentBlock}>
                    <a>
                      <IoBedOutline />
                    </a>
                    <h6>3 Bedrooms</h6>
                  </div>
                  <div className={scss.appartmentBlock}>
                    <a>
                      <LuBath />
                    </a>
                    <h6>2 Bathrooms</h6>
                  </div>
                  <div className={scss.appartmentBlock}>
                    <a>
                      <IoCarOutline />
                    </a>
                    <h6>3 Car/ 2 Bikes</h6>
                  </div>
                  <div className={scss.appartmentBlock}>
                    <a>
                      <MdPets />
                    </a>
                    <h6>0 Pets Allowed</h6>
                  </div>
                </div>
                <div className={scss.appartmentDes}>
                  <h3>Apartment Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </div>
                <div className={scss.amenities}>
                  <h3>Offered Amenities</h3>
                  <div className={scss.amenitiesDetails}>
                    <div className={scss.amenitiesBlocks}>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <TbToolsKitchen2 />
                        </a>
                        <h6>Kitchen</h6>
                      </div>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <IoSnow />
                        </a>
                        <h6>Air Conditioner</h6>
                      </div>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <CgSmartHomeWashMachine />
                        </a>
                        <h6>Washer</h6>
                      </div>
                    </div>
                    <div className={scss.amenitiesBlocks}>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <IoTvOutline />
                        </a>
                        <h6>Television with Netflix</h6>
                      </div>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <IoWifi />
                        </a>
                        <h6>Free Wireless Internet</h6>
                      </div>
                      <div className={scss.amenitiesBlock}>
                        <a>
                          <MdOutlineBalcony />
                        </a>
                        <h6>Balcony or Patio</h6>
                      </div>
                    </div>
                  </div>
                  <button>Show All 10 Amenities</button>
                </div>
                <div className={scss.hygiene}>
                  <h3>Safety and Hygiene</h3>
                  <div className={scss.hygieneDetails}>
                    <div className={scss.hygieneBlocks}>
                      <div className={scss.hygieneBlock}>
                        <a>
                          <PiBatteryPlusVertical />
                        </a>
                        <h5>Daily Cleaning</h5>
                      </div>
                      <div className={scss.hygieneBlock}>
                        <a>
                          <PiBatteryPlusVertical />
                        </a>
                        <h5>Disinfections and Sterilizations</h5>
                      </div>
                    </div>
                    <div className={scss.hygieneBlocks}>
                      <div className={scss.hygieneBlock}>
                        <a>
                          <PiBatteryPlusVertical />
                        </a>
                        <h5>Fire Extinguishers</h5>
                      </div>
                      <div className={scss.hygieneBlock}>
                        <a>
                          <PiBatteryPlusVertical />
                        </a>
                        <h5>Smoke Detectors</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={scss.infoAllMoney}>
                <div className={scss.infoCarta}>
                  <h3>$1000 - $2000</h3>
                  <hr />
                  <div className={scss.period}>
                    <h5>Short Period: $ 1000</h5>
                    <h5>Medium Period: $ 2000</h5>
                    <h5>Long Period: $ 2000</h5>
                  </div>
                  <button>Reserve Now</button>
                  <div className={scss.contact}>
                    <h4>
                      <PiCity />
                      Property Inquiry
                    </h4>
                    <h4>
                      <FaPhone />
                      Contact Host
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsDetails;
