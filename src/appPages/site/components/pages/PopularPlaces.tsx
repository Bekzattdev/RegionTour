"use client";
import scss from "./PopularPlaces.module.scss";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

interface IPlaces {
  _id: number;
  img: string;
  title: string;
  rating: number;
  reviews: number;
}

interface PlacesBlockProps {
  el: IPlaces;
}

const PopularPlaces = ({ el }: PlacesBlockProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className={scss.block}>
      <div className={scss.favorite}>
        <a onClick={() => setFavorite(!favorite)}>
          {favorite ? (
            <IoHeartCircleOutline
              style={{
                color: "red",
              }}
            />
          ) : (
            <IoHeartCircleSharp />
          )}
        </a>
      </div>
      <img src={el.img} alt="" />
      <div className={scss.favoriteText}>
        <h2>{el.title}</h2>
        <div className={scss.favoriteRating}>
          <h4>{el.rating}</h4>
          <a>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
          </a>
          <h5>{el.reviews} reviews</h5>
        </div>
      </div>
      <Link href="/details/places" className={scss.detail}>
        <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default PopularPlaces;
