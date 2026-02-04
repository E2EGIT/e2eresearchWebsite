import React from "react";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import MarketAnalisis from "../../../../public/industry/sports/market-analysis.svg";
import PatientInsights from "../../../../public/industry/sports/patient-insights.svg";
import Sponsorship from "../../../../public/industry/sports/sponsorship.svg";
import EventResearch from "../../../../public/industry/sports/event-research.svg";
import Ad from "../../../../public/industry/sports/ad.svg";
import sport from "../../../../public/industry/sports/sports.png";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Navigating the Competitive Landscape in Sports Marketing| E2E Research",
  keywords:
    "Market Analysis, Fan Insights, Sponsorship Evaluation, Event Research, Ad Evaluation, AI-driven research, predictive analytics, machine learning",
  description:
    "Unlock the potential of your entertainment business with our expert marketing research. We provide insights that empower informed decisions and audience engagement.",
};

const SPORTS = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="sports banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left   heading-sec ">
              <h1>SPORTS</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Industry "}
        urls="/industries"
        activeUrl={"Sports"}
      />
      {/* food sec*/}
      <section className="pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in providing in-depth marketing research tailored
              specifically for the Sports industry. Our mission is to equip
              organizations-from teams and leagues to brands and sponsors—with
              the insights needed to enhance fan engagement, drive revenue, and
              stay ahead in a competitive landscape.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketAnalisis className="img-box img-box_brand" />
                <h5>
                  Market <br />
                  Analysis
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Comprehensive assessments of market trends, audience
                      demographics, and competitive dynamics.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identifying opportunities for growth and innovation within
                      the sports sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <PatientInsights className="img-box img-box_brand" />
                <h5>
                  Fan <br />
                  Insights
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Surveys, focus groups, and social listening to understand
                      fan behavior and preferences.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      In-depth analysis of fan engagement strategies and loyalty
                      drivers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <Sponsorship className="img-box img-box_brand" />
                <h5>
                  Sponsorship <br />
                  Evaluation
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Measuring the effectiveness of sponsorships and
                      partnerships.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights into brand perception and ROI from sports
                      marketing initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <EventResearch className="img-box img-box_brand" />
                <h5>
                  Event <br />
                  Research
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Analysis of sporting events to gauge fan experiences and
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Recommendations for enhancing event marketing and
                      operational strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <Ad className="img-box img-box_brand" />
                <h5>
                  Ad <br />
                  Evaluation
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Analysis of sporting advertisement to gauge user
                      engagement and likelihood to subscribe/adopt.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Recommendations for ad relevancy, ad appeal and areas of
                      gaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Industry insights*/}
      <section className="padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile">
              <Image
                src={sport}
                alt={"Sports"}
                height={350}
                className="img-boxshadow"
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Industry Insights</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Stay informed with our latest resources on trends and
                  developments in the Sports industry.
                  {/* <a href="" className="here-click">
                    here
                  </a> */}
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Industry Expertise</h5>
                <p>
                  Our team comprises seasoned professionals with extensive
                  knowledge of the Sports industry.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Customized Research</h5>
                <p>
                  We tailor our methodologies to fit the unique needs and goals
                  of each client.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Recommendations</h5>
                <p>
                  We go beyond data to provide insights that drive strategic
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Healthcare */}

      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/industries/food-and-beverage"}>Food and Beverage</Link>
        <Link href={"/industries/consumer-goods"}>Consumer Goods</Link>
        <Link href={"/industries/healthcare"}>Healthcare</Link>
        <Link href={"/industries/financial-services"}>Financial Services</Link>
        <Link href={"/industries/technology"}>Technology</Link>
        <Link href={"/industries/entertainment"}>Entertainment</Link>
        <Link href={"/industries/advertising"}>Advertising</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default SPORTS;
