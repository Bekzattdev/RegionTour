"use client";

import scss from "./Attraction.module.scss";
import { IoMdStar } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useState } from "react";

const Attractions = () => {
  const [like, setLike] = useState(false);

  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainText}>
            <h2>The best attractions nearby</h2>
            <h6>Show all</h6>
          </div>
          <div className={scss.attractionBlocks}>
            <div className={scss.attractionBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/e5cc/7d83/37e0fc3d9b64134e1c409a0c08f5a233?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZjLapAghDF5xuHY8wMOSjDb0bAlxojZbrPNnW-MsmN~POGOrwGerG34WtWGQOa8lDPeiY3Caq0EY3SbapdxhnL7qbHKFgam6jhfYGfqV5TQNOfePIEEI-RdI1U6r2HFxr~gwASDTUM9Cm1nj0jd1GrnNIiU0TjbeVetSG8ES5aCd4v8avMIW2-Ooli62R6FDD~aLgg3C6vtGWYK-XEumzbn408eMWwyFULp3JM-cMaeiEKjm4ShfJQfIm3AI1BxrfF3SZj8G5s8KPm0HzAcXFYCiW6yJKWNFbdSGBRec7X4d1smx6nt2-L5FJgJIaevkY~kSlJV1QiqRB0GsvG9aQ__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.attractionBlockText}>
                <h3>Rukh Ordo Cultural Center</h3>
                <div className={scss.attractionBlockRating}>
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
            <div className={scss.attractionBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/e5cc/7d83/37e0fc3d9b64134e1c409a0c08f5a233?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZjLapAghDF5xuHY8wMOSjDb0bAlxojZbrPNnW-MsmN~POGOrwGerG34WtWGQOa8lDPeiY3Caq0EY3SbapdxhnL7qbHKFgam6jhfYGfqV5TQNOfePIEEI-RdI1U6r2HFxr~gwASDTUM9Cm1nj0jd1GrnNIiU0TjbeVetSG8ES5aCd4v8avMIW2-Ooli62R6FDD~aLgg3C6vtGWYK-XEumzbn408eMWwyFULp3JM-cMaeiEKjm4ShfJQfIm3AI1BxrfF3SZj8G5s8KPm0HzAcXFYCiW6yJKWNFbdSGBRec7X4d1smx6nt2-L5FJgJIaevkY~kSlJV1QiqRB0GsvG9aQ__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.attractionBlockText}>
                <h3>Rukh Ordo Cultural Center</h3>
                <div className={scss.attractionBlockRating}>
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
            <div className={scss.attractionBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/e5cc/7d83/37e0fc3d9b64134e1c409a0c08f5a233?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZjLapAghDF5xuHY8wMOSjDb0bAlxojZbrPNnW-MsmN~POGOrwGerG34WtWGQOa8lDPeiY3Caq0EY3SbapdxhnL7qbHKFgam6jhfYGfqV5TQNOfePIEEI-RdI1U6r2HFxr~gwASDTUM9Cm1nj0jd1GrnNIiU0TjbeVetSG8ES5aCd4v8avMIW2-Ooli62R6FDD~aLgg3C6vtGWYK-XEumzbn408eMWwyFULp3JM-cMaeiEKjm4ShfJQfIm3AI1BxrfF3SZj8G5s8KPm0HzAcXFYCiW6yJKWNFbdSGBRec7X4d1smx6nt2-L5FJgJIaevkY~kSlJV1QiqRB0GsvG9aQ__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.attractionBlockText}>
                <h3>Rukh Ordo Cultural Center</h3>
                <div className={scss.attractionBlockRating}>
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
            <div className={scss.attractionBlock}>
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
                src="https://s3-alpha-sig.figma.com/img/e5cc/7d83/37e0fc3d9b64134e1c409a0c08f5a233?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZjLapAghDF5xuHY8wMOSjDb0bAlxojZbrPNnW-MsmN~POGOrwGerG34WtWGQOa8lDPeiY3Caq0EY3SbapdxhnL7qbHKFgam6jhfYGfqV5TQNOfePIEEI-RdI1U6r2HFxr~gwASDTUM9Cm1nj0jd1GrnNIiU0TjbeVetSG8ES5aCd4v8avMIW2-Ooli62R6FDD~aLgg3C6vtGWYK-XEumzbn408eMWwyFULp3JM-cMaeiEKjm4ShfJQfIm3AI1BxrfF3SZj8G5s8KPm0HzAcXFYCiW6yJKWNFbdSGBRec7X4d1smx6nt2-L5FJgJIaevkY~kSlJV1QiqRB0GsvG9aQ__"
                alt=""
              />
              {/* <Image src="" alt="" /> */}
              <div className={scss.attractionBlockText}>
                <h3>Rukh Ordo Cultural Center</h3>
                <div className={scss.attractionBlockRating}>
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

export default Attractions;
