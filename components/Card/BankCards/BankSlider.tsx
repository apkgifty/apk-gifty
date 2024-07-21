"use client";

import React, { useEffect, useRef } from "react";
import BankCard from "./BankCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BankSlider = () => {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 1500, min: 500 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3,
  //   },
  // };

  return (
    // <Carousel responsive={responsive} containerClass="carousel-container">
    <Splide
      aria-label="Carousel"
      options={{
        perPage: 4,
        autoplay: true,
        pagination: false,
        arrows: false,
        drag: "free",
        lazyLoad: true,
      }}
    >
      <SplideSlide>
        <BankCard />
      </SplideSlide>
      <SplideSlide>
        <BankCard />
      </SplideSlide>
      <SplideSlide>
        <BankCard />
      </SplideSlide>
      <SplideSlide>
        <BankCard />
      </SplideSlide>
      <SplideSlide>
        <BankCard />
      </SplideSlide>
      <SplideSlide>
        <BankCard />
      </SplideSlide>

      {/* <BankCard /> */}
      {/* <BankCard />
        <BankCard /> */}
    </Splide>
    //  {/* </Carousel> */}
  );
};

export default BankSlider;
