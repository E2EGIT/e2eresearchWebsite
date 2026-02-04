import Breadcrumb from "@/Component/widgets/BreadCrumb";
import MarketAssessment from "../../../public/researchAndConsulting/market_assessment.png";
import SalesMarketing from "../../../public/researchAndConsulting/marketAssessment/sales_and_marketing.svg";
import Managemen from "../../../public/researchAndConsulting/brandResearch/managers.svg";
import CompanyStakeholder from "../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../public/researchAndConsulting/brandResearch/industries.svg";
import ConsumerResearch from "../../../public/researchAndConsulting/consumer_research.png";
import ConsumerInsights from "../../../public/researchAndConsulting/consumerResearch/consumerinsights.svg";
import NewProductDevelopmentesearch from "../../../public/researchAndConsulting/new_product_development.png";
import SensoryResearch from "../../../public/researchAndConsulting/sensoryResearch/ourExprience.png";
import FoodAndBeverage from "../../../public/researchAndConsulting/sensoryResearch/foodandbeverage.svg";
import Franchise from "../../../public/researchAndConsulting/sensoryResearch/franchise.svg";
import SkinCare from "../../../public/researchAndConsulting/sensoryResearch/skincare.svg";
import PetFood from "../../../public/researchAndConsulting/sensoryResearch/petfood.svg";
import BrandResearch from "../../../public/researchAndConsulting/brand_research.png";
import ProductInsights from "../../../public/researchAndConsulting/product_insights.png";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "E2E Research Offerings | Unlock Market Potential with Data-Driven Insights",
  keywords:
    "E2E Research Market assessment Consumer research Sensory analysis Brand research New product development Data-driven insights Market trends Customer behavior Competitive advantage Product ideation Business recommendations Consumer insights Brand tracking Research-driven strategies Survey scripting / survey programming Confirmit / decipher / forsta / Qualtrics / dimensions / reporter / QPS / Data tables Data validation / data cleaning / Automated Data Checks / Survey Data Validation SPSS / Quantum / Wincross / Open ended coding Data processing Analytics Predictive Analytics Customized Reports Custom Dashboards",
  description:
    "Explore E2E’s research services, including market assessment, consumer research, new product development, sensory analysis, and brand research. Unlock market opportunities, gain actionable insights, and develop winning strategies with proven research designs tailored to your business needs.",
};

const OurServices = () => {
  return (
    <>
      <section className="services-banner banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left  ">
              <h1>SERVICES</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb hedding={""} activeUrl={"Services"} />
      {/*Description */}
      <section className="heading-sec light-gray-bg heading overflow-hidden pb-x padding-left-x">
        <div className="container-fluid offering">
          <div className="heading heading-sec res-head key-fr">
            <h2>Explore the deep research and insights for your business</h2>
            <div className="horizontal-row"></div>
          </div>
          <p>
            With E2E research offerings, brands and companies could derive
            valuable insights and business recommendations to unlock the full
            potential in the market. These offerings are configured with the
            right audience using optimized and proven research design that could
            nail down the business problem in a data driven approach along with
            comprehensive research results. To get more information, please
            click here or refer below list of research offerings.
          </p>
        </div>
      </section>
      {/*End */}
      {/*Market Assessment start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={MarketAssessment}
                alt={"Market Assessment"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Market Assessment</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Tapping into the right market to identify the new
                  opportunities and creating the relevant offerings will help
                  you to grow your business sustainably. E2E as a part of
                  process keeps examining the trends and consumer behaviour that
                  triggers any changes in the landscape of the competitive
                  market. With this, clients are well informed to position their
                  products in the markets and bring out the necessary
                  transformation, innovation or niche products and technologies
                  to cater the untapped space.
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <SalesMarketing className="img-box_brand" />
                    <h5>
                      Sales and Marketing <br />
                      Group
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Managemen className="img-box_brand" />
                    <h5>
                      Product
                      <br />
                      Owners/Managers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <CompanyStakeholder className="img-box_brand" />
                    <h5>
                      Company <br />
                      Stakeholders
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Industries className="img-box_brand" />
                    <h5>
                      Applicable to All <br />
                      Industries
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/market-assessment"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Consumer Research start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8">
              <div className="heading-sec ins-insg res-head">
                <h2>Consumer Research</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  To gain the competitive advantage, it’s important to know your
                  customers in-depth. However, to unlock the future
                  opportunities, a clear link of business offerings with
                  relevant customer needs must be established with help of
                  consumer research. By doing so, companies could position
                  themselves better in the market aligning with consumer trends
                  and changing dynamics of product consumption.
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <ConsumerInsights className="img-box img-box_brand" />
                    <h5>
                      Consumer Insights <br />
                      Decision Makers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Managemen className="img-box img-box_brand" />
                    <h5>
                      Product <br />
                      Owners/Managers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <CompanyStakeholder className="img-box img-box_brand" />
                    <h5>
                      Company <br />
                      Stakeholders
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Industries className="img-box img-box_brand" />
                    <h5>
                      Applicable to All <br />
                      Industries
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/consumer-research"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={ConsumerResearch}
                alt={"Consumer Research"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*New Product Development start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={NewProductDevelopmentesearch}
                alt={"New Product Developmentesearch"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>New Product Development</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  Business requires winning products or recipes to actively
                  engage with customer.
                </p>
                <p>
                  Covering the product from Ideation to Shelf is what we cover
                  in NPD research. To facilitate the research process, we can
                  liaise with your internal teams to gain understanding about
                  the product and brand, help them to refine the new ideas using
                  quick concept research. Finally, we could conduct detailed
                  research on the shortlisted concept to identify the winner in
                  the tested category.
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <ConsumerInsights className="img-box_brand" />
                    <h5>
                      Consumer Insights <br />
                      Decision Makers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Managemen className="img-box_brand" />
                    <h5>
                      Product <br />
                      Owners/Managers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <CompanyStakeholder className="img-box_brand" />
                    <h5>
                      Company <br />
                      Stakeholders
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Industries className="img-box_brand" />
                    <h5>
                      Applicable to All <br />
                      Industries
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/product-development"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Sensory Research start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8">
              <div className="heading-sec ins-insg res-head">
                <h2>Sensory Research</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  E2E provides comprehensive sensory research to evaluate
                  consumer products through the senses-sight, smell, touch, and
                  taste. Leveraging advanced technology, analytics, and survey
                  techniques, we deliver deep insights into flavour, texture,
                  and taste profiles for your products.
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <FoodAndBeverage className="img-box img-box_brand" />
                    <h5>
                      Food and Beverage <br /> (F&B) Companies
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Franchise className="img-box img-box_brand" />
                    <h5>
                      F&B <br /> Franchises
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <SkinCare className="img-box img-box_brand" />
                    <h5>
                      Personal and
                      <br /> Skincare Companies
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <PetFood className="img-box img-box_brand" />
                    <h5>
                      Pet Food <br /> Manufacturers
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/sensory-research"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={SensoryResearch}
                alt={"Sensory Research"}
                className="img-boxshadow"
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Brand Research start */}
      <section className="padding-left-x pb-x ">
        <div className="container-fluid">
          <div className="row mobile-column-revers mobile-column-revers-gap">
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img">
              <Image
                src={BrandResearch}
                alt={"Brand Research"}
                className="img-boxshadow"
                height={350}
              />
            </div>
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8  design-ins">
              <div className="heading-sec ins-insg res-head">
                <h2>Brand Research</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  In today’s competitive environment, brand has utmost
                  responsibility to listen in the consumer/stakeholder’s
                  feedback to stay competitive and to create differentiation in
                  business. To cater this, E2E offers the full spectrum of brand
                  research to evaluate and track your brand performance/ value
                  using the well-established E2E brand tracker.
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <ConsumerInsights className="img-box_brand" />
                    <h5>
                      Consumer Insights <br />
                      Decision Makers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Managemen className="img-box_brand" />
                    <h5>
                      Product <br />
                      Owners/Managers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <CompanyStakeholder className="img-box_brand" />
                    <h5>
                      Company <br />
                      Stakeholders
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/brand-research"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Consumer Research start */}
      <section className="padding-left-x pb-x light-gray-bg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-md-7  col-lg-8 col-xl-8 col-xxl-8">
              <div className="heading-sec ins-insg res-head">
                <h2>Product Insights</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inr-sec">
                <p>
                  We specialize in delivering cutting-edge marketing research
                  and insights for the financial services sector. In today’s
                  rapidly evolving financial landscape, staying ahead of the
                  curve requires more than intuition-it demands deep,
                  data-driven understanding of market trends, customer
                  behaviour…
                </p>
              </div>
              <div className="row box-card">
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center  hover-svg-blk">
                    <ConsumerInsights className="img-box img-box_brand" />
                    <h5>
                      Consumer Insights <br />
                      Decision Makers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Managemen className="img-box img-box_brand" />
                    <h5>
                      Product <br />
                      Owners/Managers
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <CompanyStakeholder className="img-box img-box_brand" />
                    <h5>
                      Company <br />
                      Stakeholders
                    </h5>
                  </div>
                </div>
                <div className=" col-xs-3 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                  <div className="box-sec service-blk d-flex flex-column  align-items-center hover-svg-blk">
                    <Industries className="img-box img-box_brand" />
                    <h5>
                      Applicable to All <br />
                      Industries
                    </h5>
                  </div>
                </div>
              </div>
              <Link
                href={"/services/product-insights"}
                className="read-more right-arrow-hover hover-line-effect read-margin"
              >
                READ MORE
                <RightArrow />
              </Link>
            </div>
            <div className="col-sm-4 col-md-5  col-lg-4 col-xl-4 col-xxl-4 mb-mobile industry-insights-img design-ins">
              <Image
                src={ProductInsights}
                alt={"Product Insights"}
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

export default OurServices;
