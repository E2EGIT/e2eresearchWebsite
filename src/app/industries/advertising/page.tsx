import React from "react";
import Image from "next/image";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import CustomerInsights from "../../../../public/industry/technology/customer_insights.svg";
import TechnologyAdoption from "../../../../public/industry/technology/technology_adoption.svg";
import BrandPositioning from "../../../../public/industry/technology/brand_positioning.svg";
import MarketResearch from "../../../../public/industry/advertising/market_research.svg";
import AdChannel from "../../../../public/industry/advertising/adchannel.svg";
import IndustryAdverisement from "../../../../public/industry/advertising/industryInsights_.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Unlocking the Power of Marketing Research in Advertising| E2E Research",
  keywords:
    "Market Research, Audience Insights, Campaign Effectiveness, Brand Perception Studies, Ad Channel Effectiveness, AI-driven research, predictive analytics, machine learning",
  description:
    "Unlock impactful marketing strategies with our expert research services. We focus on audience insights, campaign effectiveness, and brand perception for measurable results.",
};

const Advertising = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="advertising banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left   heading-sec ">
              <h1>ADVERTISING</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Industry "}
        urls="/industries"
        activeUrl={"Advertising"}
      />
      {/* food sec*/}
      <section className="pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in providing comprehensive marketing research
              tailored to the Advertising industry. Our mission is to equip
              agencies, brands, and marketers with the insights they need to
              create impactful campaigns, optimize strategies, and drive
              measurable results.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketResearch className="img-box img-box_brand" />
                <h5>
                  Market <br />
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
                      In-depth analysis of advertising trends, market dynamics,
                      and competitive landscapes.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identifying opportunities for innovation and growth in the
                      advertising space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <CustomerInsights className="img-box img-box_brand" />
                <h5>
                  Audience <br />
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
                      Surveys, focus groups, and audience segmentation to
                      understand consumer behaviors and preferences.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Detailed insights that help you craft targeted messages
                      that resonate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <TechnologyAdoption className="img-box img-box_brand" />
                <h5>
                  Campaign <br />
                  Effectiveness
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of advertising campaigns through performance
                      metrics and audience feedback.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights on creative elements, media effectiveness, and
                      return on investment (ROI).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandPositioning className="img-box img-box_brand" />
                <h5>
                  Brand Perception <br />
                  Studies
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>Brand Perception Studies</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Recommendations for enhancing brand equity and loyalty
                      through strategic positioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <AdChannel className="img-box img-box_brand" />
                <h5>
                  Ad Channel <br />
                  Effectiveness
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Assessing pre- post changes and impact to your recent
                      messaging across various channels-TV/Radio/Print/Digital.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Recommendations for increasing the message recall with our
                      extensive experience in advertising market research.
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
            <div className="col-sm-12 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile">
              <Image
                src={IndustryAdverisement}
                alt="Industry insights"
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-12 col-md-7  col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Industry Insights</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Stay informed with our extensive resources on the latest
                  trends and developments in the Advertising industry.
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Expert Team</h5>
                <p>
                  Our team of experienced researchers and advertising
                  professionals understands the complexities of the industry.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Customized Solutions</h5>
                <p>
                  We tailor our research methodologies to fit the unique needs
                  and objectives of each client.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Insights</h5>
                <p>
                  We provide insights that go beyond data, delivering strategic
                  recommendations for your advertising initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/industries/food-and-beverage"}>Food and Beverage</Link>
        <Link href={"/industries/consumer-goods"}>Consumer Goods</Link>
        <Link href={"/industries/healthcare"}>Healthcare</Link>
        <Link href={"/industries/financial-services"}>Financial Services</Link>
        <Link href={"/industries/technology"}>Technology</Link>
        <Link href={"/industries/entertainment"}>Entertainment</Link>
        <Link href={"/industries/sports"}>Sports</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default Advertising;
