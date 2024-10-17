import React from "react";
import styles from "./GalleryCard.module.scss";
import { IoMdStar } from "react-icons/io";
import { IoHeartCircleSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

interface CardProps {
  image: string;
  title: string;
  address: string;
  reviews: number;
  rating: number;
  liked: boolean;
}

interface CardPropsBlock {
  el: CardProps;
}

const GalleryCard = ({ el }: CardPropsBlock) => {
  return (
    <div className={styles.card}>
      <a className={styles.likeButton}>
        <IoHeartCircleSharp />
      </a>
      <div className={styles.imageContainer}>
        <img src={el.image} alt={el.title} />
      </div>
      <div className={styles.contentContainer}>
        <h2>{el.title}</h2>
        <div className={styles.rating}>
          <span>{el.rating}</span>
          <span className={styles.stars}>
            <a>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </a>
          </span>
          <span className={styles.reviews}>{el.reviews} reviews</span>
        </div>
        <div className={styles.address}>
          <span className={styles.locationIcon}>
            <MdLocationOn />
          </span>
          <h6>{el.address}</h6>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
