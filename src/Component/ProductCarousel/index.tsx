"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Next from "../../../public/homePage/next.svg";
import Prev from "../../../public/homePage/prev.svg";
import Slider from "react-slick";
// import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ProductDataType = {
  header: string;
  description: string[] | [];
  image: any;
  classes: string;
};

type PropsType = {
  productData: ProductDataType[];
  newClass?: any;
  beforeAfterClass?: any;
  pageName?: any;
};

const ProductCarousel = (props: PropsType) => {
  const { productData, newClass, beforeAfterClass, pageName } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedArrow, setClickedArrow] = useState("");

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick, clickedArrow, pageName } = props;
    // console.log("next");
    return (
      <Next
        className={
          className +
          ` productivity-next ${
            clickedArrow === "right" ? "carousel-btn-active" : ""
          }`
        }
        onClick={() => {
          setClickedArrow("right");
          onClick();
        }}
        disabled={currentSlide === productData?.length - 1}
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick, clickedArrow } = props;
    // console.log("prev");
    return (
      <Prev
        className={
          className +
          ` productivity-prev ${
            clickedArrow === "left" ? "carousel-btn-active" : ""
          }`
        }
        onClick={() => {
          setClickedArrow("left");

          onClick();
        }}
        disabled={currentSlide === 0}
      />
    );
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    nextArrow: <SampleNextArrow clickedArrow={clickedArrow} />,
    prevArrow: <SamplePrevArrow clickedArrow={clickedArrow} />,
  };

  return (
    <div className={beforeAfterClass}>
      <Slider {...settings}>
        {productData.map((data, index) => {
          const SvgImage = data.image;
          return (
            <div
              className={`slider-inner-con padding-left-x ${newClass}`}
              key={index}
            >
              <div className="container-fluid overflow-hidden slider-margin res-exprience">
                <div className="row">
                  {/* justify-content-center */}
                  <div
                    className={
                      pageName == "raven"
                        ? "col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph"
                        : "col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph"
                    }
                  >
                    <div className="header-container heading-sec res-head">
                      <h2>{data.header}</h2>
                      <div className="horizontal-row"></div>
                    </div>
                    {data.description.map((desc, index) => {
                      return <p key={index}>{desc}</p>;
                    })}
                  </div>
                  <div
                    className={
                      // "img-col design-ins" +
                      pageName == "raven"
                        ? "col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 img-col design-ins"
                        : "col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 img-col design-ins"
                    }
                  >
                    <div className={`slider-img ${data.classes}`}>
                      {/* <Image src={SvgImage} alt="slider image" /> */}
                      <SvgImage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
