"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

type ProductDataType = {
  image: any;
  classes: string;
};

type PropsType = {
  productData?: ProductDataType[];
  // newClass?: any;
  beforeAfterClass?: any;
  // pageName?: any;
};

const ProductNewCarousel = (props: PropsType) => {
  const { productData, beforeAfterClass } = props;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className={beforeAfterClass && beforeAfterClass}>
      <Slider {...settings}>
        {productData?.map((data: any, index) => {
          const SvgImage = data.image;
          // const SvgImage = data.image;
          return (
            <div
              className={`slider-inner-con  hover-img-gray ${data.classes}`}
              key={index}
            >
              {SvgImage ? (
                <SvgImage />
              ) : (
                <Image
                  src={data.imageLogo}
                  alt=""
                  className="image-slider-main"
                />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductNewCarousel;
