/** @format */
import React from "react";
import Image from "next/image";
import { kyrgyzCulture } from "../cultureData/cultureData";
import styles from "../styleForCulturePages.module.scss";

// Интерфейстерди аныктоо
interface Food {
  title: string;
  description: string;
  image: string;
}

interface Kitchen {
  image: string;
  title: string;
  description: string;
  foods: Food[];
}

interface KyrgyzCulture {
  kitchen: Kitchen;
}

const Kitchen: React.FC = () => {
  // Маданият маалыматтарын алуу
  const { kitchen } = kyrgyzCulture;

  return (
    <div className={styles.container}>
      <div
        className={styles.cultureHeader}
        style={{
          backgroundImage: `url(${kitchen?.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <h1>{kitchen?.title}</h1>
        <p>{kitchen?.description}</p>
      </div>
      <div className={styles.foodList}>
        {kitchen?.foods.map((el, index) => (
          <div key={el.title || index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={el.image}
                alt={el.title}
                className={el.title === "Food Collection" ? styles.foodCollection : ""}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.content}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;