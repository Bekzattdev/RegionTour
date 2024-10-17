import scss from "./Culture.module.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Culture = () => {
  const CultureData = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/36a3/6b17/69b7fc06efd6118f4e637bb61e28cc7a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6va8MZsuXYqavDbCWBJpXSgOFFzAw24jSD8wB3xtOErnGWIWk-Sgm65ewuaCoQaOOokZ71nQZ9VmdEvjgOTGZJp89Iw062zJyONwJ0KdnUbCASQVZArhWT26PWS9FZB3ocrTIn2eFdTlnPUq33Yo7PC0ve4uuIP2~72iFVO4TzOpk005RoaGrNrbC0qUR~-rR9p1WHVO4WdGBsnt~j-wqxf4G0sJR9r0sbTH7E-eXPVdhb1xCxQvV6ZXb9wh0LrMSG1kbqGzxwqX4Q1mz~e2xoR9E5HfI6I8R00Clvrvp8trV2nhKiJqFyxqBFdVGXG2c5Xxge43wLs~HUqfjB~dg__",
      title: "National kyrgyz musical instruments",
      description:
        "The Kyrgyz began to use felt for the manufacture of carpets and other household items in antiquity. Various factors influenced the development and improvement of each type of Kyrgyz carpet art: living conditions, climate, natural conditions and social factors.The most popular type of felt carpet in Kyrgyzstan today is shyrdak. It is made using mosaic technique, which is one of the most difficult, while one of the most important qualities of shirdak is durability. ",
    },
    // {
    //   _id: 1,
    //   img: "https://s3-alpha-sig.figma.com/img/36a3/6b17/69b7fc06efd6118f4e637bb61e28cc7a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6va8MZsuXYqavDbCWBJpXSgOFFzAw24jSD8wB3xtOErnGWIWk-Sgm65ewuaCoQaOOokZ71nQZ9VmdEvjgOTGZJp89Iw062zJyONwJ0KdnUbCASQVZArhWT26PWS9FZB3ocrTIn2eFdTlnPUq33Yo7PC0ve4uuIP2~72iFVO4TzOpk005RoaGrNrbC0qUR~-rR9p1WHVO4WdGBsnt~j-wqxf4G0sJR9r0sbTH7E-eXPVdhb1xCxQvV6ZXb9wh0LrMSG1kbqGzxwqX4Q1mz~e2xoR9E5HfI6I8R00Clvrvp8trV2nhKiJqFyxqBFdVGXG2c5Xxge43wLs~HUqfjB~dg__",
    //   title: "National kyrgyz musical instruments",
    //   description:
    //     "The Kyrgyz began to use felt for the manufacture of carpets and other household items in antiquity. Various factors influenced the development and improvement of each type of Kyrgyz carpet art: living conditions, climate, natural conditions and social factors.The most popular type of felt carpet in Kyrgyzstan today is shyrdak. It is made using mosaic technique, which is one of the most difficult, while one of the most important qualities of shirdak is durability. ",
    // },
    // {
    //   _id: 1,
    //   img: "https://s3-alpha-sig.figma.com/img/36a3/6b17/69b7fc06efd6118f4e637bb61e28cc7a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o6va8MZsuXYqavDbCWBJpXSgOFFzAw24jSD8wB3xtOErnGWIWk-Sgm65ewuaCoQaOOokZ71nQZ9VmdEvjgOTGZJp89Iw062zJyONwJ0KdnUbCASQVZArhWT26PWS9FZB3ocrTIn2eFdTlnPUq33Yo7PC0ve4uuIP2~72iFVO4TzOpk005RoaGrNrbC0qUR~-rR9p1WHVO4WdGBsnt~j-wqxf4G0sJR9r0sbTH7E-eXPVdhb1xCxQvV6ZXb9wh0LrMSG1kbqGzxwqX4Q1mz~e2xoR9E5HfI6I8R00Clvrvp8trV2nhKiJqFyxqBFdVGXG2c5Xxge43wLs~HUqfjB~dg__",
    //   title: "National kyrgyz musical instruments",
    //   description:
    //     "The Kyrgyz began to use felt for the manufacture of carpets and other household items in antiquity. Various factors influenced the development and improvement of each type of Kyrgyz carpet art: living conditions, climate, natural conditions and social factors.The most popular type of felt carpet in Kyrgyzstan today is shyrdak. It is made using mosaic technique, which is one of the most difficult, while one of the most important qualities of shirdak is durability. ",
    // },
  ];

  return (
    <section className={scss.culture}>
      <div className={scss.content}>
        <div className="container">
          <h2>Culture</h2>
        </div>
        <div className={scss.cultureActions}>
          <div className="container">
            <div className={scss.cultureBlocks}>
              {CultureData.map((el) => (
                <div className={scss.cultureBlock} key={el._id}>
                  <img src={el.img} alt="" />
                  <div className={scss.cultureBlockText}>
                    <h3>{el.title}</h3>
                    <p>{el.description}</p>
                    <button>
                      More <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={scss.cultureBlockSlide}>
              <a>
                <FaAngleLeft />
              </a>
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
              <h4>4</h4>
              <h4>5</h4>
              <a>
                <FaAngleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
