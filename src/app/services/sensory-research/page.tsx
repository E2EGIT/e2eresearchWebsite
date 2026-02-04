import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Image from "next/image";
import Link from "next/link";
import FoodAndBeverage from "../../../../public/researchAndConsulting/sensoryResearch/foodandbeverage.svg";
import Franchise from "../../../../public/researchAndConsulting/sensoryResearch/franchise.svg";
import SkinCare from "../../../../public/researchAndConsulting/sensoryResearch/skincare.svg";
import PetFood from "../../../../public/researchAndConsulting/sensoryResearch/petfood.svg";

import Collage from "../../../../public/researchAndConsulting/sensoryResearch/collage.png";

import Sensory_Test from "../../../../public/researchAndConsulting/sensoryResearch/sensory_test.png";
import OurExprience from "../../../../public/researchAndConsulting/sensoryResearch/sensory_our.jpg";
import ModalOpener from "@/Component/ModalOpener";
import { Metadata } from "next";
import WorldMap from "@/Component/WorldMap";

export const metadata: Metadata = {
  title: "Sensory Research",
  keywords:
    "Central Location Testing (CLTs), Home User Testing (HUTs), Sensory Panels with Food Experts, Qualitative Research on Consumer Products, Focus Groups, In-Depth Interviews with Consumers or Food Experts ",
  description:
    "E2E provides comprehensive sensory research to evaluate consumer products through the senses-sight, smell, touch, and taste. Leveraging advanced technology, analytics, and survey techniques, we deliver deep insights into flavour, texture, and taste profiles for your products.",
};

const SensoryResearch = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="sensory-research banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left  heading-sec">
              <h1>SENSORY RESEARCH</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb
        hedding={"Services"}
        urls="/services"
        activeUrl={"Sensory Research"}
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
              E2E provides comprehensive sensory research to evaluate consumer
              products through the senses-sight, smell, touch, and taste.
              Leveraging advanced technology, analytics, and survey techniques,
              we deliver deep insights into flavour, texture, and taste profiles
              for your products.
            </p>
            <p>
              Our research is ready for application in the following formats-
            </p>
          </div>
          <div className="res-offering-bullet">
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Central Location Testing (CLTs)</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Home User Testing (HUTs)</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
              <RightArrow />
              <div className="text-container">
                <p>Sensory Panels with Food Experts</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph">
              <RightArrow />
              <div className="text-container">
                <p>Qualitative Research on Consumer Products</p>
                <ul className="list sec-paragraph">
                  <li className="disc-bullet top-bullet">
                    <p>Focus Groups</p>
                  </li>
                  <li className="disc-bullet in-dep-bullet">
                    <p>In-Depth Interviews with Consumers or Food Experts</p>
                  </li>
                </ul>
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
                <FoodAndBeverage className="img-box img-box_brand" />
                <h5>
                  Food and Beverage <br />
                  (F&B) Companies
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <Franchise className="img-box img-box_brand" />
                <h5>F&B Franchises</h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <SkinCare className="img-box img-box_brand" />
                <h5>
                  Personal and Skincare <br />
                  Companies
                </h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec research-box d-flex flex-column  align-items-center hover-svg-blk">
                <PetFood className="img-box img-box_brand" />
                <h5>
                  Pet Food <br />
                  Manufacturers
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
              E2E has developed custom, highly relevant solutions in sensory
              research. These solutions can help you evolve your product
              strategy by exploring new concepts in existing markets through
              comparative evaluations with benchmarks. They can also support
              refining your current product strategy to boost in-store revenue.
              We have assisted F&B clients in refining product claims and
              ensuring brand alignment for new ideas, allowing brand positioning
              to stay consistent with new product launches.
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
      {/* Sensory test */}
      <section className="page-left-sec  padding-left-x pb-x">
        <div className="container-fluid overflow-hidden">
          <div className="row d-flex mobile-col-reverse row-gap-5">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size img-get">
              <div className="ins-img img-shadow">
                <Image
                  src={Sensory_Test}
                  alt="Sensory Test Facilities"
                  className="img-boxshadow"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 sec-paragraph design-ins">
              <div className="header-container heading-sec res-head">
                <h2>Sensory Test Facilities</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Sensory Research is specialized market research primarily meant
                for food and consumer products. Data could be collected for a
                variety of sensory experiences from pre-recruit respondents or
                food experts to gain valuable insights for further product
                development, validation and its refinement. This type of sensory
                research on current products or NPDs helps companies and brands
                to identify the winning product or combination out of multiple
                new concepts ideated with product innovation team at client's
                end.
              </p>
              <p>
                At E2E we offer full-fledged sensory test on consumer products
                with our state-of-the-art food testing services to collect the
                sensory data. For benchmarking, a competitive product could also
                be tested along with your current product, modified or new
                product formulation generating clear recommendation on the
                optimization needed in the product.
              </p>
              <p>
                Additionally in sensory we cover both research formats either
                with quantitative (online) or qualitative (in person or focus
                group) for in depth analysis of consumer behavior and reaction
                to concepts and stimuli.
              </p>

              <div className="prdocut-head">
                <h5>Products We Covered in Our Sensory Research Facilities?</h5>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Fast Foods</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Hot and Cold Beverages</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Sauces</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Cookies</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Chocolate</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Packaged Items</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Personal Care and Cosmetics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End*/}

      {/*End*}
      {/* Collage start */}
      <section className="page-left-sec overflow-hidden  padding-left-x pb-x">
        <div className="container-fluid">
          <div className="collage-sec">
            <div className="can-benfit res-head">
              <h2>E2E India Facility</h2>
              <div className="horizontal-row"></div>
            </div>
            <Image src={Collage} alt="collage" />
          </div>
        </div>
      </section>
      {/* End */}
      {/*Region*/}
      <section className="page-left-sec  padding-left-x pb-x light-gray-bg">
        <div className="container-fluid overflow-hidden map-sensory">
          <div className="can-benfit res-head">
            <h2>Regions covered for conducting Sensory Research</h2>
            <div className="horizontal-row"></div>
          </div>

          <WorldMap />
          {/* <WorldMap className="world-map-svg" /> */}
        </div>
      </section>
      {/*End*/}
      {/*Our experience*/}
      <section className="res-urls padding-left-x pb-x d-flex sensory-sec">
        <Link href={"/services/market-assessment"}>Market Assessment</Link>
        <Link href={"/services/consumer-research"}>Consumer Research</Link>
        <Link href={"/services/product-development"}>
          New Product Development
        </Link>
        <Link href={"/services/brand-research"}>Brand Research</Link>
        <Link href={"/services/product-insights"}>Product Insights</Link>
      </section>
      {/*Main footer */}
    </>
  );
};

export default SensoryResearch;
