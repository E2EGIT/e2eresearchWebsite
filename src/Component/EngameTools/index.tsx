"use client";
import { useState } from "react";
import Implicitexercise from "../../../public/engame/tools/implicit_exercise.svg";
import LondonMap from "../../../public/engame/tools/london_map.svg";
import HeadHeart from "../../../public/engame/tools/head_Heart_Open_Ends.svg";
import HightlighterButton from "../../../public/engame/tools/hightlighter_button.svg";
import StatementScaleOrder from "../../../public/engame/tools/statement_scale_order.svg";
import PhotoCapture from "../../../public/engame/tools/photo_capture.svg";
import CustomScaleRating from "../../../public/engame/tools/custom_scale_rating.svg";
import HotspotsLettersAnalyzer from "../../../public/engame/tools/hotspots_letters_analyzer.svg";
import MultiSliderSums from "../../../public/engame/tools/multi_slider_sums.svg";
import PricingHighLow from "../../../public/engame/tools/pricing_high_low.svg";
import WordHighlighters from "../../../public/engame/tools/word_highlighters.svg";
import EmoticonVideoRating from "../../../public/engame/tools/emoticon_video_rating.svg";
import CustomPopup from "../CustomPopup";
import "./enagameTool.scss";

const ToolsShow = () => {
  const ToolsJson = [
    {
      toolname: "Implicit Exercise",
      image: Implicitexercise,
      url: "/widgets/Implicit_Exercise/index.html",
    },
    {
      toolname: "UK Map",
      image: LondonMap,
      url: "/widgets/UK_map/index.html",
    },
    // {
    //   toolname: "Genie Speaking",
    //   image: GenieSpeaking,
    //   url: "/widgets/genie-speking/index.html",
    // },
    {
      toolname: "Head Heart Open Ends",
      image: HeadHeart,
      url: "/widgets/head-heart-open-ends/index.html",
    },
    {
      toolname: "Highlighter Buttons",
      image: HightlighterButton,
      url: "/widgets/highlighter_buttons/index.html",
    },
    {
      toolname: "Statement Scale Order",
      image: StatementScaleOrder,
      url: "/widgets/Statement_Scale_Order/index.html",
    },
    {
      toolname: "Video Capture Transcription",
      image: PhotoCapture,
      url: "/widgets/video-capture-transcript/index.html",
    },
    {
      toolname: "Custom Scale Rating",
      image: CustomScaleRating,
      url: "/widgets/customStarRating/index.html",
    },
    {
      toolname: "Hotspot Analyser",
      image: HotspotsLettersAnalyzer,
      url: "/widgets/analyzer/index.html",
    },
    {
      toolname: "Multi Slider with N/A",
      image: MultiSliderSums,
      url: "/widgets/multi-slider-with-NA/index.html",
    },
    {
      toolname: "Pricing High Low",
      image: PricingHighLow,
      url: "/widgets/pricing-tool-5/index.html",
    },
    {
      toolname: "Word Highlighter",
      image: WordHighlighters,
      url: "/widgets/word-hightlighter/index.html",
    },
    {
      toolname: "Video Rating",
      image: EmoticonVideoRating,
      url: "/widgets/video_rating/index.html",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [widgetsData, setWidgetsData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const handleOpenPopup = (event: any, el: any) => {
    setIsModalOpen(true);
    setIsLoading(true);
    setIsError(false);
    setWidgetsData(el);
    document.body.style.overflow = "hidden";
  };
  const handleLoad = () => {
    setIsLoading(false);
  };
  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  return ToolsJson?.map((el: any, index: number) => {
    const SvgImage = el.image;
    return (
      <>
        <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3" key={index}>
          <div
            className="box-sec box-crad-tool research-box d-flex flex-column  align-items-center hover-svg-blk res-exprience widgets-blk"
            onClick={(e) => handleOpenPopup(e, el)}>
            <SvgImage />
            <h5>{el?.toolname}</h5>
          </div>
        </div>

        <CustomPopup
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          headerText={widgetsData?.toolname}
          aboutClass="big-widget"
          contentBody={
            <div className=" widgets_form">
              {!isLoading ? "" : <Loader />}
              {!isError ? "" : "App Loading Error..."}
              <embed
                type="text/html"
                src={widgetsData?.url}
                onLoad={handleLoad}
                onError={handleError}
              />
            </div>
          }
        />
      </>
    );
  });
};

export default ToolsShow;

const Loader = () => {
  return (
    <div className="enmage-loader-overlay">
      <span className="engame-loader"></span>
    </div>
  );
};
