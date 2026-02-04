import Link from "next/link";
import React from "react";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";
import Market from "../../../public/homePage/research/market.svg";
import Consumer from "../../../public/homePage/research/consumer_icon.svg";
import Product from "../../../public/homePage/research/product.svg";
import Sensory from "../../../public/homePage/research/sensory.svg";
import Brand from "../../../public/homePage/research/brand.svg";
import Product_insigts from "../../../public/homePage/research/product_insigts.svg";

export const ResearchHome = () => {
  const ResarchJson = [
    {
      image: Market,
      name: "Marketing Assessment",
      url: "/services/market-assessment",
      subUrls: [
        {
          name: "Demand and Forecasting",
          url: "/services/market-assessment",
        },
        {
          name: "Demand Research",
          url: "/services/market-assessment",
        },
        {
          name: "Competition Analysis",
          url: "/services/market-assessment",
        },
      ],
    },
    {
      image: Consumer,
      name: "Consumer Research",
      url: "/services/consumer-research",
      subUrls: [
        {
          name: "Consumer Usage and Attitude",
          url: "/services/consumer-research",
        },
        {
          name: "Consumer Segmentation",
          url: "/services/consumer-research",
        },
        {
          name: "Customer satisfaction and NPS Measurement",
          url: "/services/consumer-research",
        },
      ],
    },
    {
      image: Product,
      name: "New Product Development",
      url: "/services/product-development",
      subUrls: [
        {
          name: "Idea Screening",
          url: "/services/product-development",
        },
        {
          name: "Concept Testing and Validation",
          url: "/services/product-development",
        },
        {
          name: "Product testing",
          url: "/services/product-development",
        },
        {
          name: "Pricing Research",
          url: "/services/product-development",
        },
      ],
    },
    {
      image: Sensory,
      name: "Sensory Research",
      url: "/services/sensory-research",
      subUrls: [
        {
          name: "Central location testing",
          url: "/services/sensory-research",
        },
        {
          name: "Home User testing",
          url: "/services/sensory-research",
        },
        {
          name: "Food experts",
          url: "/services/sensory-research",
        },
      ],
    },
    {
      image: Brand,
      name: "Brand Research",
      url: "/services/brand-research",
      subUrls: [
        {
          name: "Brand Awareness Research",
          url: "/services/brand-research",
        },
        {
          name: "Brand Tracking Research",
          url: "/services/brand-research",
        },
        {
          name: "Campaign Evaluation",
          url: "/services/brand-research",
        },
        {
          name: "Brand Communication",
          url: "/services/brand-research",
        },
        {
          name: "Brand",
          url: "/services/brand-research",
        },
      ],
    },
    {
      image: Product_insigts,
      name: "Product Insights",
      url: "/services/product-insights",
      subUrls: [
        {
          name: "Features testing",
          url: "/services/product-insights",
        },
        {
          name: "Barrier to adoption",
          url: "/services/product-insights",
        },
        {
          name: "Improvement needed",
          url: "/services/product-insights",
        },
        {
          name: "Packaging Research",
          url: "/services/product-insights",
        },
        {
          name: "Pricing Research",
          url: "/services/product-insights",
        },
      ],
    },
  ];
  return ResarchJson?.map((research: any, index: number) => {
    return (
      <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
        <div className="research-card border-redius box-shadow hover-effect white-bg-color">
          <research.image className="research-svg" />
          <Link className="heading-sec " href={research?.url}>
            <h4 className="hover-line-effect">{research?.name}</h4>
          </Link>

          <div className="card-link">
            {research?.subUrls?.map((subLinks: any, index: number) => (
              <span key={index}>
                <Link className="hover-line-effect" href={subLinks.url}>
                  {subLinks.name}
                </Link>
              </span>
            ))}
          </div>
          <Link
            href="/services"
            className="read-more right-arrow-hover hover-line-effect"
          >
            READ MORE <RightArrow />
          </Link>
        </div>
      </div>
    );
  });
};
