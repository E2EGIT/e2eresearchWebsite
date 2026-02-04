"use client";
import ProductBanner from "@/Component/ProductBanner";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStarted from "@/Component/GetStarted";
import DataPilot from "../../../../public/homePage/technology/data_pilot_logo.svg";

import Datapilot_slider1 from "../../../../public/dataPilot/topCarousel/datapilot_slider1.svg";
import Datapilot_slider2 from "../../../../public/dataPilot/topCarousel/datapilot_slider2.svg";
import Datapilot_slider3 from "../../../../public/dataPilot/topCarousel/datapilot_slider3.svg";

import AboutDataPilot from "../../../../public/dataPilot/about_data_pilot.png";
import KeyFeatures from "../../../../public/dataPilot/key_features.png";
import WhyChoose from "../../../../public/dataPilot/why_choose.png";
import DataPilotSurveyLink from "../../../../public/dataPilot/howItWorks/data_pilot_survey_link.svg";
import Simulation from "../../../../public/dataPilot/howItWorks/simulation.svg";
import LogicalFlow from "../../../../public/dataValidator/howItWorks/logical_flow.svg";
import RejectionReport from "../../../../public/dataValidator/howItWorks/rejection_report.svg";

import Header from "@/Component/Header";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";

type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const Data_Pilot = () => {
  const data_pilot: BannerType = {
    header: "Data-Pilot",
    subHeader: "",
    logo: DataPilot,
    logoClass: "data-pilot-logo",
  };

  const crouselImage: any[] = [
    {
      image: Datapilot_slider1,
      classes: "gamification-svg data-pilot-svg",
    },
    {
      image: Datapilot_slider2,
      classes: "gamification-svg data-pilot-svg",
    },
    {
      image: Datapilot_slider3,
      classes: "gamification-svg data-pilot-svg",
    },
  ];
  return (
    <>
      <Header />
      <title>Data Pilot</title>
      <meta
        name="keywords"
        content="survey filling, raw data generation, survey check with automation, logoc flow control."
      ></meta>
      <meta
        name="description"
        content="Performing comprehensive logical flow checks and error detection. It simulates all possible permutation and combination scenarios across survey links, making it ideal for testing and validating survey designs before deployment. "
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={data_pilot} />
      {/*End */}

      <Breadcrumb
        hedding={"Products "}
        urls="/products"
        activeUrl={"Data-Pilot"}
      />
      {/*end*/}
      <div className=" slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head">
                <h2>
                  Intelligent tool designed to autonomously fill online surveys{" "}
                </h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Performing comprehensive <b>logical flow checks</b> and{" "}
                <b>error detection</b>. It simulates all possible{" "}
                <b>permutation and combination scenarios</b> across survey
                links, making it ideal for testing and validating survey designs
                before deployment.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 pilot-slider left-padd-crousle">
              <ProductNewCarousel productData={crouselImage} />
            </div>
          </div>
        </div>
      </div>

      {/*Key Capabilities Start */}
      <section className="page-left-sec get-started-slm  pb-x slm-start pd-50 padding-left-x">
        <div className="container-fluid overflow-hidden">
          <div className="row d-flex justify-content-center justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
            {/* justify-content-center */}
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
              <div className="header-container heading-sec res-head">
                <h2>About Data Pilot</h2>
                <div className="horizontal-row"></div>
              </div>
              <div>
                <p>
                  Data-Pilot is a cutting-edge automation solution designed to
                  generate test data across multiple platforms with real
                  environment. Whether you’re utilizing leading survey tools
                  like ConfirmIT, QuestBack, Saw-Tooth, Decipher, Dimension or
                  developing a new survey platform that requires automated
                  testing with test data generation, Data-Pilot makes the
                  process seamless and efficient.
                </p>
                <p>
                  Harnessing advanced real-time technologies to simulate browser
                  behavior, Data-Pilot ensures precise and reliable testing. Its
                  user-friendly dashboard offers complete control and
                  transparency, making the testing experience intuitive and
                  streamlined.
                </p>
                <p>
                  From single-choice and multi-choice questions to open-ended
                  responses and complex grid formats, Data-Pilot effortlessly
                  captures a wide range of survey question types in logical
                  flow. Its customizable response generation ensures thorough
                  and dependable testing tailored to your specific needs.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size slm-get">
              <div className="ins-img img-shadow  data-pilot-img">
                <Image
                  src={AboutDataPilot}
                  alt="About Data Pilot"
                  className="gray-scale slm-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end */}
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
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Survey Automation Across Platforms</h5>
                        <p>
                          Currently supports the Top Survey platforms like
                          ConfirmIT, QuestBack, Saw-Tooth and Decipher with
                          wide-spread answer filling coverage. With an
                          customizable option for a New Entrant platforms as
                          well.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Customizable Answer Filling</h5>
                        <p>
                          Set specific defaults for example, questions like
                          “What is your gender?” to always select a
                          pre-determined option (e.g., “Female”). Further, the
                          similar response customization is allowed in the
                          Complex Grid questionnaires with pattern customization
                          as well.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Project Management</h5>
                        <p>
                          Easily set up multiple projects with unique names and
                          survey URLs, enabling seamless organization and
                          testing workflows.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Dynamic Question Handling</h5>
                        <p>Handle a variety of question types, including</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Single-Choice & Multi-Choice</h5>
                        <p>
                          Select specific options as defaults with skip options
                          for questions.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Grid & Multi-Grid Questions</h5>
                        <p>
                          Define patterns or customize responses for repeated
                          runs.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Open-Ended/Numeric Questions</h5>
                        <p>
                          Provide multiple input texts for randomized or
                          specific responses with skip options for questions.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover  arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Dashboard for Full Control</h5>
                        <p>
                          A user-friendly interface to configure default
                          answers, control the frequency of responses, view
                          survey-response statistics and manage survey settings.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover  arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Quota Checks / Least Fill Quota Checks</h5>
                        <p>
                          Manage desired completes & punches associated with
                          quota fill.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Randomized Answers</h5>
                        <p>
                          When no defaults are provided, Data-Pilot
                          intelligently fills out random answers to ensure
                          thorough testing.
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
              <div className="how-work-blk research-box hover-svg-blk ">
                <div className="setup-blk">Survey Link Analysis</div>
                <DataPilotSurveyLink className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    Analyzing the survey link, loading all questions, paths, and
                    logic structures.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box hover-svg-blk ">
                <div className="setup-blk">Scenario Simulation</div>
                <Simulation className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    Data Pilot generates permutation and combination scenarios
                    to simulate diverse user responses.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box hover-svg-blk svg-hover-stroke">
                <div className="setup-blk">
                  Logical Flow and Error Validation
                </div>
                <LogicalFlow className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    Broken skips or incorrect branching logic. Missing
                    validations or redundant questions. Inconsistencies in
                    question flow.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box hover-svg-blk ">
                <div className="setup-blk">
                  Reporting and Debugging Insights
                </div>
                <RejectionReport className="img-box img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>
                    These reports guide debugging and fixing survey issues
                    before deployment.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Data-Pilot */}

      <section className="key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse ">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box img-blk-height">
                <Image
                  src={WhyChoose}
                  alt="why choose"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Why Choose Data-Pilot?</h2>
                <div className="horizontal-row"></div>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Comprehensive Survey Testing</h5>
                        <p>
                          Covers all question types with detailed customization
                          options.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Project-Centric Approach</h5>
                        <p>
                          Manage multiple surveys efficiently with organized
                          project settings.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Automation at Its Best</h5>
                        <p>
                          Save time and effort with robust automation tools for
                          consistent testing.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>User-Friendly Dashboard</h5>
                        <p>
                          Tailor your surveys without technical expertise using
                          an intuitive interface.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Scalable and Flexible</h5>
                        <p>
                          Whether for a simple survey or a complex grid system,
                          Data-Pilot adapts to your needs.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-World Accuracy</h5>
                        <p>
                          Simulate responses and generate realistic data for
                          deeper insights.
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
        pageContent={"Datapilot"}
        subHedding={
          "Take control of your survey testing with Data-Pilot. From automating repetitive tasks to ensuring precise testing, Data-Pilot is your ultimate companion to pilot survey quality assurance to the next-level. Explore the potential of smart survey testing, start using Data-Pilot today!"
        }
      />
    </>
  );
};

export default Data_Pilot;
