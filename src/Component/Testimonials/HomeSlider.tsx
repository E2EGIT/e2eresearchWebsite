"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FoodAndBeverage from "../../../public/homePage/icons/foods_beverage_icon.svg";
import ConsumerGoods from "../../../public/homePage/icons/consumer_goods_icon.svg";
import Healthcare from "../../../public/homePage/icons/healthcare.svg";
import FinancialSrvice from "../../../public/homePage/icons/financial_services.svg";
import Technology from "../../../public/homePage/icons/technology.svg";
import Entertainment from "../../../public/homePage/icons/entertainment.svg";
import Sports from "../../../public/homePage/icons/sports.svg";
import Advertising from "../../../public/homePage/icons/advertising.svg";
import Next from "../../../public/homePage/next.svg";
import Prev from "../../../public/homePage/prev.svg";
import Link from "next/link";

const HomeTestimonials = () => {
  const [clickedArrow, setClickedArrow] = useState("");
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick, clickedArrow } = props;
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
      />
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick, clickedArrow } = props;
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
      />
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerPadding: "50px",
    nextArrow: <SampleNextArrow clickedArrow={clickedArrow} />,
    prevArrow: <SamplePrevArrow clickedArrow={clickedArrow} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Link href={"/industries/food-and-beverage"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span> Food and Beverage</span>
            <FoodAndBeverage className="catagory-image svg-size" />
          </div>
        </div>{" "}
      </Link>
      <Link href={"/industries/consumer-goods"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span> Consumer Goods</span>
            <ConsumerGoods className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/healthcare"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span> Healthcare</span>
            <Healthcare className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/financial-services"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span> Financial Services</span>
            <FinancialSrvice className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/technology"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span>Technology</span>
            <Technology className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/entertainment"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span>Entertaintment</span>
            <Entertainment className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/sports"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span>Sports</span>
            <Sports className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
      <Link href={"/industries/advertising"} className="hover-click">
        <div className="service-card">
          <div className="category-card banner-border-mobile-animation">
            <span>Advertising</span>
            <Advertising className="catagory-image svg-size" />
          </div>
        </div>
      </Link>
    </Slider>
  );
};

export default HomeTestimonials;
