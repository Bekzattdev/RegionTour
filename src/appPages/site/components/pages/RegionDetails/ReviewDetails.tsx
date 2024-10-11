"use client";
import scss from "./ReviewDetails.module.scss";
import { IoMdStar } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { useState } from "react";
import image from '../../../assets/img/culturefood.png'

const ReviewDetails = () => {
  const [like, setLike] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [starClick1, setStarClick1] = useState(false);
  const [starClick2, setStarClick2] = useState(false);
  const [starClick3, setStarClick3] = useState(false);
  const [starClick4, setStarClick4] = useState(false);
  const [starClick5, setStarClick5] = useState(false);
  //Filter

  return (
    <div className={scss.reviews}>
      <div className="container">
        <div className={scss.content}>
          <h1>Reviews</h1>
          <div className={scss.actions}>
            <div className={scss.allReview}>
              <div className={scss.buttons}>
                <button onClick={() => setReviewModal(true)}>
                  Write review
                </button>

                <button onClick={() => setPhotoModal(true)}>
                  Upload a photo
                </button>
                {photoModal ? <div className={scss.photoModal}></div> : null}
              </div>
              <div className={scss.reviewGrade}>
                <h4>4.5</h4>
                <a>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                </a>
                <h5>45 000 reviews</h5>
              </div>
              <div className={scss.reviewQuantity}>
                <h5>Excellent</h5>
                <div className={scss.ratings}>
                  <div
                    style={{
                      width: "120px",
                      height: "15px",
                      borderRadius: "10px",
                      background: "#004c60",
                    }}
                  ></div>
                  <h5>18 769</h5>
                </div>
              </div>
              <div className={scss.reviewQuantity}>
                <h5>Good</h5>
                <div className={scss.ratings}>
                  <div
                    style={{
                      width: "100px",
                      height: "15px",
                      borderRadius: "10px",
                      background: "#004c60",
                    }}
                  ></div>
                  <h5>10 769</h5>
                </div>
              </div>
              <div className={scss.reviewQuantity}>
                <h5>Not Bad</h5>
                <div className={scss.ratings}>
                  <div
                    style={{
                      width: "80px",
                      height: "15px",
                      borderRadius: "10px",
                      background: "#004c60",
                    }}
                  ></div>
                  <h5>6 769</h5>
                </div>
              </div>
              <div className={scss.reviewQuantity}>
                <h5>Bad</h5>
                <div className={scss.ratings}>
                  <div
                    style={{
                      width: "60px",
                      height: "15px",
                      borderRadius: "10px",
                      background: "#004c60",
                    }}
                  ></div>
                  <h5>2 769</h5>
                </div>
              </div>
              <div className={scss.reviewQuantity}>
                <h5>Terribly</h5>
                <div className={scss.ratings}>
                  <div
                    style={{
                      width: "30px",
                      height: "15px",
                      borderRadius: "10px",
                      background: "#004c60",
                    }}
                  ></div>
                  <h5>769</h5>
                </div>
              </div>
            </div>
            <div className={scss.allMessage}>
              <div className={scss.actions}>
                <div className={scss.input}>
                  <a>
                    <FiSearch />
                  </a>
                  <input type="text" placeholder="Search" />
                </div>
                <button onClick={() => setFilterModal(true)}>Filter</button>
              </div>
              <div className={scss.messageBlock}>
                <div className={scss.message}>
                  <div className={scss.messageMain}>
                    <div className={scss.messageUser}>
                      <Image src="" alt="" />
                      <div className={scss.userName}>
                        <h3>Anna Petrova</h3>
                        <h6>Moscow, Russia</h6>
                      </div>
                    </div>
                    <div className={scss.messageLike}>
                      <a onClick={() => setLike(!like)}>
                        {like ? <AiFillLike /> : <AiOutlineLike />}
                      </a>
                      <h6>0</h6>
                    </div>
                  </div>
                  <div className={scss.messageStar}>
                    <a>
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                    </a>
                    <h6>July 10, 2023</h6>
                  </div>
                  <div className={scss.messageText}>
                    <h2>Issyk-Kul - the Pearl of Kyrgyzstan</h2>
                    <p>
                      Let me start with the lake itself. Issyk-Kul turned out to
                      be incredibly beautiful and tranquil. The water in the
                      lake is so clean and transparent that it feels like being
                      in a fairytale. The mountains surrounding the lake create
                      a breathtaking landscape that words cannot describe. I
                      simply enjoyed every minute, gazing at this magnificent
                      nature. I have just returned from an unforgettable trip to
                      Issyk-Kul, and I cannot help but share my impressions.
                      This place is simply magical!
                    </p>
                    <h3>Reply</h3>
                  </div>
                  <div className={scss.messageImg}>
                    <Image src={image} alt=""/>
                    <Image src={image} alt=""/>
                    <Image src={image} alt=""/>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {reviewModal ? (
        <div className={scss.reviewBg}>
          <div className={scss.reviewModal}>
            <div className={scss.reviewBlock}>
              <h5 onClick={() => setReviewModal(false)}>
                <MdClear />
              </h5>
              <h2>What do you think ?</h2>
              <h6>Please give your rating</h6>
              <div className={scss.reviewStars}>
                <a
                  onClick={() => setStarClick1(!starClick1)}
                  style={{
                    color:
                      starClick1 ||
                      starClick2 ||
                      starClick3 ||
                      starClick4 ||
                      starClick5
                        ? "yellow"
                        : "gray",
                  }}
                >
                  <IoMdStar />
                </a>
                <a
                  onClick={() => {
                    setStarClick2(!starClick2);
                  }}
                  style={{
                    color:
                      starClick2 || starClick3 || starClick4 || starClick5
                        ? "yellow"
                        : "gray",
                  }}
                >
                  <IoMdStar />
                </a>
                <a
                  onClick={() => setStarClick3(!starClick3)}
                  style={{
                    color:
                      starClick3 || starClick4 || starClick5
                        ? "yellow"
                        : "gray",
                  }}
                >
                  <IoMdStar />
                </a>
                <a
                  onClick={() => setStarClick4(!starClick4)}
                  style={{
                    color: starClick4 || starClick5 ? "yellow" : "gray",
                  }}
                >
                  <IoMdStar />
                </a>
                <a
                  onClick={() => setStarClick5(!starClick5)}
                  style={{
                    color: starClick5 ? "yellow" : "gray",
                  }}
                >
                  <IoMdStar />
                </a>
              </div>
              <textarea placeholder="Tell us about your experience" />
              <button>Send</button>
            </div>
          </div>
        </div>
      ) : null}
      {photoModal ? (
        <div className={scss.photoBg}>
          <div className={scss.photoModal}>
            <div className={scss.photoBlock}>
              <h5 onClick={() => setPhotoModal(false)}>
                <MdClear />
              </h5>
              <h2>Here you can upload a photo</h2>
              <div className={scss.photoBlocks}>
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
                <input type="file" name="" id="" />
              </div>
              <button>Send</button>
            </div>
          </div>
        </div>
      ) : null}
      {filterModal ? (
        <div className={scss.filterBg}>
          <div className={scss.filterModal}>
            <div className={scss.filterBlock}>
              <h5 onClick={() => setFilterModal(false)}>
                <MdClear />
              </h5>
              <h2>Filter reviews</h2>
              <div className={scss.filterRatings}>
                <div className={scss.reviewGrade}>
                  <h4>4.5</h4>
                  <a>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                  </a>
                  <h6>45 000 reviews</h6>
                </div>
                <div className={scss.reviewQuantity}>
                  <h6>Excellent</h6>
                  <div className={scss.ratings}>
                    <div
                      style={{
                        width: "120px",
                        height: "15px",
                        borderRadius: "10px",
                        background: "#004c60",
                      }}
                    ></div>
                    <h6>18 769</h6>
                  </div>
                </div>
                <div className={scss.reviewQuantity}>
                  <h6>Good</h6>
                  <div className={scss.ratings}>
                    <div
                      style={{
                        width: "100px",
                        height: "15px",
                        borderRadius: "10px",
                        background: "#004c60",
                      }}
                    ></div>
                    <h6>10 769</h6>
                  </div>
                </div>
                <div className={scss.reviewQuantity}>
                  <h6>Not Bad</h6>
                  <div className={scss.ratings}>
                    <div
                      style={{
                        width: "80px",
                        height: "15px",
                        borderRadius: "10px",
                        background: "#004c60",
                      }}
                    ></div>
                    <h6>6 769</h6>
                  </div>
                </div>
                <div className={scss.reviewQuantity}>
                  <h6>Bad</h6>
                  <div className={scss.ratings}>
                    <div
                      style={{
                        width: "60px",
                        height: "15px",
                        borderRadius: "10px",
                        background: "#004c60",
                      }}
                    ></div>
                    <h6>2 769</h6>
                  </div>
                </div>
                <div className={scss.reviewQuantity}>
                  <h6>Terribly</h6>
                  <div className={scss.ratings}>
                    <div
                      style={{
                        width: "30px",
                        height: "15px",
                        borderRadius: "10px",
                        background: "#004c60",
                      }}
                    ></div>
                    <h6>769</h6>
                  </div>
                </div>
              </div>
              <div className={scss.evaluation}>
                <h3>Evaluation</h3>
                <div className={scss.buttons}>
                  <button>
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    (77)
                  </button>
                  <button>
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    (162)
                  </button>
                  <button>
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    (1 203)
                  </button>
                  <button>
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "gray",
                      }}
                    />
                    (6 784)
                  </button>
                  <button>
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    <IoMdStar
                      style={{
                        color: "yellow",
                      }}
                    />
                    (10 342)
                  </button>
                </div>
              </div>
              <div className={scss.period}>
                <h3>Period</h3>
                <div className={scss.buttons}>
                  <button>January</button>
                  <button>February</button>
                  <button>March</button>
                  <button>April</button>
                  <button>May</button>
                  <button>June</button>
                  <button>July</button>
                  <button>August</button>
                  <button>September</button>
                  <button>October</button>
                  <button>November</button>
                  <button>December</button>
                </div>
              </div>
              <div className={scss.filtered}>
                <button className={scss.throw}>Throw off</button>
                <button className={scss.apply}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewDetails;
