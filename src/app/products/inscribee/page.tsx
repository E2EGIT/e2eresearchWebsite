"use client";
import ProductBanner from "@/Component/ProductBanner";
import Image from "next/image";
import React from "react";
import InscribeeLogo from "../../../../public/inscribee/inscribee_Logo.svg";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import SetupSignature from "../../../../public/inscribee/setupSignature.png";
import MarketResearch from "../../../../public/inscribee/marketResearch.png";
import safeAndSecure from "../../../../public/inscribee/safe_and_secure/safeAndSecure.png";
import Emudhra from "../../../../public/inscribee/safe_and_secure/logo/emudhra.png";
import Gdpr from "../../../../public/inscribee/safe_and_secure/logo/gdpr.png";
import AICPA_SOC from "../../../../public/inscribee/safe_and_secure/logo/aicpa_soc.png";
import Certification from "../../../../public/inscribee/safe_and_secure/logo/certification.png";
import GetStarted from "@/Component/GetStarted";
import InscribeeRippleVideo from "@/Component/SLMRippleVideo";
import Header from "@/Component/Header";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";

import Inscribee_Slider1 from "../../../../public/inscribee/topCarousel/inscribee_Slider1.svg";
import Inscribee_Slider2 from "../../../../public/inscribee/topCarousel/inscribee_Slider2.svg";
import Inscribee_Slider3 from "../../../../public/inscribee/topCarousel/inscribee_Slider3.svg";
import Inscribee_Slider4 from "../../../../public/inscribee/topCarousel/inscribee_Slider4.svg";

type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const InscribeePage = () => {
  const inscribeeBannerData: BannerType = {
    header: "INSCRIBEE DASHBOARD",
    subHeader: "",
    logo: InscribeeLogo,
    logoClass: "inscribee-logo",
  };

  const crouselImage: any[] = [
    {
      image: Inscribee_Slider1,
      classes: "gamification-svg inscribee-slide",
    },
    {
      image: Inscribee_Slider2,
      classes: "gamification-svg inscribee-slide",
    },
    {
      image: Inscribee_Slider3,
      classes: "gamification-svg inscribee-slide",
    },
    {
      image: Inscribee_Slider4,
      classes: "gamification-svg inscribee-slide",
    },
  ];
  return (
    <>
      <Header />
      <title>Inscribee</title>
      <meta
        name="keywords"
        content="Document management, online signature, survey consent form, digital signature "></meta>
      <meta
        name="description"
        content="From setup to signature, Inscribee simplifies business processes and saves your time. Digital signatures, Document Management, Sign with finger, typing, or saved credentials, traceable, real-time signature, AI-driven research, predictive analytics, machine learning."></meta>

      {/*Banner Start */}
      <ProductBanner banner={inscribeeBannerData} />
      {/*End */}
      <Breadcrumb
        hedding={"Products "}
        urls="/products"
        activeUrl={"Inscribee"}
      />

      {/*end*/}
      <div className=" slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head">
                <h2>
                  Document sharing within organizations accredits you with
                </h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                Digital signatures, Document Management, Sign with finger,
                typing, or saved credentials, traceable, real-time signature,
                AI-driven research, predictive analytics, machine learning.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 inscribee-slider left-padd-crousle">
              <ProductNewCarousel productData={crouselImage} />
            </div>
          </div>
        </div>
      </div>
      {/*setup to signature Start */}
      <section className="inscribee-from-setup padding-left-x setup-signature slm-start">
        <div className="container-fluid">
          <div className="row">
            {/* justify-content-center */}
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8">
              <div className="can-benfit d-flex align-items-start ins-video-blk">
                <div className="heading-sec res-head">
                  <h2>
                    From setup to signature, Inscribee simplifies business
                    processes and saves your time.
                  </h2>
                  <div className="horizontal-row"></div>
                </div>
                <InscribeeRippleVideo />
              </div>
              {/* <div> */}
              <div className="setup-margin ">
                <div className="d-flex right-arrow-hover arrow-sec quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>Get legally binding digital signatures in seconds</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover arrow-sec quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>Track signature completion in real-time</p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Works with any internet enabled device without downloads,
                      emails, or registrations!
                    </p>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="ins-img ins-margin-top">
                <Image
                  src={SetupSignature}
                  alt="Setup Signature"
                  className="ima  ge-size"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Design for market Start */}
      <section className="key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="section-image-size">
                <Image
                  src={MarketResearch}
                  alt="Market Research"
                  className="image-size img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec bottom-line res-head">
                <h2>Designed for market researchers and business leaders</h2>
                <div className="horizontal-row"></div>
              </div>

              <div className="market-rec">
                <div className="heading-sec inc-hedding">
                  <h5>Market Research Consent and Permission</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 last-collumn-gap-mobile">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Gain digital consent in the middle of a survey without
                          having participants check their email
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Reinforce the need for participants to uphold privacy
                          and security of confidential movie trailers, brand
                          names, concepts, or new products
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Gain permission to record and share audio and video
                          responses
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Gain consent during in-person research via digital
                          devices and tablets
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Simplify consent from patient and healthcare
                          participants in medical and pharmaceutical research
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="heading-sec inc-hedding bussiness-hed">
                  <h5>Business Agreements</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 last-collumn-gap-mobile">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Track the signature progress of NDAs, SOWs, MOUs,
                          MSAs, SLAs, and more
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>Prepare one document to be signed by many people</p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container">
                        <p>Secure and legally binding</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Speed up and simplify the signature process for
                          proposals, quotes, contracts, and forms
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container">
                        <p>
                          Prepare many documents to each be signed by one person
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
      {/*Detailed Features*/}
      <section className="detailed-features slm-start key-features-slm  overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>Detailed Features</h2>
            <div className="horizontal-row"></div>
          </div>

          <div className="row row-gap-5">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="heading heading-sec inc-hedding">
                <h5>Document Management</h5>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins ">
                <RightArrow />
                <div className="text-container">
                  <p>Unlimited number of documents</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins ">
                <RightArrow />
                <div className="text-container">
                  <p>Supports known and unknown signees</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins ">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Supports documents requiring signatures from one person or
                    many people
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Automatic invitations, reminders, confirmations, and
                    notifications
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>Share documents with other account users</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover  arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>Customize fields and branding</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover ">
                <RightArrow />
                <div className="text-container">
                  <p>Bulk email uploads and sending</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="heading heading-sec inc-hedding">
                <h5>Easy For Signers</h5>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>Easy for technology hesitant users</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>Drag & Drop interface on any digital device</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover">
                <RightArrow />
                <div className="text-container">
                  <p>Sign with finger, typing, or saved credentials</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="heading heading-sec inc-hedding">
                <h5>Technical Specifications</h5>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Legally binding mobile/digital signatures via a registered
                    certifying authority
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Traceable, real-time signature trail from beginning to end
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover arrow-sec arrow-ins">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Easy to deploy in any survey scripting tool including
                    Confirmit, Qualtrics, Decipher, Sawtooth and more
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover ">
                <RightArrow />
                <div className="text-container">
                  <p>
                    Mobile-first, device and browser agnostic including Android
                    / Cloud / iOS / SaaS / VM / Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Safe and Secure */}
      <section className="safe-secure gray-background overflow-hidden padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row benefit-slm heading-sec .mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-size">
                <Image
                  src={safeAndSecure}
                  alt="Safe and Secure"
                  className="image-size img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="safe-sec res-head">
                <h2>Safe and Secure</h2>
                <div className="horizontal-row"></div>
              </div>

              <div className="row blk-gap">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="image-con white-background border-radious d-flex justify-content-center align-items-center embudhar-img">
                    <Image src={Emudhra} alt="Emudra Logo" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="image-con white-background border-radious d-flex justify-content-center align-items-center mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                    <Image src={Gdpr} alt="Gdpr Logo" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 Ipad-margin">
                  <div className="image-con white-background border-radious d-flex justify-content-center align-items-center">
                    <Image src={AICPA_SOC} alt="AICPA SOC Logo" />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                  <div className="image-con white-background border-radious d-flex justify-content-center align-items-center mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                    <Image src={Certification} alt="ISO Certification Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <GetStarted
        pageContent={"Inscribee"}
        subHedding={
          "Explore the live demo by clicking the button below and discover it firsthand!"
        }
      />
    </>
  );
};

export default InscribeePage;
