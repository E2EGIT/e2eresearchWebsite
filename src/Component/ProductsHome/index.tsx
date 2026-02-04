// "use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";
import Raven from "../../../public/homePage/technology/raven.jpg";
import SLM from "../../../public/homePage/technology/slm_new.png";
// import SLM from "../../../public/homePage/technology/slm.jpg";
import AI from "../../../public/homePage/technology/ai.jpg";
import DataValidator from "../../../public/homePage/technology/data_validator.jpg";
import Inscribee from "../../../public/homePage/technology/inscribee.jpg";
import DataPilot from "../../../public/homePage/technology/data_pilot.jpg";
import Engame from "../../../public/homePage/technology/engame.jpg";
import Resq from "../../../public/homePage/technology/dfp.jpg";

export const HomeProduct = () => {
  const productData = [
    {
      productImage: Raven,
      productName: "Raven",
      productPara:
        "Transform the way you access and interpret data with our 24-Hour Dashboarding solution. Designed for speed and efficiency, this powerful tool provides real-time data visualization and actionable insights within just 24 hours.",
      url: "/products/raven",
      rowClass: "mobile-column-revers hover-tech-raven",
      columnClass: "raven-image text-blk ",
    },
    {
      productImage: SLM,
      productName: "SLM",
      productPara:
        "Streamline your research process with efficient Survey Link Management. Easily create, distribute, and track survey links while ensuring secure access and seamless respondent experiences. With robust features for link customization, respondent monitoring, and real-time analytics, our solution simplifies survey operations and enhances data quality. Optimize your surveys with precision and control, all in one intuitive platform.",
      url: "/products/slm",
      rowClass: "productrow-revet mobile-column-revers hover-tech-slm ",
      columnClass: "hover-arrow-right slm-image",
    },
    {
      productImage: AI,
      productName: "AI",
      productPara:
        "Smart AI solutions for the research industry leverages advanced technologies to streamline data collection, analysis, and interpretation. It delivers accurate insights, optimizes processes, and empowers faster, data-driven decision-making, transforming traditional research workflows.",
      url: "/products/AI",
      rowClass: "mobile-column-revers hover-tech-ai ",
      columnClass: "text-blk ai-image",
    },
    {
      productImage: DataValidator,
      productName: "Data Validator",
      productPara:
        "Streamline your survey process with our Data Validator, a powerful tool designed to enhance the accuracy and reliability of research data with the help of quick and effective scripting. It helps to identifies inconsistencies, duplicates, and errors within your survey responses, ensuring only high-quality data is retained for analysis.",
      url: "/products/data-validator",
      rowClass:
        "productrow-revet mobile-column-revers hover-tech-data-validator",
      columnClass: "hover-arrow-right data-validator-image",
    },
    {
      productImage: Inscribee,
      productName: "Inscribee",
      productPara:
        "Streamline your workflows with Inscribee. Easily create, send, and manage legally binding documents online, reducing paperwork and saving time. With secure, cloud-based solutions, you can sign anytime, anywhere, on any device. Experience seamless collaboration and faster approvals with intuitive, user-friendly features designed for modern business needs.",
      url: "/products/inscribee",
      rowClass: "mobile-column-revers",
      columnClass: "text-blk inscribee-image",
    },
    {
      productImage: DataPilot,
      productName: "Data Pilot",
      productPara:
        "Test data generation for online survey links involves creating realistic datasets that mimic actual respondent behavior in a live environment. This process ensures comprehensive testing of survey functionality, logic, and user experience before deployment. By simulating diverse scenarios and responses, it helps identify potential issues, validate skip patterns, and optimize survey performance.",
      url: "/products/datapilot",
      rowClass: "productrow-revet mobile-column-revers hover-tech-data",
      columnClass: "hover-arrow-right data-pilot-image",
    },
    {
      productImage: Engame,
      productName: "Gamification",
      productPara:
        "Elevate your survey experience with gamification, turning traditional questionnaires into interactive and enjoyable activities. By incorporating game-like elements such as points, badges, progress bars, and challenges, gamified surveys captivate respondents, boosting participation rates and data quality.",
      url: "/products/gamification",
      rowClass: "mobile-column-revers hover-tech-gamification",
      columnClass: "text-blk gamification-image ",
    },
    {
      productImage: Resq,
      productName: "ResQ",
      productPara:
        "Ensures that only genuine, high-quality responses are collected, safeguarding the integrity of your survey data. With seamless integration and real-time monitoring, resQ is an essential tool for maintaining trust and reliability in online research.",
      url: "/products/resQ",
      rowClass: "productrow-revet mobile-column-revers hover-tech-dfp",
      columnClass: "hover-arrow-right dfp-image",
    },
  ];
  return productData?.map((product: any, index: number) => {
    return (
      <div
        className={`row overflow-hidden hover-tech-raven ${
          product.rowClass && product.rowClass
        } hover-tec`}
        key={index}
      >
        <div className=" col-md-6  img-box p-0 hover-blk">
          <Image src={product.productImage} alt={product.productName} />
        </div>
        <div
          className={`heading-sec sec-paragraph  col-md-6 gray-background  image-sec  pro-pad ${product?.columnClass} `}
        >
          <h2>{product.productName}</h2>
          <p>{product.productPara}</p>
          <Link
            href={product.url}
            className="read-more right-arrow-hover hover-line-effect"
          >
            READ MORE
            <RightArrow />
          </Link>
        </div>
      </div>
    );
  });
};
