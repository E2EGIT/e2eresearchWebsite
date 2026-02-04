import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Image from "next/image";
import Link from "next/link";
import ConsumerInsights from "../../../../public/researchAndConsulting/consumerResearch/consumerinsights.svg";
import Managers from "../../../../public/researchAndConsulting/brandResearch/managers.svg";
import Stakeholders from "../../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../../public/researchAndConsulting/brandResearch/industries.svg";
import OurExprience from "../../../../public/researchAndConsulting/consumerResearch/ourexprience.jpg";
import ModalOpener from "@/Component/ModalOpener";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Research",
  keywords:
    "consumer Research, Segmentation Research, Customer Journey, Customer satisfaction and NPS Measurement, Qualitative Research Solutions",
  description:
    "To gain the competitive advantage, it’s important to know your customers in-depth. However, to unlock the future opportunities, a clear link of business offerings with relevant customer needs must be established with help of consumer research. By doing so, companies could position themselves better in the market aligning with consumer trends and changing dynamics of product consumption.",
};

const ConsumerResearch = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="consumer-research banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>CONSUMER RESEARCH</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"Consumer Research"}
      />
      {/*consumer research start */}
      <section className="research-consulting light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Offerings</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="brand-hedder offering research-font-size research-font-lineheight">
            <p>
              To gain the competitive advantage, it’s important to know your
              customers in-depth. However, to unlock the future opportunities, a
              clear link of business offerings with relevant customer needs must
              be established with help of consumer research. By doing so,
              companies could position themselves better in the market aligning
              with consumer trends and changing dynamics of product consumption.
            </p>
            <p>
              In this space, E2E has worked with top consumer brands delivering
              the research experience and highly solutions in the following
              areas-
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>consumer Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Segmentation Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Customer Journey</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Customer satisfaction and NPS Measurement</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Qualitative Research Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Main audience start */}
      <section className="padding-left-x pb-x">
        <div className="container-fluid">
          <div className="heading-sec  research-font-weight res-head">
            <h2>Audience</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <ConsumerInsights className="img-box img-box_brand" />
                <h5>
                  Consumer Insights <br />
                  Decision makers
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Managers className="img-box img-box_brand" />
                <h5>
                  Brand <br />
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
              Team at E2E has developed the consumer surveys with global brands
              that could answer the 5Ws of your product usage-what, when, why,
              with whom and where along with deep insights on brand drivers
              including the identification of any latent segments that are still
              untapped with your brand offerings. The solutions created by us
              was consumed at each level of company starting from research
              analyst to consumer insights directors firming up their product
              and strategy in the business and delivering excellent value to all
              stakeholders.
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
        <Link href={"/services/market-assessment"}>Market Assessment</Link>
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

export default ConsumerResearch;
