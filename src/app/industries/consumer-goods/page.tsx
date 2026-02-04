import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import MarketAnalisis from "../../../../public/industry/consumer/market-analysis.svg";
import PatientInsights from "../../../../public/industry/consumer/patient-insights.svg";
import ProductTesting from "../../../../public/industry/consumer/product_testing.svg";
import ConsumerIndights from "../../../../public/industry/consumer/consumer-Insight.svg";
import BrandStrategy from "../../../../public/industry/consumer/patient-insights.svg";
import consumer from "../../../../public/industry/consumer/consumer.png";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Goods",
  keywords:
    "Brand performance, Market Analysis, Consumer Insights, product testing, Brand strategy ",
  description:
    "We specialize in delivering comprehensive marketing research solutions tailored to the Consumer Industry. Our mission is to empower businesses with the insights they need to make informed decisions, enhance customer experiences, and drive growth. ",
};

const CONSUMER = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="consumer banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>CONSUMER GOODS</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Industry "}
        urls="/industries"
        activeUrl={"Consumer Goods"}
      />
      {/* food sec*/}
      <section className="pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in delivering comprehensive marketing research
              solutions tailored to the Consumer Industry. Our mission is to
              empower businesses with the insights they need to make informed
              decisions, enhance customer experiences, and drive growth.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketAnalisis className="img-box img-box_brand" />
                <h5>
                  Brand <br />
                  Performance
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Assess your brand value over a period of time with E2E
                      Brand tracker. <sup>TM</sup>
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Quantify the customer experience and satisfaction level
                      with your brand using NPS technique.
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
                      In-depth analysis of market trends, consumer demographics,
                      and competitive landscapes.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identify emerging opportunities and potential threats in
                      your industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ConsumerIndights className="img-box img-box_brand" />
                <h5>
                  Consumer <br />
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
                      Surveys, focus groups, and ethnographic studies to uncover
                      consumer motivations and preferences.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Detailed profiles that help you understand your target
                      audience better.
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
                      Rigorous evaluation of new products or concepts through
                      consumer feedback.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights on usability, appeal, product drivers, and
                      pricing strategies to optimize market entry.
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
                      Assistance in positioning your brand effectively in a
                      crowded marketplace.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of brand perception and recommendations for
                      enhancing brand equity.
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
                src={consumer}
                alt={"consumer"}
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
                  Stay ahead of the curve with our curated resources on the
                  latest trends and developments in the Consumer Industry.
                  {/* <a href="" className="here-click">
                    here
                  </a> */}
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Expert Team</h5>
                <p>
                  Our experienced researchers and analysts bring a wealth of
                  knowledge and expertise in the Consumer Industry.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Tailored Solutions</h5>
                <p>
                  We understand that each business is unique our research is
                  customized to meet your specific needs and goals.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Insights</h5>
                <p>
                  We provide not just data, but strategic recommendations that
                  empower you to take meaningful action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Con */}
      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/industries/food-and-beverage"}>Food and Beverage</Link>
        <Link href={"/industries/healthcare"}>Healthcare</Link>
        <Link href={"/industries/financial-services"}>Financial Services</Link>
        <Link href={"/industries/technology"}>Technology</Link>
        <Link href={"/industries/entertainment"}>Entertainment</Link>
        <Link href={"/industries/sports"}>Sports</Link>
        <Link href={"/industries/advertising"}>Advertising</Link>
      </section>
      {/*END*/}
      {/*Main footer */}
    </>
  );
};

export default CONSUMER;
