// import Link from "next/link";
// import MouseIcon from "../../public/homePage/icons/down_mouse.svg";
// import RightArrow from "../../public/homePage/icons/right_arrow.svg";
// import Testimonials from "@/Component/Testimonials";
// import FooterLink from "@/Component/Footer";
// import FooterLogo from "@/Component/Footer/logoFoter";
// import ISOCertified from "@/Component/ISO";
// import CopyFooter from "@/Component/Footer/copyFooter";
// import Header from "@/Component/Header";
// import HomeTestimonials from "@/Component/Testimonials/HomeSlider";
// import { HomeProduct } from "@/Component/ProductsHome";
// import { ResearchHome } from "@/Component/ResearchHome";
// import { Metadata } from "next";
// import { ServicesHome } from "@/Component/ServicesHome";

// export const metadata: Metadata = {
//   keywords:
//     "AI-driven research, predictive analytics, machine learning, big data, market research, data visualization, consumer research, product development, sensory research, brand insights, survey solutions, business consulting, data science, E2E Research Services Pvt Ltd, ISO-certified research services",
//   description:
//     "E2E Research Services Pvt Ltd empowers businesses across industries with AI-driven data science, predictive analytics, and cutting-edge technology. From market research and consumer insights to innovative products like enGame and Inscribee, we deliver tailored solutions for smarter decisions, improved engagement, and measurable growth. ISO-certified for quality, we specialize in research, consulting, data collection, and visualization, offering unmatched expertise in food and beverage, healthcare, financial services, and beyond.",
// };

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <section className="header-sec">
//         <div className="banner-heading hadder-img">
//           <div className="banner-content left-right-p">
//             <div className="home-heading">
//               UNLOCK THE FUTURE WITH <br />
//               AI-DRIVEN DATA SCIENCE
//             </div>
//             <div className="header-sec__description">
//               {/* E2E BUILDS AI-DRIVEN TOOLS THAT CAN <br />
//               UNLOCK TRANSFORMATIVE INTELLIGENCE <br />
//               AND DATA FINDINGS */}
//               EXPLORE INSIGHTS, RESEARCH AND AI-DRIVEN TOOLS
//               <br />
//               WITH E2E THAT CAN UNLOCK TRANSFORMATIVE <br />
//               INTELLIGENCE AND DATA FINDINGS
//             </div>
//             <Link
//               href={"/products/AI"}
//               className="cu-link-primary hover-effa"
//               aria-label="E2E Research">
//               <span> DISCOVER MORE</span>
//               <span className="right-arrow">
//                 <RightArrow />
//               </span>
//             </Link>{" "}
//           </div>
//           <div className="banner-mouse d-flex justify-content-center">
//             <MouseIcon />
//           </div>
//         </div>
//       </section>
//       <section className="service-sec">
//         {/* <div className="container-fluid"> */}
//         <div className="service-con service-desktop-sec">
//           <ServicesHome />
//         </div>

//         <div className="service-mobile-sec">
//           <HomeTestimonials />
//         </div>

//         {/*Our Servce */}

//         <div className="heading heading-sec overflow-hidden pb-x  heading-margin-top left-right-p res-head">
//           <h2>Services</h2>
//           <div className="sub-heading">
//             INSIGHT-DRIVEN SOLUTIONS : TURNING DATA INTO ACTIONABLE STRATEGY!
//           </div>
//           <div className="horizontal-row"></div>
//         </div>
//         {/*END */}
//       </section>

//       {/*Research & Consulting Start */}
//       <section className="research-and-consulting gray-background res--cons text-center tec-sec">
//         <div className="research-heading heading-sec px-4">
//           <h3>Research & Consulting</h3>
//           <div className="sub-heading">
//             Expert Insights, Strategic Solutions: Empowering Your Business with
//             Research & Consulting!
//           </div>
//           <div className="wrapper d-flex justify-content-center py-2">
//             <div className="horizontal-row"></div>
//           </div>
//         </div>
//         <div className="container-fluid text-center px-4">
//           <div className="row g-2  g-sm-4 ">
//             <ResearchHome />
//           </div>
//         </div>
//       </section>
//       {/*END */}
//       {/*Products Start */}
//       <section className="technology-product-con left-right-p">
//         <div className="heading-sec heading overflow-hidden pb-x  heading-margin-top res-head">
//           <h2>Products</h2>
//           <div className="sub-heading">
//             DRIVING INNOVATION THROUGH CUTTING-EDGE TECHNOLOGY AND PRODUCT
//             EXCELLENCE, <br />
//             SHAPING THE FUTURE WITH SOLUTIONS THAT EMPOWER AND INSPIRE.
//           </div>
//           <div className="horizontal-row"></div>
//         </div>
//         <div className="container-fluid">
//           <HomeProduct />
//         </div>
//         <div className="d-flex justify-content-center d-none">
//           <Link
//             href={"#"}
//             className="btn cu-link-primary mt-30 px-5 text-center btn-box-shadow">
//             LOAD MORE
//             <span className="right-arrow">
//               <RightArrow />
//             </span>
//           </Link>
//         </div>
//       </section>
//       {/*END */}
//       {/*Main Testimonials */}
//       <section className="left-right-p pb-x heading-margin-top margin-b-c ">
//         <div className="heading-sec heading overflow-hidden res-head">
//           <h2>TESTIMONIALS</h2>
//           <div className="sub-heading">
//             OUR CLIENTS TRUST US AND VALUE OUR PARTNERSHIP
//           </div>
//           <div className="horizontal-row"></div>
//         </div>
//         <div className="slider-con">
//           <Testimonials />
//         </div>
//       </section>
//       {/*END */}
//       {/*Certificartion Start*/}
//       <ISOCertified />
//       {/*END */}
//       {/*Main footer */}
//       <FooterLogo />
//       {/*END*/}
//       {/*Url Footer*/}
//       <FooterLink />
//       {/*END*/}
//       {/*Footer Copyright*/}
//       <CopyFooter />
//       {/*END*/}
//       {/* <Search /> */}
//     </>
//   );
// }

import Link from "next/link";
// import Image from "next/image";
import MouseIcon from "../../public/homePage/icons/down_mouse.svg";
import RightArrow from "../../public/homePage/icons/right_arrow.svg";
import Testimonials from "@/Component/Testimonials";
import FooterLink from "@/Component/Footer";
import FooterLogo from "@/Component/Footer/logoFoter";
import ISOCertified from "@/Component/ISO";
import CopyFooter from "@/Component/Footer/copyFooter";
import Header from "@/Component/Header";
import HomeTestimonials from "@/Component/Testimonials/HomeSlider";
import { HomeProduct } from "@/Component/ProductsHome";
import { ResearchHome } from "@/Component/ResearchHome";
import { Metadata } from "next";
import { ServicesHome } from "@/Component/ServicesHome";

export const metadata: Metadata = {
  title:
    "  Empowering Businesses with AI-Driven Data Science & Research Solutions E2E Research Services Pvt Ltd",
  keywords:
    "AI-driven research, predictive analytics, machine learning, big data, market research, data visualization, consumer research, product development, sensory research, brand insights, survey solutions, business consulting, data science, E2E Research Services Pvt Ltd, ISO-certified research services",
  description:
    "E2E Research Services Pvt Ltd empowers businesses across industries with AI-driven data science, predictive analytics, and cutting-edge technology. From market research and consumer insights to innovative products like enGame and Inscribee, we deliver tailored solutions for smarter decisions, improved engagement, and measurable growth. ISO-certified for quality, we specialize in research, consulting, data collection, and visualization, offering unmatched expertise in food and beverage, healthcare, financial services, and beyond.",
};

export default function Home() {
  return (
    <>
      <Header />
      <section className="header-sec">
        {/* LCP Hero Section - Critical for performance */}
        <div className="banner-heading hadder-img">
          {/* Preload hero image in your layout or document head */}
          {/* <link
            rel="preload"
            href="/path-to-your-hero-image.jpg"
            as="image"
            fetchPriority="high"
          /> */}

          {/* If using a background image */}
          <div
            className="banner-content left-right-p"
            style={{
              // backgroundImage: "url(/path-to-your-hero-image.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            <div className="home-heading">
              UNLOCK THE FUTURE WITH <br />
              AI-DRIVEN DATA SCIENCE
            </div>
            <div className="header-sec__description">
              EXPLORE INSIGHTS, RESEARCH AND AI-DRIVEN TOOLS
              <br />
              WITH E2E THAT CAN UNLOCK TRANSFORMATIVE <br />
              INTELLIGENCE AND DATA FINDINGS
            </div>
            <Link
              href={"/products/AI"}
              className="cu-link-primary hover-effa"
              aria-label="E2E Research"
              prefetch={false} // Optional: disable prefetch if not critical
            >
              <span> DISCOVER MORE</span>
              <span className="right-arrow">
                <RightArrow />
              </span>
            </Link>
          </div>
          <div className="banner-mouse d-flex justify-content-center">
            <MouseIcon />
          </div>
        </div>
      </section>

      {/* Rest of your content with optimizations */}
      <section className="service-sec">
        <div className="service-con service-desktop-sec">
          <ServicesHome />
        </div>
        <div className="service-mobile-sec">
          <HomeTestimonials />
        </div>

        <div className="heading heading-sec overflow-hidden pb-x heading-margin-top left-right-p res-head">
          <h2>Services</h2>
          <div className="sub-heading">
            INSIGHT-DRIVEN SOLUTIONS : TURNING DATA INTO ACTIONABLE STRATEGY!
          </div>
          <div className="horizontal-row"></div>
        </div>
      </section>

      <section className="research-and-consulting gray-background res--cons text-center tec-sec">
        <div className="research-heading heading-sec px-4">
          <h3>Research & Consulting</h3>
          <div className="sub-heading">
            Expert Insights, Strategic Solutions: Empowering Your Business with
            Research & Consulting!
          </div>
          <div className="wrapper d-flex justify-content-center py-2">
            <div className="horizontal-row"></div>
          </div>
        </div>
        <div className="container-fluid text-center px-4">
          <div className="row g-2 g-sm-4">
            <ResearchHome />
          </div>
        </div>
      </section>

      <section className="technology-product-con left-right-p">
        <div className="heading-sec heading overflow-hidden pb-x heading-margin-top res-head">
          <h2>Products</h2>
          <div className="sub-heading">
            DRIVING INNOVATION THROUGH CUTTING-EDGE TECHNOLOGY AND PRODUCT
            EXCELLENCE, <br />
            SHAPING THE FUTURE WITH SOLUTIONS THAT EMPOWER AND INSPIRE.
          </div>
          <div className="horizontal-row"></div>
        </div>
        <div className="container-fluid">
          <HomeProduct />
        </div>
      </section>

      <section className="left-right-p pb-x heading-margin-top margin-b-c">
        <div className="heading-sec heading overflow-hidden res-head">
          <h2>TESTIMONIALS</h2>
          <div className="sub-heading">
            OUR CLIENTS TRUST US AND VALUE OUR PARTNERSHIP
          </div>
          <div className="horizontal-row"></div>
        </div>
        <div className="slider-con">
          <Testimonials />
        </div>
      </section>

      <ISOCertified />
      <FooterLogo />
      <FooterLink />
      <CopyFooter />
    </>
  );
}
