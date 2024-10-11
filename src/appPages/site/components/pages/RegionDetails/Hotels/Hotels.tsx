"use client";

import scss from "./Hotels.module.scss";
import map from "../../../../assets/img/carta.png";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Hotels = () => {
  const [like, setLike] = useState(false);
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.map}>
            <Image src={map} alt="" />
          </div>
          <div className={scss.hotelText}>
            <h1>The best hotels nearby</h1>
            <a>Показать все</a>
          </div>
          <div className={scss.hotelBlocks}>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
                <a className={scss.nextRead}>
                  <FaArrowRightLong />
                </a>
              </div>
            </div>
            <div className={scss.hotelBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/1fa0/a02d/656ddd138cdab1ded1c6fa5e4c5aa023?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOA9dApfRG7dBH7u5gUcekiUny~TsHug-bWCQtdRLeW2AmDm~Kx~r53yCL-M-dGbS2mi10rbdVP-a8PLwXv8033LsfrgfyFuqWEOwKidMdGNQMeGUwUDysYWsdFDV~nt2IF2qIjTJF6QAX-wS1EAeXseRFIZaxgDnfs1gQymE1CUs4HJRVwIqyeDvOAC9AdmXEdum6J06iFljlvvYm8Ip4k0P04lYDokg94LtoKFtxab2bGLqRslXMwcb1DjESh6JQjoYgIIWv8e0~ZPxIQclLzL8SD-VQNWTZYx0OkFl6aV4z8~Ku5UXRgT-hTx4BocSEEk~exSm1NrAyvYEmsuKw__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.hotelBlockText}>
                <h3>Hotel Altamira</h3>
                <div className={scss.hotelBlockRating}>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h5>122 reviews</h5>
                </div>
                <h5>km from here: 1,35</h5>
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

export default Hotels;
