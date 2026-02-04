"use client";

import ProductBanner from "@/Component/ProductBanner";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStarted from "@/Component/GetStarted";
import ProductCarousel from "@/Component/ProductCarousel";
import RavenLogo from "../../../../public/raven/ravenLogo.svg";
import Chart from "../../../../public/raven/topCarousel/slider1.svg";
import KeyMarkets from "../../../../public/raven/topCarousel/slider2.svg";
import SensoryProfile from "../../../../public/raven/topCarousel/slider3.svg";
import NPSHeatmap from "../../../../public/raven/topCarousel/slider4.svg";
import ConceptLinking from "../../../../public/raven/topCarousel/slider5.svg";
import KeyCapabilities from "../../../../public/raven/keyCapabilities.png";
import DashboardHelp from "../../../../public/raven/dashboardHelp.png";
import RavenRippleVideo from "@/Component/RavenRippleVideo";
import Header from "@/Component/Header";

type ProductDataType = {
  header: string;
  description: string[] | [];
  image: StaticImageData;
  classes: string;
};
type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const Raven = () => {
  const ravenBannerData: BannerType = {
    header: "RAVEN DASHBOARDS",
    subHeader: "",
    // subHeader: "Insights are hidden in your data just waiting to be discovered",
    logo: RavenLogo,
    logoClass: "raven-logo",
  };

  const productData: ProductDataType[] = [
    {
      header: "Tracking HCP and Patients Satisfaction",
      description: [
        "Average satisfaction score of HCP and Patients are measured using wave tracking project.",
        "In response to treatment methods, scores are collected and monitored over a 12 period waves to assess the satisfaction levels.",
      ],
      image: Chart,
      classes: "raven-charts",
    },
    {
      header: "Brand Performance in Key Markets",
      description: [
        "A total of 3 brands are monitored consistently in 4 key regions to measure the brand awareness with consumers.",
        "Brand A has consistent high performance across all its key markets however, Brand C has seen areas of gap that has to be improved upon to catch up with other brands.",
      ],
      image: KeyMarkets,
      classes: "raven-charts",
    },
    {
      header: "Develop the Sensory Profile from Taste Test",
      description: [
        "Food taste test was conducted with consumers for 4 products to capture the sensory liking scores.",
        "Test Product A was found close to benchmark in sensory parameters while other test products require improvement and revalidation with consumers.",
      ],
      image: SensoryProfile,
      classes: "raven-charts",
    },
    {
      header: "Tracking Net Promoter Score (NPS)",
      description: [
        "For a global corporate group, E2E has deployed the NPS tracking with a set of brands in 10 markets to measure the score.",
        "A NPS heat map was provided to track the brand performance to know the high and low performing markets from consumer perspective.",
      ],
      image: NPSHeatmap,
      classes: "raven-charts",
    },
    {
      header: "Identify The Right Concept for Market",
      description: [
        "A global research was commissioned to pick one concept from many screening ideas with highest likelihood for average spend on the concept.",
        "For each concept, liking scores and average spend was aggregated as per market to choose the final winner.",
      ],
      image: ConceptLinking,
      classes: "raven-charts",
    },
  ];
  return (
    <>
      <Header />
      <title>Raven dashboards</title>
      <meta
        name="keywords"
        content=" online dashboarding, quick dashboards, cross tabulation. Real time dashboard "
      ></meta>
      <meta
        name="description"
        content="Raven generates survey insights with real-time API sync and SPSS support. Raven crosstab analysis reveals correlations and trends effortlessly. Raven offers powerful tools for hypothesis testing with precise analysis. Raven saves insights, filters, and charts for easy, one-click reporting. Raven2.0 offers fast, error-free charts for valuable market insights. Raven provides comprehensive statistical analysis with mean matrices and metrics. Raven enables seamless exports in PPT, PDF, Excel, preserving branding. Raven offers dynamic theming for customize visuals, branding, and evaluation methods."
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={ravenBannerData} />
      {/*End */}

      <Breadcrumb hedding={"Products "} urls="/products" activeUrl={"Raven"} />
      <div className="productivity-slider-con pb-x">
        <ProductCarousel
          productData={productData}
          pageName={"raven"}
          beforeAfterClass={"common-carousel-wrapper bg-color raven-cr"}
        />
      </div>
      {/*Key Capabilities Start */}
      <section className="key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-column-revers">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height raven-key-height">
                <Image
                  src={KeyCapabilities}
                  alt="key capabilities"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Key Capabilities</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ipad-col-gap">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Survey Data Import</h5>
                        <p>
                          Raven generates survey insights with real-time API
                          sync and SPSS support.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Crosstabulation & Filter</h5>
                        <p>
                          Raven crosstab analysis reveals correlations and
                          trends effortlessly.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Significance Difference</h5>
                        <p>
                          Raven offers powerful tools for hypothesis testing
                          with precise analysis.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover last-collumn-gap-mobile">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>My Cache Collections</h5>
                        <p>
                          Raven saves insights, filters, and charts for easy,
                          one-click reporting.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Data Visualization</h5>
                        <p>
                          Raven2.0 offers fast, error-free charts for valuable
                          market insights.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Statistical data Analysis</h5>
                        <p>
                          Raven provides comprehensive statistical analysis with
                          mean matrices and metrics.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Multi-format Export</h5>
                        <p>
                          Raven enables seamless exports in PPT, PDF, Excel,
                          preserving branding.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover margin-btn-mb">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Personalization & Branding</h5>
                        <p>
                          Raven provides dynamic theming capabilities, allowing
                          for customizable visuals, personalized branding, and
                          tailored evaluation methods to meet diverse project
                          needs.
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
      {/* Analysis*/}
      <section className=" slm-start key-features-slm  pb-x overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>Analysis</h2>
            <div className="horizontal-row"></div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Hypothesis Testing</h5>
                  <p>
                    Z-test analysis (two-tailed) for proportions
                    <br /> Paired T-test analysis for means
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Cross-Tabulation</h5>
                  <p>Analysis with multiple variables</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Tabulation</h5>
                  <p>
                    Including Mean, Median, Standard Error, and Standard
                    Deviation
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Weighted or Unweighted Analysis</h5>
                  <p>
                    Composition data analysis <br />
                    Comparative data analysis <br />
                    KPI analysis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Relationships and Comparative Analysis</h5>
                  <p>Compatible across all survey platforms</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Open-end Coded Data Analysis</h5>
                  <p>World Visualization</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>
                    Scaling, NPS (Net Promoter Score), and JAR Data Analysis
                  </h5>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Nested Banners Analysis</h5>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Weighted or Unweighted Analysis</h5>
                </div>
              </div>
              <div className="d-flex right-arrow-hover">
                <RightArrow />
                <div className="text-container heading-sec sec-paragraph">
                  <h5>Percentage Distribution and Trend Analysis</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Raven analysis */}

      {/*Raven sec */}
      <section className="dashboard-help page-left-sec gray-background mb-6 overflow-hidden">
        <div className="row benefit-slm heading-sec">
          <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 py-5_5  img-sec-left other-mb">
            <div className="can-benfit d-flex video-blk">
              <div className="heading-sec res-head">
                <h2>How can Raven help you?</h2>
                <div className="horizontal-row"></div>
              </div>
              <RavenRippleVideo />
            </div>
            <div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Quick dashboarding</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    On key hypotheses and conclusions for custom projects or
                    ongoing trackers
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Save time and money, and eliminate accidental errors arising
                    from manual charting
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Unearth daily, weekly, monthly, and quarterly tracker trends
                    in multiple waves of data
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Uncover local, national, and international differences</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Understand the unique perspectives of targeted demographic
                    or psychographic consumer segments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6 image-size benefit-img d-flex justify-content-center">
            <Image
              src={DashboardHelp}
              alt="dashboard help"
              className="gray-scale left-img-clip"
            />
          </div>
        </div>
      </section>
      {/*END*/}
      <GetStarted
        pageContent={"Raven"}
        subHedding={
          "Explore the live demo by clicking the button below and discover it firsthand!"
        }
      />
    </>
  );
};

export default Raven;
