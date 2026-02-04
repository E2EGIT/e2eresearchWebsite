"use client";
import { useState } from "react";
import CustomPopup from "../CustomPopup";
import AskForADemoForm from "../AskForADemoForm";

const GetStarted = (props: any) => {
  const { pageContent, subHedding } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <section className="secondary-bg-color ask-ques padding-left-x">
        <h2 className="font-color-white">GET STARTED TODAY!</h2>
        <div className="sub-heading font-color-white">{subHedding}</div>
        <button className="get-started-btn" onClick={handleModal}>
          Ask for a demo today!
        </button>
      </section>
      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={`To set up the demo for ${pageContent}`}
        modalClass="ask-demo-form"
        contentBody={
          <AskForADemoForm
            productName={pageContent}
            setIsModalOpen={setIsModalOpen}
          />
        }
      />
    </>
  );
};

export default GetStarted;
