import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import Slider from "react-slick";

import * as S from "./styles";

const Carousel = ({ children }) => (
  <S.Container>
    <Slider
      {...{
        dots: false,
        infinite: true,
        speed: 600,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        draggable: true,
        slidesToScroll: 2,
      }}
    >
      {children}
    </Slider>
  </S.Container>
);

export default Carousel;
