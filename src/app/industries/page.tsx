import Image from "next/image";
import FooterLink from "@/Component/Footer";
import CopyFooter from "@/Component/Footer/copyFooter";
import FooterLogo from "@/Component/Footer/logoFoter";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import Food_img from "../../../public/industry/food_beverege.png";
import BrandPerfomance from "../../../public/industry/food/brand-performace.svg";
import MarketAnalysis from "../../../public/industry/food/market_analysis.svg";
import MarketSegment from "../../../public/industry/food/market_segment.svg";
import ConsumerResearch from "../../../public/industry/food/consumer_research.svg";
import ConceptTesting from "../../../public/industry/food/concept_testing.svg";
import ProductTesting from "../../../public/industry/food/product-testing.svg";
import BrandPosition from "../../../public/industry/food/brand_position.svg";

import ConsumerGood from "../../../public/industry/consumer_goods.png";
import MarketAnalisis from "../../../public/industry/consumer/market-analysis.svg";
import PatientInsights from "../../../public/industry/consumer/patient-insights.svg";
import ConsumerIndights from "../../../public/industry/consumer/consumer-Insight.svg";
import BrandStrategy from "../../../public/industry/healthCare/brand-strategy.svg";

import HealthCare from "../../../public/industry/healthcare.png";
import DigitalTransformation from "../../../public/industry/financialService/digital_transformation.svg";
import MarketTrend from "../../../public/industry/financialService/market_trend.svg";
import ProcessImprovement from "../../../public/industry/financialService/process_improvment.svg";
import SecurityThreats from "../../../public/industry/financialService/security_threats.svg";
import CompetitiveBenchmarking from "../../../public/industry/financialService/competitive_benchmarking.svg";
import BrandHealth from "../../../public/industry/financialService/brand_health.svg";
import ProductDevelopment from "../../../public/industry/financialService/product_development.svg";

import FinancialServices from "../../../public/industry/financial_services.png";
import CustomerInsights from "../../../public/industry/technology/customer_insights.svg";
import TechnologyAdoption from "../../../public/industry/technology/technology_adoption.svg";
import BrandPositioning from "../../../public/industry/technology/brand_positioning.svg";
import ITStratergy from "../../../public/industry/technology/IT_stratergy.svg";

import Technology from "../../../public/industry/technology.png";
import ContentTesting from "../../../public/industry/entertainment/product_testing.svg";
import BrandStratgy from "../../../public/industry/entertainment/consumer-Insight.svg";
import InsightsTracker from "../../../public/industry/entertainment/insights-tracker.svg";

import Entertainment from "../../../public/industry/entertainment.png";
import Sponsorship from "../../../public/industry/sports/sponsorship.svg";
import EventResearch from "../../../public/industry/sports/event-research.svg";
import Ad from "../../../public/industry/sports/ad.svg";

import Sports from "../../../public/industry/sports.png";
import MarketResearch from "../../../public/industry/advertising/market_research.svg";
import AdChannel from "../../../public/industry/advertising/adchannel.svg";
import Advertising from "../../../public/industry/advertising.png";

import Link from "next/link";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Industry-Specific Research Solutions | E2E Research Services Marketing Insights",
  keywords:
    "Industry-specific research Food & beverages, Consumer goods insights Healthcare market analysis Financial services research Technology adoption studies Entertainment audience insights Sports fan engagement Advertising campaign effectiveness Brand positioning Consumer insights Product testing Market analysis / Market entry",
  description:
    "Discover E2E's tailored research solutions across industries, including food & beverage, consumer goods, healthcare, financial services, technology, entertainment, sports, and advertising. Leverage qualitative and quantitative insights to drive growth, enhance customer experiences, and stay competitive.",
};

const Industries = () => {
  return (
    <>
      <section className="industries-banner banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>INDUSTRIES</h1>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb hedding={""} activeUrl={"Industries"} />
      {/*Offerings start */}
      <section className="heading-sec light-gray-bg heading overflow-hidden pb-x padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Enhancing Research Capabilities Across Sectors</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="research-font-size offering">
            <p>
              At E2E, we provide end-to-end research solutions across a wide
              range of industries, catering to both standard and custom research
              formats-qualitative (in-person or FGD) and quantitative (online).
              Our dedicated team delivers actionable insights to help businesses
              and brands navigate today's competitive landscape.
            </p>
            <p>
              For more information, click here or explore the industries we
              serve below:
            </p>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Food and Beverage start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={Food_img}
                alt={"Food"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Food and Beverage</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in providing in-depth marketing research
                  tailored specifically for the Food and Beverage sector. We
                  cover the research in the entire phase of brand evolution
                  starting with the new market entry to the priority markets. */}
                  We deliver comprehensive marketing research tailored to the
                  Food and Beverage sector, covering every stage of brand
                  evolution-from new market entry to expansion in priority
                  markets. Our insights empower businesses to make informed
                  decisions, fostering growth and enhancing customer
                  satisfaction
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <BrandPerfomance className="img-box_brand" />
                    <h5>
                      Brand <br />
                      Performance
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <MarketAnalysis className="img-box_brand" />
                    <h5>
                      Market <br />
                      Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <MarketSegment className="img-box_brand" />
                    <h5>
                      Market <br />
                      Segmentation
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ConsumerResearch className="img-box_brand" />
                    <h5>
                      Consumer <br />
                      Research
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ConceptTesting className="img-box_brand" />
                    <h5>
                      Concept <br /> Testing
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ProductTesting className="img-box_brand" />
                    <h5>
                      Product <br /> Testing
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandPosition className="img-box_brand" />
                    <h5>
                      Brand <br /> Positioning
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href="/industries/food-and-beverage"
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Consumer Goods start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8">
              <div className="heading-sec ins-insg res-head">
                <h2>Consumer Goods</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Our expertise lies in delivering targeted marketing research
                  solutions for the Consumer Goods industry. We provide
                  businesses with actionable insights to improve customer
                  experiences, make strategic decisions, and achieve sustainable
                  growth.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketAnalisis className="img-box img-box_brand" />
                    <h5>
                      Brand <br />
                      Performance
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <PatientInsights className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Research
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ConsumerIndights className="img-box img-box_brand" />
                    <h5>
                      Consumer <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ProductTesting className="img-box img-box_brand" />
                    <h5>
                      Product <br />
                      Testing
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandPosition className="img-box img-box_brand" />
                    <h5>
                      Brand <br />
                      Strategy
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/consumer-goods"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={ConsumerGood}
                alt={"Consumer Good"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Healthcare start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={HealthCare}
                alt={"Health Care"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Healthcare</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in providing in-depth marketing research
                  tailored specifically for the Food and Beverage sector. We
                  cover the research in the entire phase of brand evolution
                  starting with the new market entry to the priority markets. */}
                  We offer robust marketing research solutions designed
                  specifically for the Healthcare industry. Our insights empower
                  providers, pharmaceutical companies, insurers, and wellness
                  brands to enhance patient engagement, drive innovation, and
                  deliver superior services.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketAnalisis className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <PatientInsights className="img-box img-box_brand" />
                    <h5>
                      Patient <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ProductTesting className="img-box img-box_brand" />
                    <h5>
                      Product <br />
                      Testing
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandStrategy className="img-box img-box_brand" />
                    <h5>
                      Brand <br />
                      Strategy
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/healthcare"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb "
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Financial Services start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  ">
              <div className="heading-sec ins-insg res-head">
                <h2>Financial Services</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in delivering cutting-edge marketing research
                  and insights for the financial services sector. In today’s
                  rapidly evolving financial landscape, staying ahead of the
                  curve requires more than intuition-it demands deep,
                  data-driven understanding of market trends, customer
                  behaviour… */}
                  Our research capabilities cater to the evolving needs of the
                  Financial Services sector. By analyzing market trends,
                  customer behavior, and competitive dynamics, we equip
                  financial institutions, fintech companies, and insurers with
                  data-driven strategies to remain competitive and make informed
                  decisions.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <DigitalTransformation className="img-box img-box_brand" />
                    <h5>
                      Digital Transformation
                      <br /> Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <MarketTrend className="img-box img-box_brand" />
                    <h5>
                      Market Trend
                      <br /> Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ProcessImprovement className="img-box img-box_brand" />
                    <h5>
                      Process Improvement
                      <br /> Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <SecurityThreats className="img-box img-box_brand" />
                    <h5>
                      Security <br />
                      and Threats Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <CompetitiveBenchmarking className="img-box img-box_brand" />
                    <h5>
                      Competitive <br />
                      Benchmarking
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandHealth className="img-box img-box_brand" />
                    <h5>
                      Brand Health <br />& Perception
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ProductDevelopment className="img-box img-box_brand" />
                    <h5>
                      Product Development <br />& Innovation Research
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/financial-services"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={FinancialServices}
                alt={"Financial Services"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Technology start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={Technology}
                alt={"Technology"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Technology</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in delivering comprehensive marketing research
                  solutions tailored for the Information Technology (IT)
                  industry. Our mission is to empower IT companies-from software
                  developers to service providers-with the insights needed to
                  innovate, enhance customer experiences… */}
                  We deliver tailored marketing research solutions for the
                  Information Technology (IT) sector. Our insights help IT
                  companies-from software developers to service
                  providers-innovate, enhance customer satisfaction, and achieve
                  sustainable growth in today's dynamic market.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketAnalysis className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <CustomerInsights className="img-box img-box_brand" />
                    <h5>
                      Customer <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <TechnologyAdoption className="img-box img-box_brand" />
                    <h5>
                      Technology <br />
                      Adoption Studies
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandPositioning className="img-box img-box_brand" />
                    <h5>
                      Brand <br />
                      Positioning
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ITStratergy className="img-box img-box_brand" />
                    <h5>
                      IT Strategy and <br />
                      Outsourcing <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/technology"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Entertainment start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  ">
              <div className="heading-sec ins-insg res-head">
                <h2>Entertainment</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in delivering comprehensive marketing research
                  solutions tailored for the Entertainment industry. Our mission
                  is to provide valuable insights that empower businesses-from
                  production studios and streaming platforms to talent agencies
                  and brands-to make informed… */}
                  E2E provides specialized research solutions for the
                  Entertainment industry, offering valuable insights to
                  production studios, streaming platforms, talent agencies, and
                  brands. Our research enables these organizations to make
                  informed decisions, boost audience engagement, and drive
                  growth.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketAnalisis className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <PatientInsights className="img-box img-box_brand" />
                    <h5>
                      Audience <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <ContentTesting className="img-box img-box_brand" />
                    <h5>
                      Content <br />
                      Testing
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandStratgy className="img-box img-box_brand" />
                    <h5>
                      Brand <br />
                      Strategy
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <InsightsTracker className="img-box img-box_brand" />
                    <h5>
                      Shows Insights <br />
                      Tracker
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/entertainment"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={Entertainment}
                alt={"Entertainment"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Sports start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={Sports}
                alt={"Sports"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Sports</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in providing in-depth marketing research
                  tailored specifically for the Sports industry. Our mission is
                  to equip organizations-from teams and leagues to brands and
                  sponsors-with the insights needed to enhance fan engagement,
                  drive revenue, and stay ahead in a competitive… */}
                  Our in-depth marketing research services for the Sports
                  industry empower teams, leagues, brands, and sponsors with
                  actionable insights. We help enhance fan engagement, maximize
                  revenue, and maintain a competitive edge in the market.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketAnalisis className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Analysis
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <PatientInsights className="img-box img-box_brand" />
                    <h5>
                      Fan <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Sponsorship className="img-box img-box_brand" />
                    <h5>
                      Sponsorship <br />
                      Evaluation
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <EventResearch className="img-box img-box_brand" />
                    <h5>
                      Event <br />
                      Research
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Ad className="img-box img-box_brand" />
                    <h5>
                      Ad <br />
                      Evaluation
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/sports"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Advertising start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  ">
              <div className="heading-sec ins-insg res-head">
                <h2>Advertising</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  {/* We specialize in providing comprehensive marketing research
                  tailored to the Advertising industry. Our mission is to equip
                  agencies, brands, and marketers with the insights they need to
                  create impactful campaigns, optimize strategies, and drive
                  measurable results. */}
                  We offer research-driven solutions for the Advertising
                  industry, equipping agencies, brands, and marketers with the
                  tools to craft impactful campaigns, optimize strategies, and
                  deliver measurable results.
                </p>
              </div>
              <div className="row box-card">
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center  hover-svg-blk">
                    <MarketResearch className="img-box img-box_brand" />
                    <h5>
                      Market <br />
                      Research
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <CustomerInsights className="img-box img-box_brand" />
                    <h5>
                      Audience <br />
                      Insights
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <TechnologyAdoption className="img-box img-box_brand" />
                    <h5>
                      Campaign <br />
                      Effectiveness
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <BrandPositioning className="img-box img-box_brand" />
                    <h5>
                      Brand Perception <br />
                      Studies
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <AdChannel className="img-box img-box_brand" />
                    <h5>
                      Ad Channel <br />
                      Effectiveness
                    </h5>
                  </div>
                </div>
                <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk  d-flex flex-column  align-items-center hover-svg-blk">
                    <Link
                      href={"/industries/advertising"}
                      className="read-more right-arrow-hover hover-line-effect ind-margin-tb"
                    >
                      READ MORE
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={Advertising}
                alt={"Advertising"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
    </>
  );
};

export default Industries;
