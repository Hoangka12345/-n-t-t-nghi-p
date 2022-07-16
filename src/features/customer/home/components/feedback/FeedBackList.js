import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import FeedBack from "./FeedBack";
import { Box, Grid } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

FeedBackList.propTypes = {};

function FeedBackList(props) {
  //   const [index, setIndex] = useState(0);
  //   const timeoutRef = useRef(null);
  //   const delay = 2000;

  //   function resetTimeout() {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   }

  //   useEffect(() => {
  //     resetTimeout();
  //     timeoutRef.current = setTimeout(
  //       () => setIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1)),
  //       delay
  //     );

  //     return () => {
  //       resetTimeout();
  //     };
  //   }, [index]);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {[...new Array(9)].map(() => (
          <SwiperSlide>
            <FeedBack />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default FeedBackList;
