"use client";
import Image from "next/image";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStartedSLM from "../../../../public/slm/getStartedSLM.svg";
import ChooseSLM from "../../../../public/slm/why_choose_slm/chooseSLM.png";
import Efficiency_icon from "../../../../public/slm/keyFeatures/efficiency_icon.svg";
import DataQuality from "../../../../public/slm/keyFeatures/dataQuality_.svg";
import Insights from "../../../../public/slm/keyFeatures/insights_.svg";
import Benefit from "../../../../public/slm/benefit.png";
import SLMLogo from "../../../../public/slm/slm_dadrk_logo.svg";

import HomeSVG from "../../../../public/slm/topCarousel/home_screen.svg";
import ProjectList from "../../../../public/slm/topCarousel/project_list.svg";
import LinkManagement from "../../../../public/slm/topCarousel/link_management.svg";
import Messages from "../../../../public/slm/topCarousel/messages.svg";
import DfpSettings from "../../../../public/slm/topCarousel/dfp_settings.svg";

import LinkGeneration from "../../../../public/slm/work/link_generation.svg";
import LinkDistribution from "../../../../public/slm/work/link_distribution.svg";
import LinkMonitoring from "../../../../public/slm/work/link_monitoring.svg";

import ProductBanner from "@/Component/ProductBanner";
import GetStarted from "@/Component/GetStarted";
import SLMRippleVideo from "@/Component/SLMRippleVideo";
import Header from "@/Component/Header";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";

type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};
export default function SLM() {
  const crouselImage: any[] = [
    {
      image: HomeSVG,
      classes: "gamification-svg slm-img-blk",
    },
    {
      image: ProjectList,
      classes: "gamification-svg slm-img-blk",
    },
    {
      image: LinkManagement,
      classes: "gamification-svg slm-img-blk",
    },
    {
      image: Messages,
      classes: "gamification-svg slm-img-blk",
    },
    {
      image: DfpSettings,
      classes: "gamification-svg slm-img-blk",
    },
  ];

  const slmBannerData: BannerType = {
    header: "SURVEY LINK MANAGEMENT",
    subHeader: "",
    logo: SLMLogo,
    logoClass: "slm-main-logo",
  };
  return (
    <>
      <Header />
      <title>SLM</title>
      <meta
        name="keywords"
        content="Sample management, unique links, data collection with quality, sample partners."
      ></meta>
      <meta
        name="description"
        content="Managing survey links effectively ensuring a smooth respondent experience and accurate data collection. Maximize survey effectiveness with just a few clicks. Access real time visual insights, monitor quality metrics easily, and stay in full control of survey progress."
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={slmBannerData} />
      {/*End */}
      <Breadcrumb hedding={"Products"} urls="/products" activeUrl={"SLM"} />
      {/* End */}
      <div className=" slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head">
                <h2>Quality & Effective Data Collection</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Managing survey links effectively ensuring a smooth respondent
                experience and accurate data collection. Maximize survey
                effectiveness with just a few clicks.
              </p>
              <p>
                Access real time visual insights, monitor quality metrics
                easily, and stay in full control of survey progress.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 slm-crousle left-padd-crousle">
              <ProductNewCarousel productData={crouselImage} />
            </div>
          </div>
        </div>
      </div>
      {/*Get Started with SLM Start */}
      <section className="page-left-sec get-started-slm slm-start pd-50 padding-left-x">
        <div className="container-fluid overflow-hidden">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 sec-paragraph">
              <div className="header-container heading-sec res-head">
                <h2>Get Started with SLM</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Survey Link Management (SLM) involves the use of specialized
                tools and best practices to create, distribute, track, and
                manage survey links. These practices are fundamental for
                ensuring seamless survey execution across a variety of
                platforms, participant groups, and sample providers. SLM aims to
                streamline the survey process, ensuring accurate participant
                engagement, monitoring of response activity, and maintenance of
                high data quality.
              </p>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size slm-get">
              <div className="right-slm-blk ins-img img-shadow svg-blk-img ">
                <GetStartedSLM />
               </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Why Choose SLM */}
      <section className="page-left-sec why-choose-slm padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            <div
              className="
              col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size  slm-choose-img
              "
            >
              <div className="ins-img ">
                <Image
                  src={ChooseSLM}
                  alt="Why Choose SLM"
                  className="gray-scale"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 choose-blk  design-ins">
              <div className="header-container d-flex align-items-center slm-video">
                <div className="heading-sec res-head">
                  <h2>Why Choose SLM?</h2>
                  <div className="horizontal-row"></div>
                </div>
                <SLMRippleVideo />
              </div>

              <div className="d-flex right-arrow-hover arrow-sec">
                <RightArrow />
                <div className="text-container sec-paragraph">
                  <p>
                    SLM distinguishes itself through its holistic management of
                    surveys links management.
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec">
                <RightArrow />
                <div className="text-container sec-paragraph">
                  <p>
                    Equipped with advanced features that increase operational
                    efficiency, ensure data precision, and improve user
                    interaction, SLM is the go-to platform for vendors seeking
                    to optimize sample management across multiple distribution
                    channels.
                  </p>
                </div>
              </div>
              <div className="d-flex  right-arrow-hover">
                <RightArrow />
                <div className="text-container sec-paragraph">
                  <p>
                    From full-cycle link management to guaranteeing high-quality
                    data, SLM is built to meet your sample mapping requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Key Features and Functionality */}
      <section className=" slm-start key-features-slm  overflow-hidden padding-left-x">
        <div className="container-fluid ">
          <div className="header-container heading-sec res-head">
            <h2>Key Features and Functionality</h2>
            <div className="horizontal-row"></div>
          </div>

          <div className="row border-botom blk-btm">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 features-hover last-collumn-gap-mobile">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 hover-effect-slm">
                  <Efficiency_icon className="svg-icon hover-icon" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-9 pt-4 heading-sec sec-paragraph">
                  <h5>Efficiency</h5>
                  <p className="mt-3">
                    Streamlines the process of survey distribution and
                    management, saving time and resources.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Dynamic Link Management</h5>
                  <p>
                    Simplify your process with efficient handling of survey
                    links.
                  </p>
                </div>
              </div>
              <div className="mt-2 d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>​Sample Vendor Management</h5>
                  <p>
                    Coordinate effortlessly with multiple sample vendors within
                    a unified interface.
                  </p>
                </div>
              </div>
              <div className="mt-2 d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Supports all survey platforms</h5>
                  <p>Compatible across all survey platforms</p>
                </div>
              </div>
              <div className="mt-2 d-flex right-arrow-hover">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Domain Mapping</h5>
                  <p>
                    Customizing survey links to make them more personal or
                    relevant to specific groups or individuals. This can include
                    embedding participant-specific information or identifiers
                    within the link.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row border-botom blk-pad">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 last-collumn-gap-mobile">
              <div className="row features-hover">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 hover-effect-slm">
                  <DataQuality className="svg-icon hover-icon" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-9 pt-4 heading-sec sec-paragraph">
                  <h5>Data Quality</h5>
                  <p className="mt-3">
                    Enhances the quality of data collected by ensuring surveys
                    reach the intended respondents and facilitating high
                    response rates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>DFP</h5>
                  <p>
                    Digital Fingerprinting (aka DFP), enable users to filter the
                    respondent quality.
                  </p>
                </div>
              </div>
              <div className="mt-2 d-flex right-arrow-hover">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Quality Management</h5>
                  <p>
                    Ensure the highest data integrity with our comprehensive
                    quality control features. i.e. Digital Fingerprinting +
                    Regional mapping + Quota control.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row blk-top">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 last-collumn-gap-mobile">
              <div className="row features-hover">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 hover-effect-slm">
                  <Insights className="svg-icon hover-icon" />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-9 pt-4 heading-sec sec-paragraph">
                  <h5>Insights</h5>
                  <p className="mt-3">
                    Provides valuable insights into survey performance, helping
                    organizations to make informed decisions based on the
                    collected data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Real-time Reporting</h5>
                  <p>
                    Gain insights into your survey’s performance with detailed
                    analytics.
                  </p>
                </div>
              </div>
              <div className="mt-2 d-flex right-arrow-hover">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>​Respondents unique ID and associated information</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*How It Works*/}
      <section className="slm-start key-features-slm  pb-x overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>How It Works</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="how-work-blk research-box hedding-blk-sec  box-blk-img hover-svg-blk">
                <div className="setup-blk">Link Generation</div>
                <LinkGeneration className="img-box img-box_brand" />
                <h5>Create Unique Links</h5>
                <h5>Customize Links </h5>
                <h5>Set Expiry and Restrictions</h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="how-work-blk research-box hedding-blk-sec  box-blk-img hover-svg-blk">
                <div className="setup-blk">Link Distribution </div>
                <LinkDistribution className="img-box img-box_brand" />
                <h5>Channel Selection </h5>
                <h5>Channel Selection Branded Links</h5>
                <h5>Mobile Optimization</h5>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-4">
              <div className="how-work-blk research-box hedding-blk-sec  box-blk-img hover-svg-blk">
                <div className="setup-blk">Link Monitoring and Analytics </div>
                <LinkMonitoring className="img-box img-box_brand" />
                <h5>Track Clicks and Responses</h5>
                <h5>Identify Drop-offs</h5>
                <h5>Ensure Data Quality</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*Who Can Benefit*/}
      <section className="dashboard-help page-left-sec gray-background mb-6 overflow-hidden">
        <div className="row benefit-slm heading-sec">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 py-5_5 img-sec-left sec-paragraph">
            <div className="can-benfit res-head">
              <h2>Who Can Benefit?</h2>
              <div className="horizontal-row"></div>
            </div>
            <p>
              Whether you’re managing small projects or large-scale surveys, SLM
              provides the functionality and flexibility to cater your needs.
            </p>
            <div className="slm-pefet">
              <h5>SLM is the perfect tool for</h5>
              <div className="can-blk">
                <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>Market Researcher Agencies</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                  <RightArrow />

                  <div className="text-container">
                    <p>Sample Partners</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                  <RightArrow />

                  <div className="text-container">
                    <p>Survey Vendors</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
                  <RightArrow />

                  <div className="text-container">
                    <p>
                      And anyone in need of a sophisticated yet user-friendly
                      sample management solution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6 image-size benefit-img">
            <Image
              src={Benefit}
              alt="Who can Benefit"
              className="gray-scale left-img-clip"
            />
          </div>
        </div>
      </section>

      <GetStarted
        pageContent={"SLM"}
        subHedding={
          "Explore the live demo by clicking the button below and discover it firsthand!"
        }
      />
    </>
  );
}
