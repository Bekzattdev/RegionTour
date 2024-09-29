"use client";

import Image from "next/image";
import { useState } from "react";
import scss from "./Attractions.module.scss";
import bishkek from "../../../assets/img/citybishkek.png";
//Icon
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHeartCircleOutline } from "react-icons/io5";
//

const Attractions = () => {
  const [like, setLike] = useState(false);
  return (
    <section className={scss.attractions}> 
      <div className="container">
        <div className={scss.content}>
          <h2>Attractions</h2>
          <div className={scss.attractionsBlocks}>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.{" "}
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.attractionsBlock}>
              <a className={scss.like} onClick={() => setLike(!like)}>
                {like ? (
                  <IoHeartCircleOutline
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoHeartCircleSharp />
                )}
              </a>
              <Image src={bishkek} alt="" />
              <div className={scss.attractionsBlockText}>
                <h3>The Bishkek city</h3>
                <div className={scss.attractionsActions}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>23 000 reviews</h5>
                </div>
                <p>
                  The Burana Tower is located in the Chuy region in northern
                  Kyrgyzstan, about 80 km (50 miles) east of the capital Bishkek
                  near the city Tokmok. This impressive ancient minaret still
                  survives today as one of the key historical sites in
                  Kyrgyzstan.
                </p>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
