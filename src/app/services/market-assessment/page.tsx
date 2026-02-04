import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import ModalOpener from "@/Component/ModalOpener";
import SalesMarketing from "../../../../public/researchAndConsulting/marketAssessment/sales_and_marketing.svg";
import Managers from "../../../../public/researchAndConsulting/brandResearch/managers.svg";
import Stakeholders from "../../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../../public/researchAndConsulting/brandResearch/industries.svg";
import OurExprience from "../../../../public/researchAndConsulting/marketAssessment/ourexprience_new.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Assessment",
  keywords:
    "Market Trends, Demand Forecasting using ML and Analytics, Demand Research Competition Analysis, Benchmarking Reports",
  description:
    "Tapping into the right market to identify the new opportunities and creating the relevant offerings will help you to grow your business sustainably. E2E as a part of process keeps examining the trends and consumer behaviour that triggers any changes in the landscape of the competitive market. ",
};

const MarketAssessment = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="market-assessment banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>MARKET ASSESSMENT</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"Market Assessment"}
      />
      {/*market assesment start */}
      <section className="research-consulting light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Offerings</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="research-font-size offering">
            <p>
              Tapping into the right market to identify the new opportunities
              and creating the relevant offerings will help you to grow your
              business sustainably. E2E as a part of process keeps examining the
              trends and consumer behaviour that triggers any changes in the
              landscape of the competitive market. With this, clients are well
              informed to position their products in the markets and bring out
              the necessary transformation, innovation or niche products and
              technologies to cater the untapped space.
            </p>
            <p>
              Detailed insights are created in collaboration with client to
              cater to specific needs of research. Our 3600 Research approach as
              outlined below will enable the deep understanding of the market,
              competition and your brand bringing out the fresh ideas and new
              line of business to the discussion board.
            </p>

            <p>
              In our work with clients, E2E has delivered the market assessment
              in the following areas –
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Market Trends</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Demand Forecasting using ML and Analytics</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Demand Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Competition Analysis</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph">
              <RightArrow />
              <div className="text-container">
                <p>Benchmarking Reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Main audience start */}
      <section className="padding-left-x pb-x">
        <div className="container-fluid">
          <div className="heading-sec research-font-weight res-head">
            <h2>Audience</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <SalesMarketing className="img-box img-box_brand" />
                <h5>
                  Sales and Marketing <br />
                  Group
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Managers className="img-box img-box_brand" />
                <h5>
                  Product <br />
                  Owners/Managers
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Stakeholders className="img-box img-box_brand" />
                <h5>
                  Company <br />
                  Stakeholders
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Industries className="img-box img-box_brand" />
                <h5>
                  Applicable to All <br />
                  Industries
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Main audience End*/}
      {/*Our experience*/}
      <section className="page-left-sec gray-background overflow-hidden">
        <div className="row benefit-slm heading-sec res-exprience">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 py-5_5  img-sec-left research-font-size research-font-lineheight">
            <div className="header-container heading-sec research-font-weight res-head">
              <h2>Our Experience</h2>
              <div className="horizontal-row"></div>
            </div>

            <p>
              While working with internal team of financial company, we were
              asked to detail out the trends in technology and automation
              services used in M & A process activities. For which E2E has
              created set of benchmarking reports covering each trend in detail
              with clear recommendation on client’s business problem. Similarly
              for a healthcare client, we were engaged to check out the
              performance of new product portfolio with doctors and patients and
              eventually measuring the possible cannibalization on the current
              offerings. Team has also experienced in the analytical model that
              could be used for forecasting the business work and related
              products with certain assumptions.
            </p>
            <span>
              To know more about the services, Please click{" "}
              <ModalOpener text={"here"} /> or send us the request form.
            </span>

            {/* <h5>SLM is the perfect tool for</h5> */}
          </div>
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6 image-size right-image-serv">
            <Image
              src={OurExprience}
              alt="Our Exprience"
              className="gray-scale left-img-clip"
            />
          </div>
        </div>
      </section>
      {/*End */}
      {/*Our experience*/}
      <section className="res-urls padding-left-x pb-x d-flex">
        <Link href={"/services/consumer-research"}>Consumer Research</Link>
        <Link href={"/services/product-development"}>
          New Product Development
        </Link>
        <Link href={"/services/sensory-research"}>Sensory Research</Link>
        <Link href={"/services/brand-research"}>Brand Research</Link>
        <Link href={"/services/product-insights"}>Product Insights</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default MarketAssessment;
