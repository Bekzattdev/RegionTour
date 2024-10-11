import scss from "./RestauranDetails.module.scss";
import { IoMdStar } from "react-icons/io";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineRoomService } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { FaGripfire } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const RestauranDetails = () => {
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h2>Ethno-cafe Dastorkon</h2>
          <div className={scss.restauranImg}>
            <img
              src="https://s3-alpha-sig.figma.com/img/694c/1046/0304d85d3088687c7dd52665ce0bb10c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnQQ88l4604N1X-ECCOWipnQUrLkuZRF7cPwmsvb2L8fT1FYQTNqRwsJhNVIiRKSzlcsHtDnz94ryUHmkqj57VChFJ69AC33lTFBN7up6ke6eaYPJ6EHeH15Yecz9JB2Ri7dzHHLg0vXKuoPFnpkLKmyLxKpDBjPK3QiBgw-fEJqse21g00BD4XcJi3YoZyXZyKo1KyxOTIc-6L~R6gzFAVGM1giWzVaUox-kav3nNPyjlmxJY55K~UwPVjKXWShKxYyO7GPDSAmE-nUOnQOMhC5DeRFIA-frrqojygtLYQiuh5aElghZBIaL352DjbsKT9MuXFgueSc3dconjEZBw__"
              alt=""
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/f3f1/85e8/de020a3139c48c1d3a8ffbc2435bda42?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBI-UENdhUqMUm4Jc~DVpuq4FGuiv0BJZJKI0l7zl-5WMdWn7vBFDoge70JNi~qEqHuP9nrVykbK~BCQxR~DR7ISoZhF6ykHFy5q-9izSfaxbF9kePYh2su5t2-qGXBRutlw2Jh3rlX5E1z1hJMStw9yvY9rtkhd7hFis2kSvMMyyPNtaRfiATtgRYG2pYbZ9fFUcCUCt3eX8NSB5YB5tlvc5S37p0D~nBLMN3AuuwVauBoDCz1FhMTp8I7OJLulKv1AE~Dbsb~CCpCbgitZNHVi5lgy5tAVnqsE9SFVbdCbq~VRQkPdd~GCqkxx4jB9-D~LqW8aFFTO9R3AK~IeWg__"
              alt=""
            />
            <div className={scss.restauranImgFood}>
              <img
                src="https://s3-alpha-sig.figma.com/img/ed5f/9d84/d3d0f50c8b0875b1e6cdd5b81a15912d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQo2u-OadeBlzalQBGMz3YdLABZJprPRLpgt~yJrr4UYSr7gZAbyK5vUy0AUBCpr7N~8HZH6axOL2gfXxtTlmg4VlPvcnpdWJ6cy7FsxWK7mbXtixQ9IQ2cPbYb-bEO-V7qJIFvRJlFRUDNEgUGja7RhpNTwgvusnA3PnGJMi35CJcmL4OGErWZMRuonbSZahHdG7KbU-bsVzk7kCXhTu32kM1oIJwGWQd~-6QYmvwh4CQcY427Ur~MRKP0IetGLupZT4yGqbIODakjWVCMvaWm85grufutmbCYCDwibfGBQKQyVld9x6r0tUdGwzWN1CAsFnLH2PZMmDB-pCTZH0g__"
                alt=""
              />
              <img
                src="https://s3-alpha-sig.figma.com/img/4aa0/0c00/c0f372665a1541684da3247618a58389?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3ZOsVmaOoV92JWqqaDFiRoOUAvkOynEFyLGHr4Ac5M3xRCXWoNOwq0TVWnfFtOh~1w62QJ0QlDcQys~HuiLmNoD-ubpKlyNHcRE9xGPi4tKbrFDM9lz3W8ANhTmg9q4qXnw1fXc0B5jTZZaZLJVQLEy9YG11CETEafeCE~OcTnBjkQF8O9qyh4NbYJ5hDP6JXoWkAOZGCfpUWwxhtWsGQLAdccFHINaO5l-DCLYzpr0X17cAQM-33SRv2W-v9e~dsqMnaeG50GpHFqw3SRKUuEfbv7IQ6axUSs0VzHU5ROX32wHV3slLwRZctb8p9WCpLme1XAmiAB4xD7zUQe2Nw__"
                alt=""
              />
            </div>
          </div>
          <div className={scss.restauranDetails}>
            <div className={scss.restauranBlockRating}>
              <h3>Ratings and reviews</h3>
              <div className={scss.restauranBlockReviews}>
                <h4>4.5</h4>
                <a>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </a>
                <h5>1200 reviews</h5>
              </div>
              <div className={scss.restauranNumber}>
                <h5>
                  <span> № 1 </span> of 23 Restaurants in Cholpon-Ata
                </h5>
                <hr />
                <h4>ASSESSMENTS</h4>
              </div>
              <div className={scss.restauranRatingDetails}>
                <div className={scss.restauranRatingBlock}>
                  <h4>
                    <TbToolsKitchen2 />
                    Nutrition
                  </h4>

                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <div className={scss.restauranRatingLike}>
                    <a>
                      <AiOutlineLike />
                    </a>
                    <h5>0</h5>
                  </div>
                </div>
                <div className={scss.restauranRatingBlock}>
                  <h4>
                    <MdOutlineRoomService />
                    Service
                  </h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <div className={scss.restauranRatingLike}>
                    <a>
                      <AiOutlineLike />
                    </a>
                    <h5>0</h5>
                  </div>
                </div>
                <div className={scss.restauranRatingBlock}>
                  <h4>
                    <MdPriceChange />
                    Price quality
                  </h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <div className={scss.restauranRatingLike}>
                    <a>
                      <AiOutlineLike />
                    </a>
                    <h5>0</h5>
                  </div>
                </div>
                <div className={scss.restauranRatingBlock}>
                  <h4>
                    <FaGripfire />
                    Atmosphere
                  </h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <div className={scss.restauranRatingLike}>
                    <a>
                      <AiOutlineLike />
                    </a>
                    <h5>0</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.restauranBlockText}>
              <h3>More detailed</h3>
              <div className={scss.textBlock}>
                <h4>PRICE RANGE</h4>
                <h5>5 $ - 10 $</h5>
              </div>
              <div className={scss.textBlock}>
                <h4>Specialized menu</h4>
                <h5>Подходит для вегетарианцев, Для веганов</h5>
              </div>
              <div className={scss.textBlock}>
                <h4>Meal time</h4>
                <h5>Breakfast, Lunch, Dinner, Brunch, Open Late, Drinks</h5>
              </div>
              <div className={scss.textBlock}>
                <h4>Show all information</h4>
                <h5>services, description</h5>
              </div>
            </div>
            <div className={scss.restauranBlockLocation}>
              <h3>Location and contact details</h3>
              <img
                src="https://s3-alpha-sig.figma.com/img/65d4/7c42/0a156dc4077483e170ca0bf7261e6b7e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i37jIeGSq~ZDt~PdUskPHcBBS9oD1v5DGbFeY8uHSxb1vrLptwIwdylUHZyShvxGPKnp5CRAJVpKbyCbgACrfW2DQhbPZJd~eQnz9v7crQec1E2gOfd9CJFQ5bG0IbFUcvxfpYXu8ed0mlpJreWRAbGLboyFbkdeSwvioqx6zynQiE0nv6ecqFNP1B4q3HkdfVeOiBCqTeL-qKPdDaoswyfzjrd18UKXZcnoR4C3bAYpDCWV-bCv1288FMjsZ9cYLrol-HzIrRgE2a~0WgwCXarFinfX-K3s08hui1ldQLskwBflt6xh7wvW3i1YV4b6WBai7QBnYXdUJlUBiBbFDw__"
                alt=""
              />
              <div className={scss.location}>
                <a>
                  <MdLocationOn />
                </a>
                <h5>
                  107 Przhevalsky str., Karakol 722360 Kyrgyzstan
                  <TbArrowUpRight />
                </h5>
              </div>
              <div className={scss.website}>
                <a>
                  <MdLaptop />
                </a>
                <h5>
                  Website <TbArrowUpRight />
                </h5>
                <a>
                  <MdOutlineMail />
                </a>
                <h5>
                  Email <TbArrowUpRight />
                </h5>
              </div>
              <div className={scss.phone}>
                <a>
                  <FiPhone />
                </a>
                <h5>+996 995 25 55 92</h5>
              </div>
              <h6>Edit this directory object</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestauranDetails;
