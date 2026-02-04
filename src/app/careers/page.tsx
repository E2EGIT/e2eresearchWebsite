import Breadcrumb from "@/Component/widgets/BreadCrumb";
import Link from "next/link";
import "../services/global_services.scss";

import { Metadata } from "next";
import https from "https";

import NextTopLoader from "nextjs-toploader";
import { ProgressBarShow } from "@/Component/ProgressBarHeader";
import Header from "@/Component/Header";
import FooterLogo from "@/Component/Footer/logoFoter";
import FooterLink from "@/Component/Footer";
import CopyFooter from "@/Component/Footer/copyFooter";

import RightArrow from "@/Component/widgets/RightArrow";

export const metadata: Metadata = {
  title:
    "Join Our Team: A Commitment to Diversity and Excellence| E2E Research",
  keywords:
    "Diverse team, Experienced researchers, technical developers, business leaders, expertise, healthy work-life",
  description:
    "Be part of a diverse team focused on delivering exceptional research experiences. We prioritize employee well-being and welcome fresh ideas. Explore opportunities now!",
};

interface JobPosting {
  id: number;
  title: string;
  location: string;
}

type Repo = JobPosting[];

async function fetchRepoData(): Promise<Repo> {
  return new Promise((resolve, reject) => {
    https
      .get("https://ui.e2eresearch.com/website/jobposting.json", (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

const Career = async () => {
  const careerData: Repo = await fetchRepoData();

  return (
    <>
      <NextTopLoader showSpinner={false} color="#f05a5c" />
      <ProgressBarShow />
      <Header />
      {/*Banner Start */}
      <section className="careers-banner-bg banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left  ">
              <h1>CAREERS</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb hedding={""} activeUrl={"Careers"} />
      {/*Careers Start */}
      {/*Description Start */}
      <section className="research-consulting light-gray-bg padding-left-x pb-x career-desc">
        <div className="container-fluid">
          <div className="research-font-size research-font-lineheight offering">
            <p>
              We are a diverse team of experienced researchers, technical
              developers, and business leaders who aim to offer our partners the
              best possible research experience. We’re always looking for people
              who bring diverse experiences, expertise, and fresh ideas to make
              the research experience even better.
            </p>

            <p>
              We care about every person on our team. We value diversity and
              encourage our employees to maintain a healthy work-life. We hire
              the whole person, not just a part of them.
            </p>

            <p>
              If one of our opportunities seems like a perfect fit, please email
              your CV, references, and cover letter to{" "}
              <Link
                href={"mailto:career@e2eresearch.com"}
                className="here-click link-text-decoration-none hover-line-effect">
                career@e2eresearch.com
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/*End */}
      {/*career job posting*/}
      <section className="padding-left-x pb-x">
        <div className="container-fluid">
          <div className="heading-sec heading career-heading res-head">
            <h2>Current Job Posting</h2>
            <div className="sub-heading">
              INSPIRING CREATIVITY, ENHANCING TECHNICAL MASTERY
            </div>
            <div className="horizontal-row"></div>
          </div>
          <div className="careers-card-con">
            {/* <div className="no-job-opening">
              <h6>Current Job Openings</h6>
              <p>No positions are available at the moment.</p>
            </div> */}
            {/* card*/}
            {careerData?.map((job: any, jobIdx: number) => {
              return (
                <div className="career-card gray-background" key={jobIdx}>
                  <div className="career-card-heading">
                    <h5>{job?.jobTitile}</h5>
                  </div>
                  <div className="career-card-sub slm-pefet">
                    <p className="sub-head-info">
                      <span>Openings :</span>
                      <span> {job?.opening}</span>
                    </p>
                    <p className="sub-head-info">
                      <span>Location :</span>
                      <span> {job?.location}</span>
                    </p>
                    <p className="sub-head-info">
                      <span>Experience :</span>
                      <span> {job?.experience}</span>
                    </p>
                  </div>
                  <h6>Job Description:</h6>
                  <p>{job?.jobDescription}</p>
                  <div className="slm-pefet">
                    <div className="career-req-heading">
                      <h6>Key Responsibilities</h6>
                      <span>Working Hours : {job?.workingTime}</span>
                    </div>
                    <div className="row card-bullet-con">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="my-3">
                          {job?.responsibilities?.left?.map(
                            (
                              responsibility: any,
                              responsibilityIdx: number
                            ) => {
                              return (
                                <div
                                  className={`d-flex right-arrow-hover arrow-sec sec-paragraph ${
                                    job?.responsibilities?.left?.length - 1 !==
                                      responsibilityIdx && "quick-arrow"
                                  }`}
                                  key={responsibilityIdx}>
                                  <RightArrow />
                                  <div
                                    className="text-container"
                                    key={responsibilityIdx}>
                                    <p>{responsibility}</p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="my-3">
                          {job?.responsibilities?.right?.map(
                            (
                              responsibility: any,
                              responsibilityIdx: number
                            ) => {
                              return (
                                <div
                                  className={`d-flex right-arrow-hover arrow-sec sec-paragraph ${
                                    job?.responsibilities?.right?.length - 1 !==
                                      responsibilityIdx && "quick-arrow"
                                  }`}
                                  key={responsibilityIdx}>
                                  <RightArrow />
                                  <div
                                    className="text-container"
                                    key={responsibilityIdx}>
                                    <p>{responsibility}</p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slm-pefet">
                    <div className="career-req-heading">
                      <h6>Required Skills & Qualifications:</h6>
                    </div>
                    <div className="row card-bullet-con">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="my-3">
                          {job?.requirements?.left?.map(
                            (requirement: any, requirementIdx: any) => {
                              return (
                                <div
                                  className={`d-flex right-arrow-hover arrow-sec sec-paragraph ${
                                    job?.requirements?.left?.length - 1 !==
                                      requirementIdx && "quick-arrow"
                                  }`}
                                  key={requirementIdx}>
                                  <RightArrow />
                                  <div
                                    className="text-container"
                                    key={requirementIdx}>
                                    <p>{requirement}</p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="my-3">
                          {job?.requirements?.right?.map(
                            (requirement: any, requirementIdx: any) => {
                              return (
                                <div
                                  className={`d-flex right-arrow-hover arrow-sec sec-paragraph ${
                                    job?.requirements?.right?.length - 1 !==
                                      requirementIdx && "quick-arrow"
                                  }`}
                                  key={requirementIdx}>
                                  <RightArrow />
                                  <div
                                    className="text-container"
                                    key={requirementIdx}>
                                    <p>{requirement}</p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-paragraph slm-pefet">
                    <p>
                      Write to us at :{" "}
                      <Link
                        href={"mailto:career@e2eresearch.com"}
                        className="here-click link-text-decoration-none">
                        career@e2eresearch.com
                      </Link>
                    </p>
                  </div>
                </div>
              );
            })}
            {/* <div className="career-card gray-background">
              <div className="career-card-heading">
                <h5>Python/Sr. Python Developer – Delhi</h5>
              </div>
              <div className="career-card-sub slm-pefet">
                <p className="sub-head-info">
                  <span>Openings :</span>
                  <span> 1</span>
                </p>
                <p className="sub-head-info">
                  <span>Location :</span>
                  <span> Delhi</span>
                </p>
                <p className="sub-head-info">
                  <span>Experience :</span>
                  <span> 4-8 years</span>
                </p>
              </div>
              <p>
                We are seeking a highly skilled and experienced Lead Automation
                QA Engineer to join our team in Gurgaon. The ideal candidate
                will have a strong background in automation testing, with deep
                expertise in JavaScript and hands-on experience with the Cypress
                framework. This role requires strong logical and analytical
                skills, excellent communication, and a proactive approach to
                problemsolving.
              </p>
              <div className="slm-pefet">
                <div className="career-req-heading">
                  <h6>Key Responsibilities</h6>
                  <span>Working Hours : 11 AM to 9 PM</span>
                </div>
                <div className="row card-bullet-con">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="my-3">
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />
                        <div className="text-container">
                          <p>
                            Deep expertise in AWS, including services like EC2,
                            Lambda, and S3
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>Proficiency in Python</p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Experience with frameworks such as Flask or FastAPI
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Expertise in designing scalable, high-performance
                            systems
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Familiarity with Docker and container orchestration
                            (Kubernetes experience is a plus)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="my-3">
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />
                        <div className="text-container">
                          <p>
                            Strong foundation in Data Structures and Algorithms
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Deep expertise in AWS, including services like EC2,
                            Lambda, and S3
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Strong understanding of Relational and NoSQL
                            databases
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Knowledge of microservices architecture and
                            event-driven systems
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Hands-on experience with CI/CD pipelines (e.g.,
                            Jenkins, GitLab, or AWS CodePipeline)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slm-pefet">
                <div className="career-req-heading">
                  <h6>Backend Engineer Key Requirements</h6>
                </div>
                <div className="row card-bullet-con">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="my-3">
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />
                        <div className="text-container">
                          <p>
                            Deep expertise in AWS, including services like EC2,
                            Lambda, and S3
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>Proficiency in Python</p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Experience with frameworks such as Flask or FastAPI
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Expertise in designing scalable, high-performance
                            systems
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Familiarity with Docker and container orchestration
                            (Kubernetes experience is a plus)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="my-3">
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />
                        <div className="text-container">
                          <p>
                            Strong foundation in Data Structures and Algorithms
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Deep expertise in AWS, including services like EC2,
                            Lambda, and S3
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Strong understanding of Relational and NoSQL
                            databases
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover arrow-sec sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Knowledge of microservices architecture and
                            event-driven systems
                          </p>
                        </div>
                      </div>
                      <div className="d-flex right-arrow-hover sec-paragraph quick-arrow">
                        <RightArrow />

                        <div className="text-container">
                          <p>
                            Hands-on experience with CI/CD pipelines (e.g.,
                            Jenkins, GitLab, or AWS CodePipeline)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-paragraph slm-pefet">
                <p>
                  Write to us at :{" "}
                  <Link
                    href={"mailto:career@e2eresearch.com"}
                    className="here-click link-text-decoration-none">
                    career@e2eresearch.com
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*End */}
      <FooterLogo />
      <FooterLink />
      <CopyFooter />
    </>
  );
};

export default Career;
