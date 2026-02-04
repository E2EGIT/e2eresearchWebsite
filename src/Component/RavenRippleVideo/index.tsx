"use client";
import React, { useState } from "react";
import CustomPopup from "../CustomPopup";

const RavenRippleVideo = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="ripple-icon-video d-none" onClick={handleModal}>
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
              poster="https://e2eresearch.com/home/wp-content/uploads/raven_thumbnail1.jpg">
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/raven/raven.mp4"
                type="video/mp4"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/raven/raven.webm"
                type="video/webm"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/raven/raven.ogv"
                type="video/ogv"
              />
              <source
                src="https://e2eresearch.com/home/wp-content/themes/e2eTheme/videos/raven/raven.avi"
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

export default RavenRippleVideo;
