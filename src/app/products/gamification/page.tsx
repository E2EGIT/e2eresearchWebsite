"use client";
import ProductBanner from "@/Component/ProductBanner";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import GetStarted from "@/Component/GetStarted";
import Header from "@/Component/Header";
import Gamification from "../../../../public/homePage/technology/engame_logo.svg";

import VideoRating from "../../../../public/engame/topCarousel/video_rating.svg";
import CraousalRating from "../../../../public/engame/topCarousel/craousal_rating.svg";
import PricingHighLow from "../../../../public/engame/topCarousel/pricing_high_low.svg";
import ImplicitExercise from "../../../../public/engame/topCarousel/implicit_exercise.svg";

import AboutEnGame from "../../../../public/engame/about_enGame.png";
import ChooseEngame from "../../../../public/engame/choose_engame.png";
import ProductNewCarousel from "@/Component/ProductCarousel/ProductNew";

import ToolsShow from "@/Component/EngameTools";

type ProductDataType = {
  image: StaticImageData;
  classes: string;
};
type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const Engame = () => {
  const Engame: BannerType = {
    header: "Gamification",
    subHeader: "",
    logo: Gamification,
    logoClass: "gimifiaction-logo",
  };

  const crouselImage: ProductDataType[] = [
    {
      image: VideoRating,
      classes: "gamification-svg",
    },
    {
      image: CraousalRating,
      classes: "gamification-svg",
    },
    {
      image: PricingHighLow,
      classes: "gamification-svg",
    },
    {
      image: ImplicitExercise,
      classes: "gamification-svg",
    },
  ];
  return (
    <>
      <Header />
      <title>Engame, Survey gamification</title>
      <meta
        name="keywords"
        content="Onlien tools, drag n drop exercises, slider questions, implicit, map, hotspot, analyser, videi analyser, word highlighter"
      ></meta>
      <meta
        name="description"
        content="This innovative solution revolutionizes surveys by combining interactivity and customization, increasing engagement and response rates. With dynamic elements like sliders, emotion ratings, and video captures, it ensures meaningful insights while delivering a seamless and enjoyable experience for participants and organizations. "
      ></meta>

      {/*Banner Start */}
      <ProductBanner banner={Engame} />
      {/*End */}

      <Breadcrumb
        hedding={"Products "}
        urls="/products"
        activeUrl={"Gamification"}
      />
      <div className=" slider-con-other light-gray-bg padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 sec-paragraph d-flex flex-column justify-content-center carousel-paragraph">
              <div className="heading-sec we-can res-head two-linw-br">
                <h2>Empowering Success with Essential Tools</h2>
                <div className="horizontal-row"></div>
              </div>
              <p>
                This innovative solution revolutionizes surveys by combining
                interactivity and customization, increasing engagement and
                response rates. With dynamic elements like sliders, emotion
                ratings, and video captures, it ensures meaningful insights
                while delivering a seamless and enjoyable experience for
                participants and organizations.
              </p>
            </div>
            <div className="product-new-carousel col-lg-7 game-slider left-padd-crousle">
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
                <h2>About Gamification</h2>
                <div className="horizontal-row"></div>
              </div>
              <div>
                <p>
                  Discover the best tools to elevate your projects with ease and
                  efficiency. Whether you are a designer, developer, or creative
                  professional, having access to the right resources can
                  transform the way you work. Our platform offers a collection
                  of seamlessly integrated tools designed to streamline your
                  workflow and boost your productivity.
                </p>
                <p>
                  What sets these tools apart is their seamless integration into
                  your existing workflow. Say goodbye to complicated setups and
                  enjoy a smooth, intuitive experience that saves you time and
                  effort.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size slm-get">
              <div className="ins-img img-shadow">
                <Image
                  src={AboutEnGame}
                  alt="About EnGame"
                  className="gray-scale slm-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end */}

      {/*Top Rated Gamification Tools*/}
      <section className="gamification-tools key-capabilities gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec res-head">
            <h2>Top Rated Gamification Tools</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <ToolsShow />
          </div>
        </div>
      </section>
      {/*END*/}

      {/* Key Feature */}

      <section className="key-capabilities  padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box">
                <Image
                  src={ChooseEngame}
                  alt="Choose Engame"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8  col-xl-8  col-xxl-8 design-ins">
              <div className="heading heading-sec res-head">
                <h2>Why Choose Gamification? </h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Simplified Customization</h5>
                        <p>
                          Build surveys that stand out without technical
                          complexity.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Engaging Participant Experience</h5>
                        <p>
                          Boost engagement with creative, fun, and interactive
                          question designs.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Universal Compatibility</h5>
                        <p>
                          Integrate easily with any survey platform or tool.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-Time Insights</h5>
                        <p>
                          Get immediate access to participant responses for
                          faster decision-making.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex right-arrow-hover">
                      <RightArrow />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Innovative Features</h5>
                        <p>
                          From emotion tracking to video-based feedback, enGame
                          offers tools that go beyond traditional surveys.
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
        pageContent={"Gamification"}
        subHedding={
          "Transform your surveys into engaging, interactive experiences with Gamification. Whether you’re looking to captivate participants, gather deeper insights, or streamline data collection, Gamification has you covered."
        }
      />
      {/*Main footer */}
    </>
  );
};

export default Engame;
