import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Image from "next/image";
import Link from "next/link";
import Managers from "../../../../public/researchAndConsulting/brandResearch/managers.svg";
import Stakeholders from "../../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../../public/researchAndConsulting/brandResearch/industries.svg";
import OurExprience from "../../../../public/researchAndConsulting/brandResearch/ourExprience.jpg";
import ModalOpener from "@/Component/ModalOpener";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Research",
  keywords:
    "Brand Awareness Research, Brand Funnel Assessment, Brand Tracking Research, Campaign Evaluation with pre-post tracking, Brand Communication, Brand Positioning, Brand Messaging, Net Promoter Score NPS Research",
  description:
    "In today’s competitive environment, brand has utmost responsibility to listen in the consumer/stakeholder’s feedback to stay competitive and to create differentiation in business. To cater this, E2E offers the full spectrum of brand research to evaluate and track your brand performance/ value using the well-established E2E brand tracker.",
};

const BrandResearch = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="brand-research banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec">
              <h1>BRAND RESEARCH</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"Brand Research"}
      />
      {/*breand research start */}
      <section className="research-consulting light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head ">
            <h2>Offerings</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="offering research-font-size research-font-lineheight">
            <p>
              In today’s competitive environment, brand has utmost
              responsibility to listen in the consumer/stakeholder’s feedback to
              stay competitive and to create differentiation in business. To
              cater this, E2E offers the full spectrum of brand research to
              evaluate and track your brand performance/ value using the
              well-established E2E brand tracker.
            </p>
            <p>
              By using our advance technology, brand analytics and customized
              survey techniques, we can create deep insights on brand awareness
              and brand importance among the competitive brands.
            </p>
            <p>
              In our work with clients, we have covered the following brand
              research-
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Brand Awareness Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Brand Funnel Assessment</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Brand Tracking Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Campaign Evaluation with pre-post tracking</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec">
              <RightArrow />
              <div className="text-container">
                <p>Brand Communication</p>
                <ul className="list sec-paragraph">
                  <li className="disc-bullet">
                    <p>Brand Positioning</p>
                  </li>
                  <li className="disc-bullet">
                    <p>Brand Messaging</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph">
              <RightArrow />
              <div className="text-container">
                <p>Net Promoter Score NPS Research</p>
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
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Managers className="img-box img-box_brand" />
                <h5>Brand Owners/Managers</h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Stakeholders className="img-box img-box_brand" />
                <h5>Company Stakeholders</h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Industries className="img-box img-box_brand" />
                <h5>Applicable to All Industries</h5>
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
            <div className="header-container research-font-weight res-head">
              <h2>Our Experience</h2>
              <div className="horizontal-row"></div>
            </div>
            <p>
              E2E team has created the highly relevant solutions in the area of
              brand research. This may help to evolve your brand GTM strategy by
              identifying the clear messaging that can make your brand stand out
              from the competition. In the last of couple of years, we have
              worked with many clients for the brand research to enable them
              with the right brand positioning. For example, recently the team
              have concluded a F&B brand research wherein the research could
              identify a new challenger brand that has gained maximum awareness
              in the category and at the same time also possessed a high level
              of customer satisfaction. The drivers for the category were
              established using ML technique to show insights on brand gaps and
              opportunities areas to be addressed.
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
        <Link href={"/services/consumer-research"}>Consumer Research</Link>
        <Link href={"/services/product-development"}>
          New Product Development
        </Link>
        <Link href={"/services/sensory-research"}>Sensory Research</Link>
        <Link href={"/services/product-insights"}>Product Insights</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default BrandResearch;
