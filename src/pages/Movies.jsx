/* eslint-disable react/no-unescaped-entities */
// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import Navbar from "../Components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import MovieShow from "../Components/Movies Component/MovieShow";

const Movies = () => {
  return (
    <section className="movies relative">
      <Navbar />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
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
      >
        <SwiperSlide className="slide1">
          <MovieShow />
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <MovieShow />
        </SwiperSlide>

        <SwiperSlide className="slide3">
          <MovieShow />
        </SwiperSlide>

        <div className="swiper-pagination hidden-md-and-up"></div>
      </Swiper>
    </section>
  );
};

export default Movies;
