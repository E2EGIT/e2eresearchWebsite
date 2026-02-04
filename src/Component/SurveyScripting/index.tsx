import React from "react";
import Survey from "../../../public/ourservice/surveyscripting/survey.svg";
import Scripting from "../../../public/ourservice/surveyscripting/scripting.svg";
import Dataquality from "../../../public/ourservice/surveyscripting/dataquality.svg";
import Crossplatform from "../../../public/ourservice/surveyscripting/crossplatform.svg";

const SurveyScripting = () => {
  return (
    <section className="survey-scripting ">
      <div className="header-container">
        <div className="heading-sec survey-script__text res-head">
          <h2>Survey Scripting & Customizations</h2>
          <div className="horizontal-row"></div>
        </div>
        <p>
          Our team brings extensive expertise in{" "}
          <b>
            complex survey design, logic implementation, and scripting using
            industry-leading tools
          </b>{" "}
          like Qualtrics, Confirmit, Decipher, Dimension, Sawtooth etc. From
          multi-layered question flows to sophisticated respondent segmentation
          and data validation, we ensure every aspect of your survey runs
          seamlessly, delivering quality data you can rely on.
        </p>
        <div className="our-expertise hedding-sb-head ">
          <h6>Our Expertise</h6>

          <div className="row sec-blk-row blk-gap">
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
                <Survey className="data-c-icon" />
                <h6>Custom Survey Setups</h6>
                <p>
                  We craft bespoke survey experiences that meet unique study
                  needs, incorporating elements like conditional branching,
                  randomization, and custom quotas.
                </p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec d-flex flex-column  align-items-center card-wrapper hover-svg-blk">
                <Scripting className="data-c-icon" />
                <h6>Advanced Scripting Capabilities</h6>
                <p>
                  Our proficiency with major survey scripting tools allows us to
                  design interactive and user-friendly surveys, integrating
                  everything from dynamic visuals to complex question logic.
                </p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
                <Dataquality className="data-c-icon" />
                <h6>Data Quality and Integrity</h6>
                <p>
                  We employ robust checks and controls to ensure respondent
                  quality and accurate data collection, including real-time
                  monitoring and automated quality checks.
                </p>
              </div>
            </div>
            <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
              <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
                <Crossplatform className="data-c-icon" />
                <h6>Mobile and Cross-Platform Optimization</h6>
                <p>
                  With respondents increasingly using mobile devices, we
                  optimize surveys to ensure a smooth, engaging experience
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="research-goal dashboard-head margin-b">
          <h6>How We Support Your Research Goals</h6>
          <p>
            Whether you're looking to run large-scale tracking studies, tackle
            challenging respondent logic, or create visually engaging surveys,
            our team has the knowledge and tools to deliver. We work closely
            with you to understand your research objectives and provide custom
            solutions that yield actionable insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurveyScripting;
