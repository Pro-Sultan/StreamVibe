/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import SwipeLeftImage from "../assets/images/button-left.png";
import SwipeRightImage from "../assets/images/button-right.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import categories from "../JS/categories";
import Category from "./Category";

const Movies = () => {
  return (
    <div className="explore bg-black10 text-white">
      <div className="explore-header flex justify-between">
        <div className="explore-head">
          <h1 className="text-xl">Explore our wide variety of categories</h1>
          <p className="explore-para text-grey60">
            Whether you're looking for a comedy to make you laugh.
          </p>
        </div>

        <div className="swipe flex justify-between items-center gap-20 bg-black06">
          <div className="swipe-button-prev bg-black10">
            <img src={SwipeLeftImage} alt="" />
          </div>
          {/* <div className="current move"></div>
          <div className="move"></div>
          <div className="move"></div> */}
          <div className="swipe-button-next bg-black10">
            <img src={SwipeRightImage} alt="" />
          </div>
        </div>
      </div>

      <div className="categories">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          breakpoints={{
            1094: {
              slidesPerView: 4.7,
            },

            800: {
              slidesPerView: 2.7,
            },

            300: {
              slidesPerView: 1.7,
              pagination: {
                clickable: true,
              },
            },
          }}
          navigation={{
            nextEl: ".swipe-button-next",
            prevEl: ".swipe-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            className: "swiper-pagination-custom",
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categories.map((categories) => (
            <SwiperSlide>
              <Category key={categories.title} {...categories} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination hidden-md-and-up"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Movies;
