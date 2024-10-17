import React from "react";
import { cardsData } from "./CardData";
import scss from "./Gallery.module.scss";
import GalleryCard from "./GalleryCard";

const Gallery: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.galleryContainer}>
          {cardsData.map((card) => (
            <GalleryCard el={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
