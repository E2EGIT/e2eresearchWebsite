"use client";
import React, { useState } from "react";
import CustomPopup from "../CustomPopup";
import RequestAQuote from "../RequestAQuote";

type PropsType = {
  text: any;
};
const ModalOpener = (props: PropsType) => {
  const { text } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <span>
      <span className="here-click hover-line-effect pointer-cursour" onClick={handleModal}>
        {text}
      </span>

      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={"How can we help you?"}
        contentBody={<RequestAQuote setIsModalOpen={setIsModalOpen} />}
      />
    </span>
  );
};

export default ModalOpener;
