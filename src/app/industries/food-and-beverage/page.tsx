"use client";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import BrandPerfomance from "../../../../public/industry/food/brand-performace.svg";
import MarketAnalysis from "../../../../public/industry/food/market_analysis.svg";
import MarketSegment from "../../../../public/industry/food/market_segment.svg";
import ConsumerResearch from "../../../../public/industry/food/consumer_research.svg";
import ConceptTesting from "../../../../public/industry/food/concept_testing.svg";
import ProductTesting from "../../../../public/industry/food/product-testing.svg";
import BrandPosition from "../../../../public/industry/food/brand_position.svg";
import Food_img from "../../../../public/industry/food/food-img.png";
import Image from "next/image";
import Link from "next/link";
import CustomPopup from "@/Component/CustomPopup";
import { useState } from "react";
import IndustryInsightsForm from "@/Component/IndustryInsightsForm";

const Food_Beverage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      {/*Banner Start */}
      <section className="food-beverage banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>FOOD AND BEVERAGE</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <title>Food and Beverages</title>
      <meta
        name="keywords"
        content="Brand Performance, Market Analysis,  market Segmentation,  Consumer research, Concept testing, Product testing, Brand positioning, Market entry"></meta>
      <meta
        name="description"
        content="We specialize in providing in-depth marketing research tailored specifically for the Food and Beverage sector. We cover the research in the entire phase of brand evolution starting with the new market entry to the priority markets. Our goal is to help businesses make informed decisions that drive growth and enhance customer satisfaction. "></meta>

      <Breadcrumb
        hedding={"Industries"}
        urls="/industries"
        activeUrl={"Food and Beverage"}
      />
      {/* food sec*/}
      <section className="pb-x light-gray-bg padding-left-x">
        <div className="container-fluid">
          <div className="brand-hedder">
            <p>
              We specialize in providing in-depth marketing research tailored
              specifically for the Food and Beverage sector. We cover the
              research in the entire phase of brand evolution starting with the
              new market entry to the priority markets. Our goal is to help
              businesses make informed decisions that drive growth and enhance
              customer satisfaction.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center  hover-svg-blk">
                <BrandPerfomance className="img-box_brand" />
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
                      Brand tracker <sup>TM.</sup>
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Quantify the consumer experience and satisfaction level
                      with your brand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketAnalysis className="img-box_brand" />
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
                      Comprehensive assessments of F&B trends, consumer
                      behaviour, and competitive landscapes.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Identify opportunities and drivers for growth and
                      innovation within your niche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <MarketSegment className="img-box_brand" />
                <h5>
                  Market <br />
                  Segmentation
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Discover the latent segments to understand the core
                      targets and accordingly tailor your marketing strategy.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Unlock the huge underlying value with newly formed
                      segments or evolving targets as per changing needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ConsumerResearch className="img-box_brand" />
                <h5>
                  Consumer <br />
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
                      Usage and Attitude Surveys, focus groups, and interviews
                      to understand consumer preferences and motivations.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Insights into demographic shifts, lifestyle changes, and
                      emerging tastes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ConceptTesting className="img-box_brand" />
                <h5>
                  Concept <br /> Testing
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Get a quick insight into your concept or idea before
                      investing anything in the actual prototype.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Test variety of product inputs on consumers
                      likeability–packaging, product information or design etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <ProductTesting className="img-box_brand" />
                <h5>
                  Product <br /> Testing
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluation of new product concepts and prototypes through
                      consumer feedback.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Analysis of taste tests, packaging appeal, and price
                      sensitivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ind-margin-t">
            <div className="col-xs-12 col-sm-3 col-md-4  col-lg-3 col-xl-2 col-xxl-2 mb-mobile">
              <div className="box-sec indu-blk d-flex flex-column  align-items-center hover-svg-blk">
                <BrandPosition className="img-box_brand" />
                <h5>
                  Brand <br /> Positioning
                </h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
              <div className="box-sec">
                <div className="d-flex right-arrow-hover indstrie-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Strategies to differentiate your brand in a crowded
                      marketplace.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Evaluating brand perception and developing messaging that
                      resonates with your target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Industry insights*/}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-12 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={Food_img}
                alt={"Food"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-12 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Industry Insights</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Stay informed with our extensive resources on the latest
                  trends and developments in the Food and Beverage industry.
                  {/* Ask
                  for case studies{" "} */}{" "}
                  <span
                    className="here-click hover-line-effect pointer-cursour"
                    onClick={handleModal}>
                    Contact for case studies
                  </span>
                </p>
              </div>
              <h6>Why Choose Us?</h6>
              <div className="explore-sec">
                <h5>Expertise</h5>
                <p>
                  Our team of seasoned researchers and industry experts
                  understands the unique dynamics of the Food and Beverage
                  sector.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Customized Solutions</h5>
                <p>
                  We tailor our research methodologies to fit your specific
                  business needs and objectives.
                </p>
              </div>
              <div className="explore-sec">
                <h5>Actionable Insights</h5>
                <p>
                  We don’t just provide data, we deliver insights that lead to
                  actionable strategies for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*urls*/}
      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/industries/consumer-goods"}>Consumer Goods</Link>
        <Link href={"/industries/healthcare"}>Healthcare</Link>
        <Link href={"/industries/financial-services"}>Financial Services</Link>
        <Link href={"/industries/technology"}>Technology</Link>
        <Link href={"/industries/entertainment"}>Entertainment</Link>
        <Link href={"/industries/sports"}>Sports</Link>
        <Link href={"/industries/advertising"}>Advertising</Link>
      </section>
      {/*END*/}
      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={"How can we help you?"}
        contentBody={<IndustryInsightsForm setIsModalOpen={setIsModalOpen} />}
      />
    </>
  );
};

export default Food_Beverage;
