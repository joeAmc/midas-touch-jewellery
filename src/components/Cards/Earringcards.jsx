import React from "react";
import "../Cards/cards.css";
import { FaShoppingBag } from "react-icons/fa";
import { earrings } from "./earringData";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Cards = () => {
  return (
    <div>
      <div className="spacer-card"></div>
      <div className="cards-container">
        {earrings.map(({ id, image, title, material, price, url }) => {
          return (
            <div className="card" key={id}>
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="card-img"
              >
                {image.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <img src={img} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="card-text">
                <div className="top-text">
                  <h1>{title}</h1>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <FaShoppingBag />
                  </a>
                </div>
                <div className="bottom-text">
                  <h5>{`£${price}`}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
