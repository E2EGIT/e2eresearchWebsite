"use client";
import ProductBanner from "@/Component/ProductBanner";
import Image, { StaticImageData } from "next/image";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStarted from "@/Component/GetStarted";
import ResqLogo from "../../../../public/homePage/technology/resQ_Logo.svg";

import ResQ_Slider1 from "../../../../public/resQ/topCarousel/resQ_Slider1.svg";
import ResQ_Slider2 from "../../../../public/resQ/topCarousel/resQ_Slider2.svg";
import ResQ_Slider3 from "../../../../public/resQ/topCarousel/resQ_Slider3.svg";
import ResQ_Slider4 from "../../../../public/resQ/topCarousel/resQ_Slider4.svg";

import WelcomeResQ from "../../../../public/resQ/welcome_res_q.png";
import KeyFeatures from "../../../../public/resQ/key_features.png";
import WhyChoose from "../../../../public/resQ/why_choose.png";

import Integration from "../../../../public/resQ/howItWorks/integration.svg";
import DataCollection from "../../../../public/resQ/howItWorks/data_collection.svg";
import QualityScore from "../../../../public/resQ/howItWorks/quality_score.svg";

import RejectionReport from "../../../../public/dataValidator/howItWorks/rejection_report.svg";
import Header from "@/Component/Header";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";


type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const resQ = () => {
  const resQ: BannerType = {
    header: "resQ",
    subHeader: "",
    logo: ResqLogo,
    logoClass: "resq-logo",
  };

  const crouselImage: any[] = [
    {
      image: ResQ_Slider1,
      classes: "gamification-svg req-slider",
    },
    {
      image: ResQ_Slider2,
      classes: "gamification-svg req-slider",
    },
    {
      image: ResQ_Slider3,
      classes: "gamification-svg req-slider",
    },
    {
      image: ResQ_Slider4,
      classes: "gamification-svg req-slider",
    },
  ];
  return (
    <>
      <Header />
      <title>Resq</title>
      <meta
        name="keywords"
        content="DFP , Digital fingerprinting, IP check, duplicate check, unique respondents. Quality score, data quality"
      ></meta>
      <meta
        name="description"
        content="Ensure respondent authenticity with instant evaluation using advanced parameters such as Local IP, device fingerprint, cookies, and local storage. These tools provide reliable insights into user identity, preventing fraudulent responses and ensuring data integrity. Streamline verification processes, enhance security, and make confident decisions with this powerful, data-driven approach to user validation and response authentication."
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={resQ} />
      {/*End */}

      <Breadcrumb hedding={"Products "} urls="/products" activeUrl={"resQ"} />
      {/*end*/}
      <div className=" slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head">
                <h2>Digital Fingerprinting and Quality Monitoring Tool</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                An advanced solution that integrates digital fingerprinting to
                uniquely identify respondents based on their device and browser
                attributes. It simultaneously monitors <b>quality scores</b> by
                analyzing fraudulent entries, duplicate responses, and
                low-quality data, providing reliable and accurate survey
                results.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 req-slider left-padd-crousle">
              <ProductNewCarousel productData={crouselImage} />
            </div>
          </div>
        </div>
      </div>

      {/*Welcome to resQ Start */}
      <section className="page-left-sec get-started-slm  pb-x slm-start pd-50 padding-left-x">
        <div className="container-fluid overflow-hidden">
          <div className="row d-flex justify-content-center justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
            {/* justify-content-center */}
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 sec-paragraph">
              <div className="header-container heading-sec res-head">
                <h2>Empowering Market Research with Authentic Responses</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="heading-sec benefit-slm">
                <h5>What is resQ?</h5>
              </div>
              <p>
                resQ is a next-generation SaaS-based portal designed for market
                research professionals. By applying smart digital
                fingerprinting, resQ ensures the quality and authenticity of
                survey respondents. It’s your all-in-one tool to streresQ is a
                next-generation SaaS-based portal designed for market research
                professionals. By applying smart digital fingerprinting, resQ
                ensures the quality and authenticity of survey respondents. It’s
                your all-in-one tool to streamline survey quality, eliminate
                duplicity, and generate reliable data insights real time.amline
                surveys, eliminate duplicity, and generate reliable data
                insights.
              </p>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size slm-get">
              <div className="ins-img img-shadow">
                <Image
                  src={WelcomeResQ}
                  alt="Welcome ResQ"
                  className="gray-scale slm-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end */}
      {/*Key Features Start */}
      <section className="key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={KeyFeatures}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Key Features</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex right-arrow-hover arrow-sec  blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-Time ResQ Scoring</h5>
                        <p>
                          Evaluate respondent authenticity instantly using
                          asscociated parameters.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec  blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Easy-to-Use Interface</h5>
                        <p>
                          Configure settings, manage projects, and generate
                          scripts without the hassle.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec  blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Advanced Data Insights</h5>
                        <p>
                          Access comprehensive dashboards and reports to monitor
                          survey quality.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec  blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Seamless Integration</h5>
                        <p>
                          Integrates effortlessly with your existing survey
                          platforms via API for real-time data exchange.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec  blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Scalable SaaS Platform</h5>
                        <p>
                          Built for survey companies and internal teams alike,
                          resQ grows with your business.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Filter Respondents</h5>
                        <p>
                          Filter respodents based on region, device, duration
                          etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}

      {/*How It Works*/}
      <section className="slm-start key-features-slm  pb-x overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>How It Works</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box  hover-svg-blk">
                <div className="setup-blk">Integration</div>
                <Integration className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    Embedded within the survey platform to activate
                    fingerprinting when a respondent opens the link.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box  hover-svg-blk">
                <div className="setup-blk">
                  Data Collection & Fingerprinting
                </div>
                <DataCollection className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>The tool collects unique device and attributes.</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box  hover-svg-blk">
                <div className="setup-blk">Quality Scoring</div>
                <QualityScore className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    The tool assigns a quality score to each response. Provides
                    dynamic scoring dashboards.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box  hover-svg-blk">
                <div className="setup-blk">Fraud Detection and Reporting</div>
                <RejectionReport className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    Generates detailed quality reports for decision-makers to
                    analyze and act upon.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}

      {/* Why Choose resQ? */}
      <section className="key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={WhyChoose}
                  alt="Why Choose"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Why Choose resQ?</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow ">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Boost Data Accuracy</h5>
                        <p>Identify and exclude fraudulent respondents.</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow ">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Save Time and Resources</h5>
                        <p>Automate quality checks with an intuitive system.</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Tailored for Market Research</h5>
                        <p>
                          Designed specifically for the challenges you face.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <GetStarted
        pageContent={"resQ"}
        subHedding={
          "Experience the future of survey quality assurance. Sign up for a free demo and see how resQ can transform your market research process."
        }
      />
    </>
  );
};

export default resQ;
