"use client";
import Header from "@/Component/Header";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import FooterLogo from "@/Component/Footer/logoFoter";
import FooterLink from "@/Component/Footer";
import CopyFooter from "@/Component/Footer/copyFooter";
import RightArrow from "@/Component/widgets/RightArrow";
import ISO2052 from "../../../public/homePage/certification/ISO2052.png";
import ISO2013 from "../../../public/homePage/certification/ISOCertified.png";
import ForstaAwards from "../../../public/aboutUs/achievements/forsta_awards.png";
import AceAwards from "../../../public/aboutUs/achievements/ace_awards.png";
import AirAwards from "../../../public/aboutUs/achievements/air_awards.png";
import Insight from "../../../public/aboutUs/achievements/insight.png";
import MarketResearch from "../../../public/aboutUs/achievements/market_research.png";
import RupaRajee from "../../../public/aboutUs/leadershipTeam/rupa_raje.jpg";
import YogeshRana from "../../../public/aboutUs/leadershipTeam/yogesh_rana.jpg";
import SatenderKumar from "../../../public/aboutUs/leadershipTeam/satender kumar.jpg";
import NirajUpadhyay from "../../../public/aboutUs/leadershipTeam/niraj.jpg";
import NeerajOmer from "../../../public/aboutUs/leadershipTeam/neeraj_omer.jpg";
import VinayYadav from "../../../public/aboutUs/leadershipTeam/vinay.jpg";
import Jonathan_Dunn from "../../../public/aboutUs/leadershipTeam/jonathan_Dunn.png";
// import FacebookIcon from "../../../public/aboutUs/leadershipTeam/icon/facebook.svg";
import LinkedinIcon from "../../../public/aboutUs/leadershipTeam/icon/linkedin.svg";
// import TwitterIcon from "../../../public/aboutUs/leadershipTeam/icon/twitter.svg";
import CustomPopup from "@/Component/CustomPopup";
import { useState } from "react";

const leadershipTeam = [
  {
    name: "RUPA RAJE",
    designation: "President, CEO",
    image: RupaRajee,
    aboutUs:
      "<p>With over 28 years of expertise in research and analytics, Rupa A. Raje brings unmatched insight and leadership to the table. She specializes in crafting business strategies, driving innovation, and fostering global partnerships to ensure impactful outcomes for clients.</p> <p>Beyond her professional accomplishments, Rupa is an advocate for a balanced lifestyle. She stays active with a regular fitness routine and finds joy in traveling and trekking, exploring new destinations, and embracing nature's challenges.</p>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/in/ruparaje/",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "YOGESH RANA",
    designation: "COO",
    image: YogeshRana,
    aboutUs:
      "<p>With over 19 years of experience, Yogesh Rana excels in managing large teams and streamlining operations. His expertise in customer relationship management and research techniques ensures seamless collaboration between technology and research teams, empowering them with the resources needed to succeed.</p> <p>Outside the office, Yogesh is a passionate explorer of emerging technologies, an avid cricket player, and finds peace in farming.<p/>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/in/yogeshrana-e2eresearch/",
        icon: LinkedinIcon,
      },

      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "SATENDER KUMAR",
    designation: "AVP - Research Services",
    image: SatenderKumar,
    aboutUs:
      "<p>Satender brings extensive experience in business research, advanced analytics, and business consulting. At E2E, he spearheads research and analytics operations, collaborating with diverse clients across multiple industry verticals. His expertise includes developing end-to-end segmentation models and creating dynamic dashboard solutions tailored to client needs. <p/><p>In his free time, Satender enjoys delving into history and exploring historical landmarks, combining his passion for learning with his love for travel.<p/>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "#",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "NIRAJ UPADHYAY",
    designation: "AVP - Software Development",
    image: NirajUpadhyay,
    aboutUs:
      "<p>With over 18 years of experience, Niraj Upadhyay excels in developing enterprise and consumer products for web and mobile platforms. He specializes in managing the complete product lifecycle, seamlessly steering projects from concept to delivery and ensuring ongoing support.<p/><p> Beyond work, Niraj enjoys watching films, playing tennis, and sharing his expertise by advising tech startups.<p/>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/in/nirajupadhyay82",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "Neeraj Omer",
    designation: "AVP - Survey",
    image: NeerajOmer,
    aboutUs:
      "<p>With 19 years of experience in market research, Neeraj Omer leads E2E's survey-building team, focusing on creating efficient surveys and leveraging automation to streamline processes. His role combines deep technical expertise with strategic oversight, ensuring the seamless delivery of survey-based research solutions. <p/><p>Outside of work, Neeraj enjoys cooking, watching movies, and playing cricket.</p>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "http://linkedin.com/in/neeraj-omer-977b7221",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "Vinay Yadav",
    designation: "AVP - Client Service",
    image: VinayYadav,
    aboutUs:
      "<p>Vinay Yadav leads the client services team, bringing over 16 years of experience in fostering business growth. He is dedicated to delivering outstanding client experiences, cultivating long-term partnerships, and offering innovative business solutions. In his free time, Vinay enjoys quality moments with his dog, hitting the gym, and exploring new travel destinations.<p/>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "https://www.linkedin.com/in/vinay-yadav-4137a728/",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
  {
    name: "Jonathan Dunn",
    designation: "Head of Sales",
    image: Jonathan_Dunn,
    aboutUs:
      "<p>As the Head of Sales at E2E Research, Jonathan brings over 20 years of experience in sales leadership, strategic growth, and customer-centric solutions. With a proven track record in building and leading high-performing sales teams, Jonathan has successfully driven revenue growth and market expansion across multiple sectors and regions.<p/><p>At E2E, Jonathan is responsible for leading the sales strategy, overseeing the business development efforts, as well as ensuring alignment with the company's mission to deliver actionable solutions to our clients' business needs and is excited to continue driving the success of E2E Research by fostering strong client partnerships, scaling growth, and staying ahead of market trends.</p>",
    socilLink: [
      // {
      //   label: "facebook",
      //   link: "#",
      //   icon: FacebookIcon,
      // },
      {
        label: "linkedin",
        link: "http://linkedin.com/in/jonathandunn",
        icon: LinkedinIcon,
      },
      // {
      //   label: "twitter",
      //   link: "#",
      //   icon: TwitterIcon,
      // },
    ],
  },
];

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aboutData, setaboutData] = useState<any>([]);
  const handleOpenAbout = (team: any) => {
    setaboutData(team);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Header />
      <title>About</title>
      <meta
        name="keywords"
        content="E2E was founded in 2010 to provide strong support for clients’ research projects. Since its inception, E2E has evolved from a support system into a trusted agency that interprets data insights. Today, E2E is a one-stop solution for various industries, helping them make informed decisions."></meta>
      <meta
        name="description"
        content="The global voice of the data, research and insights community providing ethical and professional guidance. We are committed to the ICC International Code on Market, Opinion and Social Research, and Data Analytics."></meta>

      {/*Banner Start */}
      <section className="about-us banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left    heading-sec">
              <h1>ABOUT</h1>
            </div>
          </div>
        </div>
      </section>
      {/*End */}
      <Breadcrumb hedding={""} activeUrl={"About"} />
      {/* about us description sec*/}
      <section className="padding-left-x pb-x">
        <div className="container-fluid  research-font-size offering">
          <p>
            Founded in 2010, E2E has grown from a reliable support partner for
            research projects into a trusted agency that transforms data into
            actionable insights. Over the years, we have evolved into a
            comprehensive one-stop solution, serving a diverse range of
            industries and helping businesses make informed decisions. At E2E,
            we blend cutting-edge technology with AI-driven products to deliver
            unparalleled research quality and measurable value. Our approach
            combines expertise, innovation, and a deep commitment to our
            clients' success.
          </p>
          <h5>Our Mission</h5>
          <p>
            To empower businesses to make smarter decisions and achieve
            sustainable growth. We uphold the highest ethical standards,
            implement efficient processes, manage cost-effective project
            budgets, and offer impactful consulting. By integrating advanced
            technology, we strive to elevate the research and consultancy
            experience for our clients.
          </p>
          <p>
            Let us help you turn insights into strategies and strategies into
            success.
          </p>
          {/* <p>
            Our mission is to help businesses make better decisions and drive
            growth. We achieve this by adhering to high ethical standards,
            implementing robust processes, maintaining cost-effective project
            budgets, offering impactful consulting, and integrating advanced
            technology to enhance the overall consultancy experience.
          </p> */}
        </div>
      </section>
      {/*Meet Our Leadership Team*/}
      <section className="leadership-team-con padding-left-x pb-x">
        <div className="container-fluid">
          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Meet Our Leadership Team</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row box-card">
            {leadershipTeam.map((team, index) => {
              return (
                <div
                  key={index}
                  className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                  <div
                    className="about-card-outer"
                    onClick={() => handleOpenAbout(team)}>
                    <div className="about-card-inner">
                      <Image src={team.image} alt={team.name} />
                      <div className="about-social">
                        {team.socilLink.map((socialMedia, index) => {
                          return (
                            <Link
                              key={index}
                              href={"#"}
                              // href={socialMedia.link}
                              // target="_blank"
                            >
                              {<socialMedia.icon />}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="card-desp">
                      <h4>{team.name}</h4>
                      <span>{team.designation}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*END*/}
      {/* about us promise sec*/}

      {/*END*/}
      {/* about us Celebrating Our Achievement sec*/}
      <section className="about-sec-bottom padding-left-x pb-x">
        <div className="container-fluid">
          <div className="research-font-size offering ">
            <p>
              As the global voice of the data, research, and insights community,
              we provide ethical and professional guidance in all our endeavors.
              E2E adheres to the ICC International Code on Market, Opinion, and
              Social Research, and Data Analytics, ensuring the highest
              standards of integrity.
            </p>
          </div>

          <div className="row row-margin mobile-iso">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
              <div className="arrow-blk about-promise">
                <h6>We Promise To</h6>
                <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Maintain transparency with our clients, research
                      participants, partners, and colleagues.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Act ethically and uphold the reputation of the market,
                      opinion, and social research industry.
                    </p>
                  </div>
                </div>
                <div className="d-flex right-arrow-hover sec-paragraph arrow-sec quick-arrow">
                  <RightArrow />
                  <div className="text-container">
                    <p>
                      Ensure robust privacy and information security standards
                      (ISO 20252 – 27001 Certified).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 about-iso">
              <div className="iso-box">
                <Image src={ISO2052} alt="ISO 2052 logo" />
              </div>
              <div className="iso-box">
                <Image src={ISO2013} alt="ISO 27001-2013 logo" />
              </div>
            </div>
          </div>

          <div className="header-container heading-sec research-font-weight res-head">
            <h2>Celebrating Our Achievement</h2>
            <div className="horizontal-row"></div>
          </div>
          <div className="row blk-gap">
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "https://www.realwire.com/releases/Forsta-Announces-2021-AIR-Award-Winners"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={ForstaAwards} alt="Fotsta AIR Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>Judge’s Choice AIR Agency Award,</span>
                  </div>
                  <div className="desc-line">
                    <span>Forsta 2021</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "https://resources.confirmit.com/pressrelease/forsta-announces-2021-ace-awards-winners"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={AceAwards} alt="Fotsta ACE Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>Forsta Announces 2021 ACE Awards</span>
                  </div>
                  <div className="desc-line">
                    <span>Winners</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "https://www.confirmit.com/Company/News/press-release-mr-2020-air-award-winners-k10a/"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={AirAwards} alt="Fotsta Confirmit Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>AIR Agency Award, Confirmit,</span>
                  </div>
                  <div className="desc-line">
                    <span>2020</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "https://www.confirmit.com/Company/News/press-release-mr-2020-air-award-winners-k10a/"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={AirAwards} alt="Fotsta Confirmit Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>AIR Project & Innovation Award, </span>
                  </div>
                  <div className="desc-line">
                    <span>Confirmit, 2020</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "https://issuu.com/insightssuccess4/docs/the_10_successful_business_women_to"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={Insight} alt="Insight Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>The 10 Successful Business Women To</span>
                  </div>
                  <div className="desc-line">
                    <span> Watch, 2018, InsightsSuccess</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 blk-margin">
              <Link
                href={
                  "http://worldmarketingcongress.org/themarketresearchevent/role-player-2016.html"
                }
                target="_blank"
                className="about-achievement-box about-font-size">
                <Image src={MarketResearch} alt="Market Research Awards logo" />
                <div className="achivement-card-desc">
                  <div className="desc-line">
                    <span>
                      Most Influential Market Research Professional, 2016, The
                      Market Research{" "}
                    </span>
                  </div>
                  <div className="desc-line">
                    <span>Summit</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*Main footer */}
      <FooterLogo />
      {/*END*/}
      {/*Url Footer*/}
      <FooterLink />
      {/*END*/}
      {/*Footer Copyright*/}
      <CopyFooter />
      {/*END*/}
      <CustomPopup
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        headerText={""}
        aboutClass="pop-about"
        contentBody={
          <div className="about-pages">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 ">
                  <div className="about-head">
                    {/* <div className="about-name-blk">
                      <div className="about-name">RUPA RAJE</div>
                      <div className="about-ceo">President, CEO</div>
                    </div> */}
                    <div className="card-desp about-name-blk">
                      <h3>{aboutData?.name}</h3>
                      <span>{aboutData?.designation}</span>
                    </div>
                    <div className="about-social">
                      {aboutData &&
                        aboutData?.socilLink?.map(
                          (socialMedia: any, index: number) => {
                            return (
                              //   <a href="#" key={index}>
                              //   {<socialMedia.icon />}
                              // </a>
                              <Link
                                key={index}
                                href={socialMedia.link}
                                target="_blank">
                                {<socialMedia.icon />}
                              </Link>
                            );
                          }
                        )}
                    </div>
                  </div>

                  <div
                    className="about-body"
                    dangerouslySetInnerHTML={{
                      __html: aboutData?.aboutUs,
                    }}></div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 ">
                  <div className="about-img">
                    <Image
                      src={aboutData && aboutData?.image}
                      alt={aboutData?.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default AboutUs;
