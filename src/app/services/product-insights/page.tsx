import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Image from "next/image";
import Link from "next/link";
import ConsumerInsights from "../../../../public/researchAndConsulting/consumerResearch/consumerinsights.svg";
import Managers from "../../../../public/researchAndConsulting/brandResearch/managers.svg";
import Stakeholders from "../../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../../public/researchAndConsulting/brandResearch/industries.svg";

import OurExprience from "../../../../public/researchAndConsulting/productInsights/ourexprience.jpg";
import ModalOpener from "@/Component/ModalOpener";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Insights",
  keywords:
    "Features Testing, Barrier to Adoption, Improvement Needed, Packaging Research, Pricing Research",
  description:
    "To get the product insights in line with consumer needs, product team not only requires a good design of product with right features but also leverage the host of marketing research to build the right data, insight and analysis around the product. ",
};

const ProductInsights = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="product-insights banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>PRODUCT INSIGHTS</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"Product Insights"}
      />
      {/*sensory start */}
      <section className="research-consulting light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Offerings</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="research-font-size research-font-lineheight offering">
            <p>
              Understanding the product from consumer perspective is paramount
              for a brand to effectively navigate in today’s complex, fragmented
              marketing landscape.
            </p>
            <p>
              To get the product insights in line with consumer needs, product
              team not only requires a good design of product with right
              features but also leverage the host of marketing research to build
              the right data, insight and analysis around the product.
            </p>
            <p>
              With a set of qualitative and quantitative research and testing,
              E2E could offers data-oriented product insights that are outcome
              from asking the right questions, measuring the product experience
              and creating the well-researched hypothesis on your product.
            </p>
            <p>
              In our work with clients, E2E has delivered the product research
              in the following areas-
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Features Testing</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Barrier to Adoption</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Improvement Needed</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Packaging Research</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph  quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Pricing Research</p>
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
                <ConsumerInsights className="img-box img-box_brand" />
                <h5>
                  Consumer Insights <br />
                  Decision Makerss
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
            <div className="header-container research-font-weight res-head">
              <h2>Our Experience</h2>
              <div className="horizontal-row"></div>
            </div>

            <p>
              While working with product insights team of major CPG companies
              and other big MR consulting agencies, we have showcased our
              ability to design, build and deliver the product research bringing
              out the effective product narratives for our clients. Team at E2E
              has also used well-known research techniques like maximum
              difference scale and conjoint modelling to deliver the market
              simulations in contrast to any product improvement from the
              current state.
            </p>
            <span>
              To know more about the services, Please click{" "}
              <ModalOpener text={"here"} /> or send us the request form.
            </span>
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
        <Link href={"/services/brand-research"}>Brand Research</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default ProductInsights;
