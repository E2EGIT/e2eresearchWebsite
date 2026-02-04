import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import MarketAnalisis from "../../../../public/industry/entertainment/market-analysis.svg";
import PatientInsights from "../../../../public/industry/entertainment/patient-insights.svg";
import ContentTesting from "../../../../public/industry/entertainment/product_testing.svg";
import BrandStratgy from "../../../../public/industry/entertainment/consumer-Insight.svg";
import InsightsTracker from "../../../../public/industry/entertainment/insights-tracker.svg";
import entertainment from "../../../../public/industry/entertainment/entertainment.png";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tailored Marketing Solutions for the Evolving Entertainment Industry| E2E Research",
  keywords:
    "Market Analysis, Audience Insights, Content Testing, Brand Strategy, Shows Insights Tracker, AI-driven research, predictive analytics, machine learning",
  description:
    "Unlock the potential of your entertainment business with our expert marketing research. We provide insights that empower informed decisions and audience engagement.",
};

const ENTERTAINMENT = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="entertainment banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left   heading-sec ">
              <h1>ENTERTAINMENT</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Industry "}
        urls="/industries"
        activeUrl={"Entertainment"}
      />
      {/* food sec*/}
      <section className="pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in delivering comprehensive marketing research
              solutions tailored for the Entertainment industry. Our mission is
              to provide valuable insights that empower businesses-from
              production studios and streaming platforms to talent agencies and
              brands-to make informed decisions, enhance audience engagement,
              and drive growth.
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
                      In-depth assessments of market trends, audience
                      demographics, and competitive landscapes.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identification of emerging opportunities and potential
                      challenges in the entertainment sector.
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
                      Surveys, focus groups, and audience analytics to uncover
                      viewer preferences and behaviours.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Detailed profiles that help you understand your target
                      demographic more deeply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ContentTesting className="img-box img-box_brand" />
                <h5>
                  Content <br />
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
                      Rigorous evaluation of new content, concepts, and
                      marketing campaigns through audience feedback.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights on storytelling elements, appeal, and audience
                      reception to optimize content strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandStratgy className="img-box img-box_brand" />
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
                      Guidance on positioning your brand effectively in the
                      entertainment marketplace.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of brand perception and recommendations for
                      enhancing brand loyalty and engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <InsightsTracker className="img-box img-box_brand" />
                <h5>
                  Shows Insights <br />
                  Tracker
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Analysis of shows to gauge fan experiences and
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Recommendations for enhancing the marketing and
                      operational strategies.
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
                src={entertainment}
                alt={"Enterrtainment"}
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
                  developments in the Sports industry.
                  {/* <a href="" className="here-click">
                    here
                  </a> */}
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Expert Team</h5>
                <p>
                  Our experienced researchers and analysts have a deep
                  understanding of the Entertainment industry.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Tailored Solutions</h5>
                <p>
                  We recognize that every project is unique, our research
                  methodologies are customized to meet your specific needs.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Insights</h5>
                <p>
                  We deliver not just data, but strategic recommendations that
                  empower you to take meaningful action.
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
        <Link href={"/industries/sports"}>Sports</Link>
        <Link href={"/industries/advertising"}>Advertising</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default ENTERTAINMENT;
