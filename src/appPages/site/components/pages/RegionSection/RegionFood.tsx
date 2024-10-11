"use client";
import scss from "./RegionFood.module.scss";

interface IRegionFood {
  _id: number;
  title: string;
  description: string;
  img: string;
  title2: string;
  description2: string;
}

interface RegionFoodBlock {
  el: IRegionFood;
}

const RegionFood = ({ el }: RegionFoodBlock) => {
  return (
    <div className={scss.foodBlock}>
      <div className={scss.foodName}>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
      </div>
      <div className={scss.foodImage}>
        <img src={el.img} alt="" />
        <div className={scss.foodImageDetail}>
          <img src={el.img} alt="" />
          <img src={el.img} alt="" />
          <img src={el.img} alt="" />
        </div>
      </div>
      <div className={scss.foodCompound}>
        <h3>{el.title2}</h3>
        <p>{el.description2}</p>
      </div>
    </div>
  );
};

export default RegionFood;
