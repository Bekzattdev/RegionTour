"use client";

import scss from "./Restauran.module.scss";
import { IoMdStar } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useState } from "react";

const Restauran = () => {
  const [like, setLike] = useState(false);

  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <h2>The best restaurants with reasonable prices</h2>
            <h6>Show all</h6>
          </div>
          <div className={scss.restaurantBlocks}>
            <div className={scss.restaurantBlock}>
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
              <img
                src="https://s3-alpha-sig.figma.com/img/694c/1046/0304d85d3088687c7dd52665ce0bb10c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnQQ88l4604N1X-ECCOWipnQUrLkuZRF7cPwmsvb2L8fT1FYQTNqRwsJhNVIiRKSzlcsHtDnz94ryUHmkqj57VChFJ69AC33lTFBN7up6ke6eaYPJ6EHeH15Yecz9JB2Ri7dzHHLg0vXKuoPFnpkLKmyLxKpDBjPK3QiBgw-fEJqse21g00BD4XcJi3YoZyXZyKo1KyxOTIc-6L~R6gzFAVGM1giWzVaUox-kav3nNPyjlmxJY55K~UwPVjKXWShKxYyO7GPDSAmE-nUOnQOMhC5DeRFIA-frrqojygtLYQiuh5aElghZBIaL352DjbsKT9MuXFgueSc3dconjEZBw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.restauranBlockText}>
                <h3>Ethno-cafe Dastorkon</h3>
                <div className={scss.restauranBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>Reviews: 12</h5>
                </div>
                <h5>$$ - $$$, Russian, Canadian</h5>
              </div>
            </div>
            <div className={scss.restaurantBlock}>
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
              <img
                src="https://s3-alpha-sig.figma.com/img/694c/1046/0304d85d3088687c7dd52665ce0bb10c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnQQ88l4604N1X-ECCOWipnQUrLkuZRF7cPwmsvb2L8fT1FYQTNqRwsJhNVIiRKSzlcsHtDnz94ryUHmkqj57VChFJ69AC33lTFBN7up6ke6eaYPJ6EHeH15Yecz9JB2Ri7dzHHLg0vXKuoPFnpkLKmyLxKpDBjPK3QiBgw-fEJqse21g00BD4XcJi3YoZyXZyKo1KyxOTIc-6L~R6gzFAVGM1giWzVaUox-kav3nNPyjlmxJY55K~UwPVjKXWShKxYyO7GPDSAmE-nUOnQOMhC5DeRFIA-frrqojygtLYQiuh5aElghZBIaL352DjbsKT9MuXFgueSc3dconjEZBw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.restauranBlockText}>
                <h3>Ethno-cafe Dastorkon</h3>
                <div className={scss.restauranBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>Reviews: 12</h5>
                </div>
                <h5>$1 - $100, Russian, Canadian</h5>
              </div>
            </div>
            <div className={scss.restaurantBlock}>
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
              <img
                src="https://s3-alpha-sig.figma.com/img/694c/1046/0304d85d3088687c7dd52665ce0bb10c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnQQ88l4604N1X-ECCOWipnQUrLkuZRF7cPwmsvb2L8fT1FYQTNqRwsJhNVIiRKSzlcsHtDnz94ryUHmkqj57VChFJ69AC33lTFBN7up6ke6eaYPJ6EHeH15Yecz9JB2Ri7dzHHLg0vXKuoPFnpkLKmyLxKpDBjPK3QiBgw-fEJqse21g00BD4XcJi3YoZyXZyKo1KyxOTIc-6L~R6gzFAVGM1giWzVaUox-kav3nNPyjlmxJY55K~UwPVjKXWShKxYyO7GPDSAmE-nUOnQOMhC5DeRFIA-frrqojygtLYQiuh5aElghZBIaL352DjbsKT9MuXFgueSc3dconjEZBw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.restauranBlockText}>
                <h3>Ethno-cafe Dastorkon</h3>
                <div className={scss.restauranBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>Reviews: 12</h5>
                </div>
                <h5>$$ - $$$, Russian, Canadian</h5>
              </div>
            </div>
            <div className={scss.restaurantBlock}>
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
              <img
                src="https://s3-alpha-sig.figma.com/img/694c/1046/0304d85d3088687c7dd52665ce0bb10c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnQQ88l4604N1X-ECCOWipnQUrLkuZRF7cPwmsvb2L8fT1FYQTNqRwsJhNVIiRKSzlcsHtDnz94ryUHmkqj57VChFJ69AC33lTFBN7up6ke6eaYPJ6EHeH15Yecz9JB2Ri7dzHHLg0vXKuoPFnpkLKmyLxKpDBjPK3QiBgw-fEJqse21g00BD4XcJi3YoZyXZyKo1KyxOTIc-6L~R6gzFAVGM1giWzVaUox-kav3nNPyjlmxJY55K~UwPVjKXWShKxYyO7GPDSAmE-nUOnQOMhC5DeRFIA-frrqojygtLYQiuh5aElghZBIaL352DjbsKT9MuXFgueSc3dconjEZBw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.restauranBlockText}>
                <h3>Ethno-cafe Dastorkon</h3>
                <div className={scss.restauranBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>Reviews: 12</h5>
                </div>
                <h5>$$ - $$$, Russian, Canadian</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restauran;
