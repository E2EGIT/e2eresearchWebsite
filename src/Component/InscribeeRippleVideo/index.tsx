"use client";
import React, { useState } from "react";
import CustomPopup from "../CustomPopup";

const SLMRippleVideo = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div
        className="ripple-icon-video ps-3 ps-md-4 ps-lg-4 ps-xl-4 ps-xxl-4"
        onClick={handleModal}>
        <div className="ripple">
          <button className="play-btn">
            <div className="video-btn"></div>
          </button>
        </div>
      </div>

      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={""}
        modalClass="raven-video-modal"
        contentBody={
          <>
            <video
              controls
              id="revenvideo"
              poster="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/inscribee/inscribee-poster.jpg">
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/inscribee/inscribee-generic-48-seconds-good.mp4"
                type="video/mp4"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/inscribee/inscribee-generic-48-seconds-good.webm"
                type="video/webm"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/inscribee/inscribee-generic-48-seconds-good.ogg"
                type="video/ogg"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/inscribee/inscribee-generic-48-seconds-good.avi"
                type="video/avi"
              />
              Your browser does not support the video tag.
            </video>
          </>
        }
      />
      {/*END*/}
    </>
  );
};

export default SLMRippleVideo;
