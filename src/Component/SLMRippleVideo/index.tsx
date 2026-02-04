"use client";
import React, { useState } from "react";
import CustomPopup from "../CustomPopup";

const InscribeeRippleVideo = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="ripple-icon-video slm-video d-none" onClick={handleModal}>
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
              poster="https://e2eresearch.com/home/wp-content/themes/e2eTheme/v2-images/videoCovers/home-cover.jpeg">
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/home/website-homepage-why-choose-e2e-no-logo.mp4"
                type="video/mp4"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/home/website-homepage-why-choose-e2e-no-logo.ogv"
                type="video/webm"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/home/website-homepage-why-choose-e2e-no-logo.ogv"
                type="video/ogv"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/home/website-homepage-why-choose-e2e-no-logo.avi"
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

export default InscribeeRippleVideo;
