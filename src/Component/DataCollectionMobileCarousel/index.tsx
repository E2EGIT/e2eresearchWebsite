"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Next from "../../../public/homePage/next.svg";
import Prev from "../../../public/homePage/prev.svg";
import Link from "next/link";

const DataCollectionMobileCarousel = (props: any) => {
  const { activeNav, initialScroll } = props;
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
    initialSlide: initialScroll,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      // {
      //   breakpoint: 300,
      //   settings: {
      //     slidesToShow: 1,
      //     dots: false,
      //   },
      // },
    ],
    nextArrow: <SampleNextArrow clickedArrow={clickedArrow} />,
    prevArrow: <SamplePrevArrow clickedArrow={clickedArrow} />,
  };
  const navLinks = [
    {
      name: "survey_scripting",
      label: "Survey Scripting & Customizations",
      url: "/data-collection-and-analysis/survey-scripting",
    },
    {
      name: "data_processing",
      label: "Data Processing & Analysis",
      url: "/data-collection-and-analysis/data-processing-and-analysis",
    },
    {
      name: "data_collection",
      label: "Online Data Collection",
      url: "/data-collection-and-analysis/online-data-collection",
    },
    {
      name: "data_visualization",
      label: "Data Visualization & Dashboards",
      url: "/data-collection-and-analysis/data-visualization-dashboards",
    },
    {
      name: "community_management",
      label: "Community Management",
      url: "/data-collection-and-analysis/community-management",
    },
  ];
  return (
    <Slider {...settings}>
      {navLinks.map((navLink, index) => {
        return (
          <div key={index} className="data-collection-nav px-1">
            <Link
              className={`nav-item ${
                activeNav === navLink.name ? "collection-nav-active" : ""
              }`}
              href={navLink.url}
            >
              {navLink.label}
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default DataCollectionMobileCarousel;
