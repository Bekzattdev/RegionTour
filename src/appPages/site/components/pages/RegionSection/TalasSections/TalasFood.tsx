"use client";
import scss from "./TalasFood.module.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import RegionFood from "../RegionFood";

const TalasFood = () => {
  const food = [
    {
      _id: 1,
      title: "Ashlyan-fu",
      description:
        "The name of the dish sounds and is spelled differently: ashlyanfu, ashlyamfu, and even ash-lyanfu.The hallmark of Karakol is ashlyam-fu, a spicy Dungan soup served cold. The main ingredients of ashlam-fu are two types of noodles: regular, wheat flour and starch. These noodles are seasoned with cold broth, spicy laza and lots of herbs.",
      img: "https://s3-alpha-sig.figma.com/img/d13a/c258/934dd60a6a8e90d50dd1924b5a5c8a62?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SHjyJExL78WAwtLd6umZeDOQcl6LHhmbyoLvbDMEAxeajSL6koz1AV9dE3IAeyBMXY0gyWq~Kc74DBNN0qZMWhwWCkmn2NiEOVIjn9K7b9Ws20yY6slmeLbS0nLRSGuUeFm5uh9KtuyJ8-M0IH18V33UqmHjdZktQnEpfneNx-HLDHNQ9W5mxKVoCbrsQ4qzTotvR3rCg85foLpOebYB5nYnEKqD6az5IYRTIJdSdGi1k37jsOwGe5HcNRJGLAy8rgF~h25HvDTQFjWY-NEjzcd4WnN2lPY-q3bC4NLb4IvB3MLEuMsiibUzGZQUVE5XfhfjRms8SzsquS2jPcn81w__",
      title2: "What is included in the dish",
      description2:
        'The main parts are "jelly" made from starch, noodles and hot sauce. In modern culinary practice, there are many more detailed recipes for ashlyanfu. Someone claims that it is prepared not from meat and not from vegetables. Some take an alternative view.Most often, ashlan-fu is served with fried potato pies and hot tea.',
    },
  ];

  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1>What to try in Talas?</h1>
          <div className={scss.foodAction}>
            {food.map((el) => (
              <RegionFood el={el} />
            ))}
          </div>
          <div className={scss.foodSlide}>
            <a>
              <FaChevronLeft />
            </a>
            <h4>1</h4>
            <h4>2</h4>
            <h4>3</h4>
            <h4>4</h4>
            <a>
              <FaChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalasFood;
