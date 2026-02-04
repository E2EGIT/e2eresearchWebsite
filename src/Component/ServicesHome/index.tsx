import Link from "next/link";
import React from "react";
import FoodAndBeverage from "../../../public/homePage/icons/foods_beverage_icon.svg";
import ConsumerGoods from "../../../public/homePage/icons/consumer_goods_icon.svg";
import Healthcare from "../../../public/homePage/icons/healthcare.svg";
import FinancialSrvice from "../../../public/homePage/icons/financial_services.svg";
import Technology from "../../../public/homePage/icons/technology.svg";
import Entertainment from "../../../public/homePage/icons/entertainment.svg";
import Sports from "../../../public/homePage/icons/sports.svg";
import Advertising from "../../../public/homePage/icons/advertising.svg";

export const ServicesHome = () => {
  const ServicesJson = [
    {
      image: FoodAndBeverage,
      name: "Food and Beverage",
      url: "/industries/food-and-beverage",
    },
    {
      image: ConsumerGoods,
      name: "Consumer Goods",
      url: "/industries/consumer-goods",
    },
    {
      image: Healthcare,
      name: "Healthcare",
      url: "/industries/healthcare",
    },
    {
      image: FinancialSrvice,
      name: "Financial Services",
      url: "/industries/financial-services",
    },
    {
      image: Technology,
      name: "Technology",
      url: "/industries/technology",
    },
    {
      image: Entertainment,
      name: "Entertaintment",
      url: "/industries/entertainment",
    },
    {
      image: Sports,
      name: "Sports",
      url: "/industries/sports",
    },
    {
      image: Advertising,
      name: "Advertising",
      url: "/industries/advertising",
    },
  ];
  return ServicesJson?.map((service: any, index: number) => {
    return (
      <Link href={service.url} key={index}>
        <div className="service-card banner-border-animation">
          <div className="category-card">
            <span>{service.name}</span>
            <service.image className="catagory-image svg-size" />
          </div>
        </div>{" "}
      </Link>
    );
  });
};
