"use client";
import ProductBanner from "@/Component/ProductBanner";
import React from "react";
import Image from "next/image";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStarted from "@/Component/GetStarted";
import Header from "@/Component/Header";
import DataValidatorLogo from "../../../../public/homePage/technology/data_validator.svg";
import Spss from "../../../../public/dataValidator/howItWorks/spss.svg";
import AutomatedScript from "../../../../public/dataValidator/howItWorks/automated_script.svg";
import LogicalFlow from "../../../../public/dataValidator/howItWorks/logical_flow.svg";
import RejectionReport from "../../../../public/dataValidator/howItWorks/rejection_report.svg";
import AboutDataValidator from "../../../../public/dataValidator/about_daa_validator.png";
import keyFeaturesImg from "../../../../public/dataValidator/key_features_img.png";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";

import DvSlider1 from "../../../../public/dataValidator/topCarousel/dv_slider1.svg";
import DvSlider2 from "../../../../public/dataValidator/topCarousel/dv_slider2.svg";
import DvSlider3 from "../../../../public/dataValidator/topCarousel/dv_slider3.svg";

type ProductDataType = {
  image: any;
  classes: string;
  imageLogo?: any;
};
type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const DataValidator = () => {
  const Engame: BannerType = {
    header: "Data Validator",
    subHeader: "",
    logo: DataValidatorLogo,
    logoClass: "data-valiator-logo",
    // logoClass: "raven-logo",
  };

  const crouselImage: ProductDataType[] = [
    {
      image: DvSlider1,
      imageLogo: "",
      classes: "carousel-img-br",
    },
    {
      image: DvSlider2,
      imageLogo: "",
      classes: "carousel-img-br",
    },
    {
      image: DvSlider3,
      imageLogo: "",
      classes: "carousel-img-br",
    },
  ];
  return (
    <>
      <Header />
      <title>Data Validator Tool | Ensure Accurate and Reliable Data</title>
      <meta
        name="keywords"
        content="Data Validator, Data Validation Tool, SPSS Import, Automated Data Checks, API Integration, Rejection Reports, Data Accuracy, Data Cleaning, Data Analysis, Survey Data Validation, Predictive Analytics, Customized Reports"
      ></meta>
      <meta
        name="description"
        content="Streamline your data validation process with the Data Validator tool. Automatically detect inconsistencies, errors, and anomalies in datasets. Features include SPSS import, API integration, automated scripts, and customizable reports for efficient data checking.
"
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={Engame} />
      {/*End */}

      <Breadcrumb
        hedding={"Products "}
        urls="/products"
        activeUrl={"DataValidator"}
      />
      <div className="slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head two-linw-br">
                <h2>Ensuring Accuracy with Data</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Streamline your data validation process with our powerful Data
                Validation Tool, designed to simplify and enhance data accuracy.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 validator-slider left-padd-crousle">
              <ProductNewCarousel productData={crouselImage} />
            </div>
          </div>
        </div>
      </div>
      {/*Key Capabilities Start */}
      <section className="page-left-sec get-started-slm  pb-x slm-start pd-50 padding-left-x">
        <div className="container-fluid overflow-hidden">
          <div className="row d-flex justify-content-center justify-content-sm-center justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between">
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
              <div className="header-container heading-sec res-head">
                <h2>About Data Validator</h2>
                <div className="horizontal-row"></div>
              </div>
              <div>
                <p>
                  This innovative solution automatically identifies
                  inconsistencies, errors, and anomalies in your datasets,
                  ensuring your analysis is based on clean, reliable data. With
                  its user-friendly interface, the tool validates large datasets
                  efficiently and generates comprehensive rejection reports,
                  detailing issues for quick resolution.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size slm-get">
              <div className="ins-img img-shadow">
                <Image
                  src={AboutDataValidator}
                  alt="AboutData Validator"
                  className="gray-scale slm-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end */}

      {/* Key Feature */}

      <section className="key-capabilities  padding-left-x pb-x gray-background">
        <div className="container-fluid">
          <div className="row  mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box">
                <Image
                  src={keyFeaturesImg}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading heading-sec res-head">
                <h2>Key Features Includes </h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>SPSS file import</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>Automated scripts for quick validations</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>Smart functions for quick & smart checks</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>API integration for real time data checks</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>
                          Customized report results i.e. pre-defined templates
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
      <section className=" slm-start key-features-slm  pb-x overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>
              When choosing a survey data checking platform, you can consider
              things like
            </h2>
            <div className="horizontal-row"></div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Analysis Features</h5>
                  <p>
                    Whether you need basic tabulations or more advanced <br />{" "}
                    capabilities like predictive analytics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Reporting</h5>
                  <p>
                    Whether you want simple charts or full shareable dashboards
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Ease of Use</h5>
                  <p>How quickly you can get value out of the platform</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Integrations</h5>
                  <p>How easy it is to connect with other platforms</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 last-collumn-gap-mobile">
              <div className="d-flex right-arrow-hover arrow-sec">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Support</h5>
                  <p>
                    Whether you’re happy with online documentation or need a
                    more experienced team
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Pricing</h5>
                  <p>
                    Whether you want to pay per project or on a subscription
                    basis . Can you your own SAS subscription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*How It Works*/}
      <section className="pb-x overflow-hidden padding-left-x gray-background">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>How It Works</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap validator-work-sec">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ">
              <div className="how-work-blk research-box validtor-blk hover-svg-blk  svg-hover-stroke">
                <div className="setup-blk">Data Preparation</div>
                <Spss className="img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>Import SPSS</h5>
                  <h5>Connect Via API</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
              <div className="how-work-blk research-box validtor-blk hover-svg-blk  svg-hover-stroke">
                <div className="setup-blk">Rule Definition</div>
                <AutomatedScript className="img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>Automated Script</h5>
                  <h5>
                    Define Format Rules, Range Constraints, Mandatory Fields,
                    Custom Validations
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
              <div className="how-work-blk research-box validtor-blk hover-svg-blk  svg-hover-stroke">
                <div className="setup-blk">Validation Execution</div>
                <LogicalFlow className="img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>Field-Level Validation</h5>
                  <h5>Validate Relationships Between Fields</h5>
                  <h5>Generate Error Logs or Reports for Failed Records</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
              <div className="how-work-blk research-box validtor-blk hover-svg-blk ">
                <div className="setup-blk">Reporting and Correction</div>
                <RejectionReport className="img-box_brand" />
                <div className="hedding-blk-sec">
                  <h5>Report Errors</h5>
                  <h5>Data Correction</h5>
                  <h5>Revalidate Data</h5>
                  <h5>Sign-Off</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <GetStarted
        pageContent={"Data Validator"}
        subHedding={
          "Transform your surveys into engaging, interactive experiences with Gamification. Whether you’re looking to captivate participants, gather deeper insights, or streamline data collection, Gamification has you covered."
        }
      />
      {/*Main footer */}
    </>
  );
};

export default DataValidator;
