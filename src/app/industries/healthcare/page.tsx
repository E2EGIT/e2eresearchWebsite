import React from "react";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import MarketAnalisis from "../../../../public/industry/healthCare/market-analysis.svg";
import PatientInsights from "../../../../public/industry/healthCare/patient-insights.svg";
import ProductTesting from "../../../../public/industry/healthCare/product_testing.svg";
import BrandStrategy from "../../../../public/industry/healthCare/brand-strategy.svg";
import BrandTracking from "../../../../public/industry/healthCare/brand-tracking.svg";
import BrandStuies from "../../../../public/industry/healthCare/brand-studies.svg";
import BrandCommunications from "../../../../public/industry/healthCare/brand-communications.svg";
import BrandAttitude from "../../../../public/industry/healthCare/brand-attitude.svg";
import BrandResearch from "../../../../public/industry/healthCare/brand-research.svg";
import BrandPatient from "../../../../public/industry/healthCare/patient.svg";
import PatientSetisfaction from "../../../../public/industry/healthCare/patient.svg";
import Segmentation from "../../../../public/industry/healthCare/segmentation.svg";
import Advertising from "../../../../public/industry/healthCare/advertising.svg";
import NewProduct from "../../../../public/industry/healthCare/new-product.svg";
import ConceptTesting from "../../../../public/industry/healthCare/concept-testing.svg";
import MarketLaunch from "../../../../public/industry/healthCare/market-launch.svg";
import healthCare from "../../../../public/industry/healthCare//healthCare.png";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare",
  keywords:
    "Market Analysis, Patient Insights,  Product testing, Brand Strategy",
  description:
    "We specialize in providing comprehensive marketing research solutions tailored to the Healthcare industry. Our mission is to empower healthcare organizations-ranging from providers and pharmaceutical companies to insurers and wellness brands-with the insights needed to improve patient engagement, drive innovation, and enhance service delivery.",
};

const Healthcare = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="healthcare banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left   heading-sec ">
              <h1>HEALTHCARE</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Industry "}
        urls="/industries"
        activeUrl={"Healthcare"}
      />
      {/* food sec*/}
      <section className=" pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in providing comprehensive marketing research
              solutions tailored to the Healthcare industry. Our mission is to
              empower healthcare organizations-ranging from providers and
              pharmaceutical companies to insurers and wellness brands-with the
              insights needed to improve patient engagement, drive innovation,
              and enhance service delivery.
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
                      In-depth assessments of healthcare trends, market
                      dynamics, and competitive landscapes.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identification of emerging opportunities and potential
                      challenges within the healthcare sector.
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
                  Patient <br />
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
                      Surveys, focus groups, response forms, and qualitative
                      research to understand patient needs, preferences, and
                      behaviours.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Detailed profiles that help you design patient-centered
                      services and communications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ProductTesting className="img-box img-box_brand" />
                <h5>
                  Product <br />
                  Testing
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of new healthcare products and services through
                      rigorous testing and feedback.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights on usability, effectiveness, and market readiness
                      to optimize your offerings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandStrategy className="img-box img-box_brand" />
                <h5>
                  Brand <br />
                  Strategy
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Strategies for effective brand positioning and
                      communication in the healthcare market.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of brand perception and recommendations for
                      enhancing trust and loyalty.
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
                src={healthCare}
                alt={"healthCare"}
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
                  Stay informed with our latest resources on trends and
                  developments in the Healthcare industry.
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Healthcare Expertise</h5>
                <p>
                  Our team consists of seasoned professionals with extensive
                  knowledge of the healthcare landscape.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Tailored Research</h5>
                <p>
                  We customize our methodologies to meet the unique needs and
                  goals of each client.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Insights</h5>
                <p>
                  We deliver insights that drive meaningful action, helping you
                  to implement effective strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Healthcare */}
      <section className="light-gray-bg padding-left-x pb-x gray-background help_support">
        <div className="container-fluid">
          <div className="heading-sec we-can res-head">
            <h2>
              We can help support the below within the healthcare marketing
              research
            </h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row box-card">
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec  indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandTracking className="img-box img-box_brand" />
                <h5>Brand Tracking Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandStuies className="img-box img-box_brand" />
                <h5>Brand Positioning Studies</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandCommunications className="img-box img-box_brand" />
                <h5>Brand Communications Studies</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandAttitude className="img-box img-box_brand" />
                <h5>HCP Usage and Attitude on Brands</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandResearch className="img-box img-box_brand" />
                <h5>Patient Research Associated with Line of Treatment</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandPatient className="img-box img-box_brand" />
                <h5>
                  Patient Response <br />
                  Form-Based Studies
                </h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <PatientSetisfaction className="img-box img-box_brand" />
                <h5>Patient Satisfaction Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <Segmentation className="img-box img-box_brand" />
                <h5>Patient Segmentation Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <Advertising className="img-box img-box_brand" />
                <h5>Advertising and Messaging Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <NewProduct className="img-box img-box_brand" />
                <h5>New Product/Service Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ConceptTesting className="img-box img-box_brand" />
                <h5>Concept Testing Research</h5>
              </div>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketLaunch className="img-box img-box_brand" />
                <h5>Pre-Market Launch Studies</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/industries/food-and-beverage"}>Food and Beverage</Link>
        <Link href={"/industries/consumer-goods"}>Consumer Goods</Link>
        <Link href={"/industries/financial-services"}>Financial Services</Link>
        <Link href={"/industries/technology"}>Technology</Link>
        <Link href={"/industries/entertainment"}>Entertainment</Link>
        <Link href={"/industries/sports"}>Sports</Link>
        <Link href={"/industries/advertising"}>Advertising</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default Healthcare;
