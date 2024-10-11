"use client";
import scss from "./AttractionBlock.module.scss";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";

interface IAttraction {
  _id: number;
  img: string;
  title: string;
  rating: number;
  reviews: number;
  description: string;
}

interface AttractionBlockProps {
  el: IAttraction;
}

const AttractionBlock = ({ el }: AttractionBlockProps) => {
  const [like, setLike] = useState(false);

  return (
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
      <img src={el.img} alt="" />
      <div className={scss.attractionsBlockText}>
        <h3>{el.title}</h3>
        <div className={scss.attractionsActions}>
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
        <p>{el.description}</p>
        <a className={scss.nextRead}>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default AttractionBlock;
