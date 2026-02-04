import Image from "next/image";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrowBullet from "@/Component/widgets/RightArrow";
import RightArrow from "../../../public/homePage/icons/right_arrow.svg";
import RavenImage from "../../../public/raven/raven.jpg";
import SlmImage from "../../../public/slm/slm.jpg";
import DataValidtor from "../../../public/dataValidator/data_validator.jpg";
import Insribee from "../../../public/inscribee/inscribee.jpg";
import DataPilot from "../../../public/dataPilot/data_pilot.jpg";
import Gamification from "../../../public/engame/gamification.jpg";
import KeyFeatures from "../../../public/resQ/key_features.jpg";
import AI from "../../../public/technologyAndProduct/ai.jpg";

import Link from "next/link";
import Header from "@/Component/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enhance Your Research Cycle with E2E’s Advanced Tools | Analytics, Data Validation & E-Signatures",
  keywords:
    "Research tools Analytics tools Raven analytics Raven Dashboards SLM link management Data Pilot Inscribee e-signatures ResQ Digital Fingerpronting or DFP Data validation Market research tools Survey tools Crosstab analysis Survey Gamification Statistical analysis Research lifecycle efficiency Real-time insights Secure data management AI Integration to market research Dummy data generation",
  description:
    "Streamline your research cycle with E2E’s innovative tools, including Raven for analytics, SLM for lifecycle efficiency, Data Pilot for project management, Inscribee for secure e-signatures, and ResQ for real-time respondent scoring. Enhance accuracy, insights, and productivity with our cutting-edge solutions.",
};

const Technology_Products = () => {
  return (
    <>
      <Header />

      <section className="technology-and-products banner-background technology banner-pd sec-margin-t padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left   ">
              <h1>Products</h1>
            </div>
            <div className="col-4 bg-image-left logo-shadow"></div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb hedding={""} activeUrl={"Products"} />
      {/*Description start */}
      <section className="heading-sec light-gray-bg heading pb-x padding-left-x overflow-hidden">
        <div className="container-fluid">
          <div className="heading heading-sec res-head key-fr">
            <h2>
              Enhancing value in research cycle through our latest products
            </h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="research-font-size offering">
            <p>
              With E2E’s latest products, clients have been confident in the
              overall research cycle with less time spent on the process and
              more time available to insights generation. Each tool from the
              list below brings unique offering to research like Raven for
              analytics, SLM for research lifecycle efficiency, Data Pilot along
              with resQ drive insights and streamline processes and finally
              Inscribee for secure e-signatures in consent and survey forms.
            </p>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Our Products start */}
      {/*AI  Start */}
      <section className="key-capabilities padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          <div className="row row-gap-5">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height raven-key-height">
                <Image src={AI} alt="AI" className="img-boxshadow" />
              </div>
            </div>
            <div className="col-sm-8 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="header-container heading-sec res-head">
                <h2>AI Modules</h2>
                <div className="horizontal-row"></div>
              </div>

              <p>
                Discover the best tools to elevate your projects with ease and
                efficiency. Whether you are a designer, developer, or creative
                professional, having access to the right resources can transform
                the way you work. Our platform offers a collection of seamlessly
                integrated tools designed to streamline your workflow and boost
                your productivity.
              </p>
              <p>
                What sets these tools apart is their seamless integration into
                your existing workflow. Say goodbye to complicated setups and
                enjoy a smooth, intuitive experience that saves you time and
                effort.
              </p>

              <Link
                href={"/products/AI"}
                className="read-more right-arrow-hover hover-line-effect read-margin">
                READ MORE
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*Raven start */}
      <section className="page-left-sec why-choose-slm padding-left-x pb-x overflow-hidden">
        <div className="container-fluid">
          <div className="row mobile-col-reverse row-gap-5">
            <div className="col-sm-8 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Raven</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ipad-col-gap ">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Survey Data Import</h5>
                        <p>
                          Raven generates survey insights with real-time API
                          sync and SPSS support.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Crosstabulation & Filter</h5>
                        <p>
                          Raven crosstab analysis reveals correlations and
                          trends effortlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Data Visualization</h5>
                        <p>
                          Raven2.0 offers fast, error-free charts for valuable
                          market insights.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Statistical data Analysis</h5>
                        <p>
                          Raven provides comprehensive statistical analysis with
                          mean matrices and metrics.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={"/products/raven"}
                  className="read-more right-arrow-hover hover-line-effect read-margin">
                  READ MORE
                  <RightArrow />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height raven-key-height">
                <Image src={RavenImage} alt="Raven" className="img-boxshadow" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}

      {/*Data Validator Start */}
      <section className="key-capabilities padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          <div className="row row-gap-4">
            <div className="col-sm-12 col-md-5  col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={DataValidtor}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Data Validator</h2>
                <div className="horizontal-row"></div>
              </div>

              <p>
                A data validator is a crucial tool or software used to ensure
                the accuracy, consistency, and validity of data within a system
                or dataset. By applying predefined rules, formats, and
                constraints, it checks the integrity of data before it is
                processed, analyzed, or stored. The tool performs tasks such as
                verifying data types, checking for missing or duplicate values,
                and ensuring that the data follows specific standards. This
                helps prevent errors, reduces the risk of incorrect analysis,
                and ensures that the data being used for decision-making is
                reliable. Data validation is essential in maintaining the
                quality of data, particularly in industries like healthcare,
                finance, and e-commerce, where data integrity is critical to
                operations and compliance.
              </p>

              <Link
                href={"/products/data-validator"}
                className="read-more right-arrow-hover hover-line-effect read-margin">
                READ MORE
                <RightArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*Inscibee Start */}
      <section className="inscribee-from-setup padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse row-gap-5">
            {/* justify-content-center */}

            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading-sec res-head">
                <h2>Inscribee</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="inc-hedding">
                <h5>
                  From setup to signature, Inscribee simplifies business
                  processes and saves your time.
                </h5>
              </div>
              <div className="small-screen-margin ">
                <div className="d-flex right-arrow-hover arrow-sec quick-arrow">
                  <RightArrowBullet />
                  <div className="text-container">
                    <p>Get legally binding digital signatures in seconds</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover arrow-sec quick-arrow">
                  <RightArrowBullet />
                  <div className="text-container">
                    <p>Track signature completion in real-time</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover">
                  <RightArrowBullet />
                  <div className="text-container">
                    <p>
                      Works with any internet enabled device without downloads,
                      emails, or registrations!
                    </p>
                  </div>
                </div>
                <Link
                  href={"/products/inscribee"}
                  className="read-more right-arrow-hover hover-line-effect read-margin">
                  READ MORE
                  <RightArrow />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={Insribee}
                  alt="Setup Signature"
                  className="img-boxshadow gray-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*5 Start */}
      <section className="key-capabilities padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          <div className="row row-gap-4">
            <div className="col-sm-12 col-md-5  col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={DataPilot}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7  col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Data Pilot</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  ">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Project Management</h5>
                        <p>
                          Easily set up multiple projects with unique names and
                          survey URLs, enabling seamless organization and
                          testing workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  ">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Dynamic Question Handling</h5>
                        <p>Handle a variety of question types, including.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  ipad-col-gap">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Grid & Multi-Grid Questions</h5>
                        <p>
                          Define patterns or customize responses for repeated
                          runs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  last-collumn-gap-mobile">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Single-Choice & Multi-Choice</h5>
                        <p>
                          Select specific options as defaults with skip options
                          for questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={"/products/datapilot"}
                  className="read-more right-arrow-hover hover-line-effect read-margin">
                  READ MORE
                  <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*About Gamification Start */}

      <section className="inscribee-from-setup padding-left-x pb-x overflow-hidden">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            {/* justify-content-center */}

            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="header-container heading-sec res-head">
                <h2>Gamification</h2>
                <div className="horizontal-row"></div>
              </div>

              <p>
                Discover the best tools to elevate your projects with ease and
                efficiency. Whether you are a designer, developer, or creative
                professional, having access to the right resources can transform
                the way you work. Our platform offers a collection of seamlessly
                integrated tools designed to streamline your workflow and boost
                your productivity.
              </p>
              <p>
                What sets these tools apart is their seamless integration into
                your existing workflow. Say goodbye to complicated setups and
                enjoy a smooth, intuitive experience that saves you time and
                effort.
              </p>

              <Link
                href={"/products/gamification"}
                className="read-more right-arrow-hover hover-line-effect read-margin">
                READ MORE
                <RightArrow />
              </Link>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={Gamification}
                  alt="About EnGame"
                  className="img-boxshadow gray-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end */}

      {/*slm start */}
      <section className="page-left-sec why-choose-slm padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          <div className="row row-gap-4">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={SlmImage}
                  alt="Why Choose SLM"
                  className="img-boxshadow gray-scale"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 choose-blk design-ins">
              <div className="heading-sec res-head">
                <h2>SLM</h2>
                <div className="horizontal-row"></div>
              </div>

              <div className="container-fluid">
                <div className="d-flex right-arrow-hover arrow-sec">
                  <RightArrowBullet />
                  <div className="text-container sec-paragraph">
                    <p>
                      SLM distinguishes itself through its holistic management
                      of surveys links management.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover arrow-sec">
                  <RightArrowBullet />
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
                  <RightArrowBullet />
                  <div className="text-container sec-paragraph">
                    <p>
                      From full-cycle link management to guaranteeing
                      high-quality data, SLM is built to meet your sample
                      mapping requirements.
                    </p>
                  </div>
                </div>
                <Link
                  href={"/products/slm"}
                  className="read-more right-arrow-hover hover-line-effect read-margin">
                  READ MORE
                  <RightArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*resQ Start */}
      <section className="key-capabilities padding-left-x pb-x overflow-hidden">
        <div className="container-fluid">
          <div className="row row-gap-4">
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
              <div className="heading heading-sec res-head key-fr">
                <h2>resQ</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-Time ResQ Scoring</h5>
                        <p>
                          Evaluate respondent authenticity instantly using
                          parameters like Local IP, Fingerprint, Cookies, and
                          Local Storage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6  ">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Easy-to-Use Interface</h5>
                        <p>
                          Configure settings, manage projects, and generate
                          scripts without the hassle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ipad-col-gap">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Advanced Data Insights</h5>
                        <p>
                          Access comprehensive dashboards and reports to monitor
                          survey quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Seamless Integration</h5>
                        <p>
                          Integrates effortlessly with your existing survey
                          platforms via API for real-time data exchange.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={"/products/resQ"}
                  className="read-more right-arrow-hover hover-line-effect read-margin">
                  READ MORE
                  <RightArrow />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={KeyFeatures}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
    </>
  );
};

export default Technology_Products;
