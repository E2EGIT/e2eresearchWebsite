"use client";
import Link from "next/link";
import E2ELogo from "../../../public/e2e_logo.svg";
import socialUrls from "../widgets/SubFooter";
import { emilId, phoneNo, message } from "../widgets/Constant";
import RequestAQuote from "../RequestAQuote";
import { useState } from "react";
import CustomPopup from "../CustomPopup";

const FooterLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <section className="footer-sec footer-blk">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-4  d-flex align-items-center">
              <Link href={"/"} className="e2e-logo">
                <E2ELogo />
              </Link>
              <div className="vertical-line  logoline "></div>
            </div>
            {/*right-border */}
            <div className=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3  margin d-flex justify-content-center flex-column space-margin">
              <div className="d-flex align-items-center pb-2">
                {/*Follow us */}
                <span className="contact-font">Follow Us :</span>
                <span className="socal-logo">
                  {/*social-sites */}
                  {socialUrls?.map((urls: any, index: number) => {
                    return (
                      <Link
                        href={urls?.url}
                        target="_blank"
                        key={index}
                        aria-label="E2E Research">
                        <urls.icons />
                        {/* <img src={urls.icons} alt="E2E Research"></img> */}
                      </Link>
                    );
                  })}
                </span>
              </div>
              <div className="d-flex align-items-center pb-1">
                {/*email */}
                <span className="contact-font">Email : </span>
                <Link
                  href="mailto:info@e2eresearch.com"
                  className="info-text hover-line-effect">
                  {emilId}
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <span className="contact-font">Phone : </span>
                <Link
                  href={`tel: ${phoneNo[0]}`}
                  className="info-text hover-line-effect">
                  {" "}
                  {phoneNo[0]}
                </Link>
                {/* <span className="line-slash">/</span>
                <Link
                  href={`tel: ${phoneNo[1]}`}
                  className="info-text hover-line-effect">
                  {phoneNo[1]}
                </Link> */}
              </div>
              {/*End*/}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 help d-flex request-sec">
              {/*help-question */}
              <div className="vertical-line leftline "></div>
              <div className="heading-sec d-flex justify-content-xs-start justify-content-sm-end align-items-center gap-3 flex-wrap flex--nowrap">
                <h2>{message[0]}</h2>
                <button
                  className="quote-btn quote-ptn-padding"
                  onClick={handleModal}>
                  {message[1]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Request Popup*/}
      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={"How can we help you?"}
        contentBody={<RequestAQuote setIsModalOpen={setIsModalOpen} />}
      />
      {/*END*/}
    </>
  );
};

export default FooterLogo;
