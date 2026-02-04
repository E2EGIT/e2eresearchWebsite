import ISO2052 from "../../../public/homePage/certification/ISO2052.png";
import ISOimage from "../../../public/homePage/certification/ISOCertified.png";
import Image from "next/image";

const ISOCertified = () => {
  return (
    <>
      <section className="certification-section d-md-flex d-block hover-iso">
        <div className="certification-content sec-paragraph white-color flex-grow-4 left-right-p pb-x">
          <div className="heading-sec heading overflow-hidden res-head">
            <h2>ISO CERTIFICATION</h2>
            <div className="sub-heading">
              CONSISTENT HIGH STANDARDS OF QUALITY​
            </div>
            <div className="horizontal-row white-border"></div>
          </div>
          <p>
            We are committed to the ethical and professional standards of the
            ICC International Code on Market, Opinion and Social Research, and
            Data Analytics. We are certified to ISO 20252 – 27001.
          </p>
        </div>
        <div className="certification-image w-20 d-flex justify-content-center align-items-center left-right-p pb-x">
          <Image
            src={ISO2052}
            alt="ISO certification, International Orginization for Standardization"
            className="iso-left"
          />
          <Image
            src={ISOimage}
            alt="ISO certification Certified Company 2013"
          />
        </div>
      </section>
    </>
  );
};

export default ISOCertified;
