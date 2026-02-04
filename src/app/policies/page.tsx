import Breadcrumb from "@/Component/widgets/BreadCrumb";
import RightArrow from "@/Component/widgets/RightArrow";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E2E's Approach to Ethical Data Usage| E2E Research",
  keywords: "Data Collection, Data usage, Cookies, Usage of cookies",
  description:
    "E2E specializes in global research and analytics, focusing on effective marketing solutions and safeguarding consumer data privacy with responsible information handling practices.",
};

const Policies = () => {
  return (
    <>
      {/*Banner Start */}
      <section className="policies banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left  ">
              <h1>Policies</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      {/*Breadcrumb start*/}
      <Breadcrumb hedding={""} activeUrl={"Policies"} />
      {/*About E2e Start*/}
      <section className="policies-section padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight inr-sec res-head">
            <h2>Privacy Policy (Effective September 1, 2019)</h2>
          </div>
          <div className="survey-scripting survey-script-pt">
            <h4>About E2E</h4>
            <p>
              At E2E, a global leader in research and analytics, we prioritize
              the data and privacy of our clients and their consumers. Our core
              business revolves around delivering marketing research and
              analytical solutions, and we ensure that the information we
              collect, and process is handled responsibly and securely.
            </p>
            <p>
              When providing services to our clients, E2E processes information
              strictly in accordance with the terms outlined in our contracts.
              As a data processor, we rely on our clients' instructions
              regarding the use of this information. By visiting our website and
              interacting with us electronically, you consent to the secure
              cross-border transfer of your information, if applicable.
            </p>
            <p>
              We do not share, sell, rent, or trade personally identifiable
              information with third parties for promotional or marketing
              purposes.
            </p>
          </div>

          {/*Topics Start*/}
          <div className=" survey-scripting">
            <h4>Topics</h4>
            <div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Data Collection</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Data Usage</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Cookies</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Usage of Cookies</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph quick-arrow policies-arrow ">
                <RightArrow />
                <div className="text-container">
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
          {/*End*/}
          {/*Data Collection Start*/}
          <div className="survey-scripting">
            <h4>Data Collection</h4>
            <p>
              We collect personal information only when necessary, such as when
              you complete a form on our website. Information we may collect
              includes:
            </p>
            <div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>First and last name</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Company name</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Job title</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Email address and phone number</p>
                </div>
              </div>
            </div>
          </div>
          {/*End*/}
          {/*Collect Start*/}
          <div className="survey-scripting">
            <h4>Website Interaction Details</h4>
            {/* <h4>We also collect</h4> */}

            <div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Pages you visit on our site</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Navigation patterns </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Cookie data (with your consent)</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Inferred company name and location based on IP address</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>Date and time of website interactions </p>
                </div>
              </div>
              {/* <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>The date and time of your actions</p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>E-mail address and phone number</p>
                </div>
              </div> */}
            </div>
            <p>
              If you do not enable cookies, our website may not recognize you on
              subsequent visits.
            </p>
          </div>
          {/*End*/}
          <div className=" survey-scripting">
            <h4>Other Scenarios of Data Collection</h4>
            <div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    When you fill forms, inquire about services, attend events,
                    visit our facilities, or interact with us online/offline.
                  </p>
                </div>
              </div>
              <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
                <RightArrow />
                <div className="text-container">
                  <p>
                    For job applicants, personal information provided during the
                    hiring process is stored securely and used exclusively for
                    recruitment purposes.
                  </p>
                </div>
              </div>
              <p>
                We do not sell or rent personal information provided during
                recruitment for any other purposes.
              </p>
            </div>
          </div>

          {/*Data usage Start*/}
          <div className="survey-scripting">
            <h4>Data Usage</h4>
            <p>The data collected is used to:</p>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
              <RightArrow />
              <div className="text-container">
                <p>
                  Send periodic emails related to your requests, such as
                  research content, updates, or relevant information.
                </p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
              <RightArrow />
              <div className="text-container">
                <p>
                  Share resources like case studies, blogs, press releases,
                  product information, or demos.
                </p>
              </div>
            </div>
          </div>
          {/*End*/}
          <div className=" survey-scripting">
            <h4>Security Measures</h4>
            <p>
              We implement stringent security measures, adhering to privacy laws
              and ISO 27001 standards, to protect personal information against
              unauthorized access, accidental loss, or disclosure. While we
              strive to ensure the security of transmitted data, inherent risks
              in internet communication remain.{" "}
            </p>
          </div>

          <div className=" survey-scripting">
            <h4>Acceptance of Terms</h4>
            <p>
              By using our website, you acknowledge that you have read and agree
              to this Privacy Policy. If you disagree, please refrain from using
              our site. E2E reserves the right to amend this policy as
              necessary. Continued use of the website implies acceptance of any
              updates.
            </p>
          </div>

          <div className="header-container heading-sec research-font-weight policy-heading-pt">
            <h2>Cookie Policy (Effective September 1, 2019)</h2>
          </div>
          {/*Cookies Start*/}

          <div className="cookies-sec survey-scripting">
            <h4>What Are Cookies?</h4>
            <p>
              Cookies are text files placed on your device to collect
              information such as log details and browsing behaviour.
            </p>
          </div>

          {/*End*/}
          {/*Cookies Start*/}
          <div className=" survey-scripting">
            <h4>Usage of Cookies</h4>
            <p>
              We use cookies, including Google Analytics, to monitor visitor
              behaviour and improve our website and services. Cookies record:
            </p>

            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
              <RightArrow />
              <div className="text-container mr-mobile">
                <p>Pages visited on our website</p>
              </div>
            </div>
            <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow policies-arrow">
              <RightArrow />
              <div className="text-container mr-mobile">
                <p>IP address, duration, and frequency of visits</p>
              </div>
            </div>
            <p className="import-blk">
              Important Note: This data applies only to your activity on{" "}
              <a
                className="here-click link-text-decoration-none hover-line-effect"
                href="https://e2eresearch.com/">
                www.e2eresearch.com
              </a>
              . If you have any questions about this Privacy Policy or Cookie
              Policy, please contact us.
            </p>
          </div>
          {/*End*/}
          {/*Contact Us*/}
          <div className=" survey-scripting pb-0">
            <h4>Contact us</h4>
            {/* <p>Contact us for any questions.</p> */}
            <p>
              Email us:{" "}
              <Link
                href="mailto:info@e2eresearch.com"
                className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                info@e2eresearch.com
              </Link>
              <br />
              Call us:{" "}
              <Link
                href={`tel: +91-1120897708`}
                className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                {" "}
                +91-1120897708
              </Link>
              {/* <span className="line-slash link-hover-color">/</span> */}
              {/* <Link
                href={`tel: +91-1120897709`}
                className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                +91-1120897709
              </Link> */}{" "}
              (1 PM to 9 PM IST, Monday to Friday)
              <br />
              Eros Metro Building , Level One, Sector 14
              <br />
              Dwarka, New Delhi -110075
            </p>
          </div>
        </div>
      </section>
      {/*End*/}
    </>
  );
};

export default Policies;
