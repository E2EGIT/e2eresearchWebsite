import React from "react";
import "./Loader.scss";

const Loader = ({ open }: any) => {
  return (
    open && (
      <div className="loader-overlay">
        <span className="loader"></span>
      </div>
    )
  );
};

export default Loader;
