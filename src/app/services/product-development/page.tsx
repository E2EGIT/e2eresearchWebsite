import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Image from "next/image";
import Link from "next/link";
import ConsumerInsights from "../../../../public/researchAndConsulting/consumerResearch/consumerinsights.svg";
import Managers from "../../../../public/researchAndConsulting/brandResearch/managers.svg";
import Stakeholders from "../../../../public/researchAndConsulting/brandResearch/stakeholders.svg";
import Industries from "../../../../public/researchAndConsulting/brandResearch/industries.svg";
import OurExprience from "../../../../public/researchAndConsulting/productDevelopment/ourexprience.jpg";
import ModalOpener from "@/Component/ModalOpener";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Product Development (NPD) Research",
  keywords:
    "Idea Screening, Concept Testing and Validation, Product Testing, Pricing Research, Qualitative Research Solutions, NPD, product research",
  description:
    "Covering the product from Ideation to Shelf is what we cover in NPD research. To facilitate the research process, we can liaise with your internal teams to gain understanding about the product and brand, help them to refine the new ideas using quick concept research. Finally, we could conduct detailed research on the shortlisted concept to identify the winner in the tested category.",
};

const ProductDevelopment = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="product-development banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left   heading-sec ">
              <h1>NEW PRODUCT DEVELOPMENT (NPD) RESEARCH</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"New Product Development (NPD) Research"}
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
              Business requires winning products or recipes to actively engage
              with customer.
            </p>
            <p>
              Covering the product from Ideation to Shelf is what we cover in
              NPD research. To facilitate the research process, we can liaise
              with your internal teams to gain understanding about the product
              and brand, help them to refine the new ideas using quick concept
              research. Finally, we could conduct detailed research on the
              shortlisted concept to identify the winner in the tested category.
            </p>
            <p>
              Along with product research, we could identify the optimum price
              points for your product launch and its likelihood of market uptake
              using well-known PSM pricing technique. These specialized ways
              could help brand to know the future potential without much
              investment in the actual supply chain.
            </p>
            <p>
              In our work with clients, E2E has delivered the NPD solutions in
              the following areas-
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Idea Screening</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Concept Testing and Validation</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Product Testing</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Pricing Research</p>
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
          <div className=" heading-sec research-font-weight  res-head">
            <h2>Audience</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <ConsumerInsights className="img-box img-box_brand" />
                <h5>
                  Consumer Insights <br />
                  Decision Makers
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
              In the evolution of new product, E2E has collaborated with brand
              and business in their innovation journey to identify the potential
              products that could enhance the brand share and customer reach in
              the target market. Team has delivered the NPD research with many
              quick-service restaurants, food and beverage clients, pet foods
              companies and other consumer products.
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
        <Link href={"/services/sensory-research"}>Sensory Research</Link>
        <Link href={"/services/brand-research"}>Brand Research</Link>
        <Link href={"/services/product-insights"}>Product Insights</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default ProductDevelopment;
