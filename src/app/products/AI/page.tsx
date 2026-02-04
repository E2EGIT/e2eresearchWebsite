"use client";
import Image from "next/image";
import "./AI.scss";
import Header from "@/Component/Header";
import ProductBanner from "@/Component/ProductBanner";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrowBullet from "@/Component/widgets/RightArrow";
import AILogo from "../../../../public/homePage/technology/aI_logo.svg";

import About_verb from "../../../../public/ai/auto_verb.jpg";
// import Qprobe from "../../../../public/ai/qprobe.png";
import Quiq from "../../../../public/ai/quiq.jpg";
import Speak_survey from "../../../../public/ai/speak_survey.jpg";
import ProbeMeAi from "@/Component/ProbmeAi";
import { useEffect, useRef, useState } from "react";
import CustomPopup from "@/Component/CustomPopup";
import VideoPoster from "../../../../public/ai/video_cover_img.jpg";
import CustomVideo from "@/Component/VideoPlayer";

type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

const AI = () => {
  const ravenBannerData: BannerType = {
    header: "ARTIFICIAL INTELLIGENCE",
    subHeader: "",
    logo: AILogo,
    logoClass: "ai-banner-logo",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }, 15000); // 2000 milliseconds = 2 seconds
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <Header />
      {/*Banner Start */}
      <ProductBanner banner={ravenBannerData} />
      {/*End */}

      <title>
        Revolutionize Survey Research with AI | CodeMe AI, QProbe, QUIQ, and
        SpeakSurvey
      </title>
      <meta
        name="keywords"
        content="AI survey tools, automated survey coding, real-time question generator, relevancy scoring tool, voice-based surveys, CodeMe AI, QProbe, QUIQ, SpeakSurvey, AI-powered survey research, survey data analysis, survey automation, AI in market research."></meta>
      <meta
        name="description"
        content="Discover the power of AI in survey research with our innovative tools, including CodeMe AI, QProbe, QUIQ, and SpeakSurvey. Enhance efficiency, precision, and insights with real-time question generation, automated coding, relevancy scoring, and voice-based survey experiences. Revolutionize how surveys are conducted and analyzed with cutting-edge AI technology."></meta>

      <Breadcrumb
        hedding={"Products "}
        urls="/products"
        activeUrl={"AI Modules"}
      />
      {/*Description start */}
      <section className="heading-sec light-gray-bg heading overflow-hidden pb-x padding-left-x">
        <div className="container-fluid">
          <div className="heading heading-sec res-head key-fr">
            <h2>Discover the Power of AI in Survey Research</h2>

            <div className="horizontal-row"></div>
          </div>
          <div className="research-font-size offering">
            <p>
              Our suite of AI-powered tools revolutionizes how surveys are
              conducted, analyzed, and interpreted. From generating real-time
              probed questions to voice-based responses, relevancy scoring, and
              automated coding, these tools are designed to enhance efficiency,
              precision, and insights in every step of the survey process.
            </p>
          </div>
        </div>
      </section>
      {/*End */}

      {/*Qprobe start */}
      <section className="page-left-sec why-choose-slm padding-left-x pb-x gray-background overflow-hidden">
        <div className="container-fluid">
          {/* Products heading start */}
          {/* <div className="heading heading-sec res-head key-fr">
            <h2>Products</h2>
            <div className="sub-heading">
              EMPOWERING INNOVATION, DRIVING SUCCESS
            </div>
            <div className="horizontal-row"></div>
          </div> */}
          {/* End */}
          <div className="row row-gap-4">
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 choose-blk">
              <div className="heading-sec res-head">
                <h2>ProbeMe AI</h2>
                <div className="sub-heading">
                  Enhancing Meaningful Participant Communication
                </div>
                <div className="horizontal-row"></div>
              </div>
              <p>
                AI-led <b>ProbeMe</b> is an intelligent moderation platform that
                enables rich and engaging conversations with participants.
                Acting as an AI moderator, it actively listens, responds, and
                asks relevant follow-up questions based on participant input,
                ensuring insightful and dynamic interactions.{" "}
              </p>
              <div className="container-fluid">
                <div className="inc-hedding margin-ai-sec">
                  <h5>Key Features & Functionalities:</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Verbal Communication</h5>
                        <p>
                          Communicates with participants using natural,
                          human-like speech.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Smart Probing</h5>
                        <p>
                          Dynamically generates tailored follow-up questions
                          based on responses to uncover deeper insights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Adaptive Interactions</h5>
                        <p>
                          Adjusts in real time to participant input, maintaining
                          relevance and engagement throughout the conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Versatile Usage</h5>
                        <p>
                          Suitable for both online quantitative surveys and
                          qualitative in-depth interviews.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Multilingual Capability</h5>
                        <p>
                          Speaks and understands any language, with real-time
                          translation and transcription.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Scalability</h5>
                        <p>
                          Conducts multiple interviews simultaneously without
                          compromising quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Quick and Easy Set up</h5>
                        <p>
                          Very less time to initiate the qualitative research
                          and start fielding, subsequently free up the
                          researcher’s time to perform more complex task.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Integrated Text Analytics</h5>
                        <p>
                          Built-in analytics dashboard provides insights, key
                          theme extraction, and sentiment score directly from
                          conversation transcripts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover last-collumn-gap-mobile blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Quality Scoring</h5>
                        <p>
                          Evaluates both the quality of the conversation and the
                          depth of participant responses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid">
                <div className="inc-hedding margin-ai-sec">
                  <h5>Business Use:</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>
                          Qualitative studies including in-depth research :
                          ProbeMe works in both mode either stand-alone or
                          integrated with traditional research studies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>
                          Feedback collection: Automated way to collect the
                          feedback data on product, services, or enhanced
                          offerings basis a brief questionnare done on mobile
                          devices
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>
                          Business research requiring in-depth AI probing with
                          tailored follow-up questions basis responses from
                          previous questions
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <p>
                          Consumer Insights team seeking more granular verbatim
                          data with quick insights however don’t wish to deploy
                          traditional moderator for qual probing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
              col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 image-size">
              <div className="image-box ind-img-height img-blk-height">
                {/* <Image
                  src={Qprobe}
                  alt="Why Choose SLM"
                  className="img-boxshadow gray-scale"
                /> */}

                <CustomVideo
                  poster={VideoPoster.src}
                  urlsMp4={"/ai/final_video.mp4"}
                  // urlsMp4={"https://ui.e2eresearch.com/website/final_video.mp4"}
                  urlsWebm={"/ai/final_video.webm"}
                />
              </div>
            </div>
          </div>

          <div
            className="
              col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
            <div className="inr-sec mt-3">
              {/* <p className="mb-0">
                <span
                  className="here-click hover-line-effect pointer-cursour"
                  onClick={handleModal}>
                  Contact With Us Today
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/*End */}

      {/* Auto Verb start */}
      <section className="key-capabilities padding-left-x pb-x">
        <div className="container-fluid">
          
          <div className="row mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height raven-key-height">
                <Image
                  src={About_verb}
                  alt="CodeMe AI"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>CodeMe AI</h2>
                <div className="sub-heading">
                  AutoCode and Analyse
                </div>
                <div className="horizontal-row"></div>
              </div>
              <p>
                CodeMe AI is an AI-powered tool designed to generate code frames
                and coded data for open-ended survey questions. Leveraging
                advanced text-based AI algorithms, it creates precise mappings
                that align with the survey’s objectives, domain, and question
                context.{" "}
              </p>
              <div className="container-fluid">
                <div className="inc-hedding margin-ai-sec">
                  <h5>How It's Useful</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Streamlined Coding</h5>
                        <p>
                          Automatically generates and maps code frames, reducing
                          manual effort in coding open-ended responses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Domain-Specific Precision</h5>
                        <p>
                          Ensures generated code frames are relevant to the
                          industry and survey objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-Time Efficiency</h5>
                        <p>
                          Processes verbatims in real time, enabling faster
                          analysis and decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Enhanced Consistency</h5>
                        <p>
                          Uses AI algorithms to maintain uniformity in coding
                          across multiple surveys and domains.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Actionable Insights</h5>
                        <p>
                          Produces coded data, making it easier to extract
                          meaningful trends and patterns from responses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Link
                  href={"/products/raven"}
                  className="read-more right-arrow-hover hover-line-effect read-margin"
                >
                  READ MORE
                  <RightArrow />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}

      {/*QUIQ Start */}
      <section className="inscribee-from-setup gray-background padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row  row-gap-5">
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading-sec res-head">
                <h2>QUIQ</h2>
                <div className="sub-heading">
                  Qualitative Intelligent Quality Score
                </div>
                <div className="horizontal-row"></div>
              </div>
              <p>
                QUIQ is a smart tool that assigns a Relevancy Confidence Score
                to open-ended survey responses in real time. With a score
                ranging from 0.0 to 1.0, it evaluates how relevant and
                meaningful a respondent's answer is to the survey question,
                offering an objective measure of response quality.{" "}
              </p>
              <div className="container-fluid">
                <div className="inc-hedding margin-ai-sec">
                  <h5>How It’s Useful</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Improves Data Quality</h5>
                        <p>
                          Quickly identifies on-topic, meaningful responses
                          versus irrelevant or superficial ones.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Efficient Analysis</h5>
                        <p>
                          Enables researchers to focus on high-quality data,
                          saving time on manual reviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 last-collumn-gap-mobile">
                    <div className="d-flex right-arrow-hover blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Real-Time Feedback</h5>
                        <p>
                          Provides instant scores during surveys, enhancing
                          response evaluation as it happens.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Streamlined Decision-Making</h5>
                        <p>
                          Helps surveyors assess response quality for better
                          insights and decision-making.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={Quiq}
                  alt="Setup Signature"
                  className="img-boxshadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Speak Survey Start */}
      <section className="key-capabilities padding-left-x pb-x">
        <div className="container-fluid">
          <div className="row row-gap-5 mobile-col-reverse">
            <div className="col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4 design-ins">
              <div className="image-box ind-img-height img-blk-height">
                <Image
                  src={Speak_survey}
                  alt="key Features"
                  className="img-boxshadow"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8 design-ins">
              <div className="heading heading-sec res-head key-fr">
                <h2>Speak Survey</h2>
                <div className="sub-heading">Voice-Based Survey Plugin</div>
                <div className="horizontal-row"></div>
              </div>
              <p>
                SpeakSurvey is a versatile AI plugin that transforms traditional
                surveys into voice-based experiences. It seamlessly integrates
                with survey platforms to read questions aloud and capture
                responses through speech interpretation, making surveys
                accessible and convenient.
              </p>
              <div className="container-fluid">
                <div className="inc-hedding margin-ai-sec">
                  <h5>How It’s Useful</h5>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Voice-First Experience</h5>
                        <p>
                          Enables respondents to complete surveys using speech,
                          enhancing accessibility and ease of use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Mobile-Friendly</h5>
                        <p>
                          Allows respondents to fill surveys effortlessly while
                          on the go, especially on mobile devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>One-Time Integration</h5>
                        <p>
                          Quick and simple setup for seamless compatibility with
                          multiple survey platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover  arrow-sec blk-sec-arrow">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Efficient Interaction</h5>
                        <p>
                          Reads questions aloud and accurately records
                          respondent answers, saving time and improving
                          engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="d-flex right-arrow-hover">
                      <RightArrowBullet />
                      <div className="text-container heading-sec sec-paragraph">
                        <h5>Broad Applicability</h5>
                        <p>
                          Ideal for diverse survey environments, ensuring a
                          modern and interactive respondent experience.
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

      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={"Connect With Us Today"}
        contentBody={<ProbeMeAi setIsModalOpen={setIsModalOpen} />}
      />

      <button className="ai-contact" onClick={handleModal}>
        Contact With Us Today
      </button>
    </>
  );
};

export default AI;
