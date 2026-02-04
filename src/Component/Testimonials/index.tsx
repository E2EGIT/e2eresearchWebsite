"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import QuotationMark from "../../../public/homePage/testimonils/noun-quotation-mark.png";
import Testimonial from "../../../public/homePage/testimonils/testimonials.png";
import UpArrow from "../../../public/upArrow.svg";
import Star from "../../../public/homePage/icons/star_full_icon.svg";

const Testimonials = () => {
  const [clickedArrow, setClickedArrow] = useState("");
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick, clickedArrow } = props;
    return (
      <div
        className={
          className +
          ` testimonils-next-arrow arrow ${
            clickedArrow === "right" ? "testi-carousel-btn-active" : ""
          }`
        }
        style={{ ...style }}
        onClick={() => {
          setClickedArrow("right");
          onClick();
        }}
      >
        {" "}
        <UpArrow />
      </div>
    );
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick, clickedArrow } = props;
    return (
      <div
        className={
          className +
          ` testimonils-prev-arrow arrow ${
            clickedArrow === "left" ? "testi-carousel-btn-active" : ""
          }`
        }
        style={{ ...style }}
        onClick={() => {
          setClickedArrow("left");

          onClick();
        }}
      >
        <UpArrow />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    // nextArrow: true,
    // prevArrow: true,
    // arrow,
    // arrows: true,
    nextArrow: <SampleNextArrow clickedArrow={clickedArrow} />,
    prevArrow: <SamplePrevArrow clickedArrow={clickedArrow} />,
  };

  const TestominalJSON = [
    {
      pagragraph:
        "<p>We have been using E2E Research for over a year now and have really enjoyed working with their team. Their 24 hour availability has been really helpful given that we have offices across several different time zones and are often in need of last minute changes to our surveys. The project teams are also all really good about setting expectations and meeting their timelines. They have created a process that is unique our programming needs and utilize an ever changing best practices document that we update together on a consistent basis. Overall, we have had a positive experience working with E2E Research.</p>",
      name: "",
      position: "",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>I can't say enough to thank you all. I know it's been a whirlwind. Thanks for bringing such amazing dedication and expertise to this project. I'm very grateful!</p>",
      name: "Large market research company",
      position: "Director",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>The combination of your support and E2E services has ‘unstuck’ us from our capacity hairball and we are all feeling a bit more focused and on track. Just wanted you to know we greatly appreciate how you’re helping us.</p>",
      name: "Mid-size market research company",
      position: "President",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>I wanted to let you know that we have enjoyed working with your team and have appreciated their flexibility, efficiency, and communication.</p>",
      name: "Mid-size market research company",
      position: "Project Manager",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>Thank you for another successful project! We had a great presentation this week with the client and just wanted to let you know how much we appreciate your support, professionalism and quick turnaround! We love working with your team!</p>",
      name: "Small market research company",
      position: "Founder",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>I just want to say that I really appreciate all the help that the E2E team has been providing. I am happy with everything.</p>",
      name: "Mid-size market research company",
      position: "VP",
      fillStar: 4,
      star: 5,
    },
    {
      pagragraph:
        "<p>We did it!! The project is officially closed and the client is very happy. I simply cannot thank you enough for your work and partnership on this project. Your team has been so incredibly diligent, professional, accommodating and kind the whole way through. I am so grateful and pleased.</p> <p>Thank you so much for everything. Words cannot express!</p>",
      name: "Large market research company",
      position: "Director",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>Thank you to the E2E Research team for supporting us in getting through this incredibility busy and challenging work load. We really appreciate your efforts and want to you know that you’re making a difference for us and our clients</p>",
      name: "Mid-size market research company",
      position: "President",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>Really thank you for all the hard work you guys are doing to execute the test. This is the largest CLT study we have ever done globally and it will give us a lot of valuable learnings to understand how to continue building the product and the brand. We have all seen the prep pictures and we are grateful to have you guys putting the energy to enable us having a flawless execution of the test!</p>",
      name: "Global QSR Company",
      position: "VP Brand Marketing",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>We have been working with E2E Research for several years and are continually impressed with their level of service and proactiveness. E2E Research is knowledgeable, responsive and committed to supporting our market research needs. Their team is a valued partner and an extension of our team, providing quick turnarounds with high quality data analysis and reporting. We highly recommend E2E Research for your survey data analysis and business reporting needs.</p>",
      name: "",
      position: "",
      star: 5,
      fillStar: 4,
    },
    {
      pagragraph:
        "<p>Our firm highly recommends Rupa Raje and her team. They have come through for us every time we have worked together, including some difficult and complex projects and some where time was not on our side. They are thorough, professional, and easy to work with. It's easy to make a good impression on a client when E2E Research has your back!</p>",
      name: "",
      position: "",
      star: 5,
      fillStar: 4,
    },
  ];

  return (
    <Slider {...settings}>
      {TestominalJSON?.map((testominal: any, index: number) => {
        return (
          <div className="testimonial-home-wrap" key={index}>
            <div className="testimonils-con sec-paragraph box-shadow">
              <div
                className="testimonial-box"
                dangerouslySetInnerHTML={{
                  __html: testominal?.pagragraph,
                }}
              ></div>
              {/* <p className="pb-4">
                dangerouslySetInnerHTML={{ __html: testominal?.pagragraph }}
                {testominal?.pagragraph}
              </p> */}
              <div className="border-testimonial">
                <div className="stars">
                  <Star className="star-icon" />
                  <Star className="star-icon" />
                  <Star className="star-icon" />
                  <Star className="star-icon" />
                  <Star className="star-icon white-star-icon" />
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-end auth-abtar">
                <div className="founder">
                  <span>
                    <Image
                      src={Testimonial}
                      alt="Tesimonials"
                      className="dummy-img"
                    />
                  </span>
                  <div className="founder__info ms-3">
                    <div className="ceo-name">{testominal?.name}</div>
                    <div className="ceo-position">{testominal?.position}</div>
                  </div>
                </div>
                <div>
                  <Image
                    src={QuotationMark}
                    alt="quotation mark"
                    className="question-img"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Testimonials;
