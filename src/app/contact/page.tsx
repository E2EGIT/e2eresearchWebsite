"use client";

import Breadcrumb from "@/Component/widgets/BreadCrumb";
import Link from "next/link";
import { emilId, phoneNo } from "@/Component/widgets/Constant";
import GoogleMapShow from "@/Component/GoogleMap";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Captcha from "@/Component/Captcha";
import Loader from "@/Component/Loader";
import { toast } from "react-toastify";
import { FormsData } from "@/validation-schema/Form-validation-schema";

const ContactUs = () => {
  const [captchaCode, setCaptchaCode] = useState<string>("");

  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [invalidCaptcha, SetInvalidCaptcha] = useState<boolean>(false);
  const [loader, SetLoader] = useState<boolean>(false);

  type FormSchemaType = z.infer<typeof FormsData>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormsData),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data: any) => {
    if (inputCaptcha !== captchaCode) {
      reSetCaptcha();
      SetInvalidCaptcha(true);
    } else {
      SetLoader(true);
      SetInvalidCaptcha(false);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/form/contact-us`,
          // "http://localhost:3001/api/form/contact",
          {
            method: "POST", // HTTP method
            headers: {
              "Content-Type": "application/json", // Specify the content type as JSON
            },
            body: JSON.stringify(data), // Send data as JSON string
          }
        );
        reset();
        reSetCaptcha();
        if (!response.ok) {
          toast.error("something went wrong. Please try again", {
            autoClose: 3000,
            closeOnClick: true,
            theme: "colored",
          });
          document.body.style.overflow = "visible";
          throw new Error(`Response status: ${response.status}`);
        }
        SetLoader(false);
        document.body.style.overflow = "visible";
        toast.success("Request received! We'll respond shortly.", {
          autoClose: 3000,
          closeOnClick: true,
          theme: "colored",
        });
      } catch (error) {
        document.body.style.overflow = "visible";
        reSetCaptcha();
        console.error("Error:", error);
        SetLoader(false); // Catch any errors (e.g., network errors or issues parsing JSON)
        toast.error("something went wrong. Please try again", {
          autoClose: 3000,
          closeOnClick: true,
          theme: "colored",
        });
      }
    }
  };
  const handleCaptchaGenerate = (captcha: string) => {
    setCaptchaCode(captcha);
  };
  const captchRef: any = useRef();

  const reSetCaptcha = () => {
    setInputCaptcha("");
    captchRef.current.genCaptcha();
  };

  return (
    <>
      <Loader open={loader} />
      <section className="contact-us banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 bg-image-left  ">
              <h1>CONTACT</h1>
            </div>
          </div>
        </div>
      </section>
      <title>Discover E2E Research: Your Contact Guide| E2E Research</title>
      <meta
        name="keywords"
        content="React out, Contact us, Support, Guide, Query, Connect"></meta>
      <meta
        name="description"
        content="Reach out to E2E Research for comprehensive support on our products and services. We are here to help you with all your research needs."></meta>

      {/*Banner Start */}

      {/*End */}
      <Breadcrumb hedding={""} activeUrl={"Contact"} />
      {/* about us description sec*/}
      <section className="contact-us-contact light-gray-bg padding-left-x contact-sec pb-x">
        <div className="container-fluid">
          <div className="row contact-row-gap">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="header-container heading-sec res-head">
                <h2>India</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="conatct-blk">
                <p>
                  Eros metro building , Level One, Sector 14
                  <br /> Dwarka New Delhi -110075
                </p>
                <div className=" contact-details">
                  <span className="contact-font">Phone : </span>{" "}
                  <Link
                    href={`tel: ${phoneNo[0]}`}
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                    {" "}
                    {phoneNo[0]}
                  </Link>
                  {/* <span className="line-slash link-hover-color">/</span>
                  <Link
                    href={`tel: ${phoneNo[1]}`}
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color"
                  >
                    {phoneNo[1]}
                  </Link> */}
                </div>
                <div className="d-flex align-items-center ">
                  {/*email */}
                  <span className="contact-font">Email : </span>
                  <Link
                    href="mailto:info@e2eresearch.com"
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                    {" "}
                    {emilId}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="header-container heading-se res-head">
                <h2>US</h2>
                <div className="horizontal-row"></div>
              </div>
              <div className="conatct-blk">
                <p>
                  98 Cuttermill Road Suite 466 S<br /> Great Neck, NY 11021
                </p>
                <div className=" contact-details">
                  <span className="contact-font">Phone : </span>
                  <Link
                    href={`tel: ${phoneNo[0]}`}
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                    {" "}
                    {phoneNo[0]}
                  </Link>
                  {/* <span className="line-slash contact-line-slash-color link-hover-color">
                    /
                  </span>
                  <Link
                    href={`tel: ${phoneNo[1]}`}
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                    {phoneNo[1]}
                  </Link> */}
                </div>
                <div className="d-flex align-items-center ">
                  {/*email */}
                  <span className="contact-font">Email : </span>
                  <Link
                    href="mailto:info@e2eresearch.com"
                    className="info-text hover-line-effect link-text-decoration-none link-hover-color">
                    {emilId}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      <section className="padding-left-x pb-x contact-sec">
        <div className="container-fluid">
          <div className="heading heading-sec res-head">
            <h2>Let’s Work Together</h2>
            <div className="sub-heading">WE’D LOVE TO HEAR FROM YOU!</div>
            <div className="horizontal-row "></div>
          </div>
          <div className="row blk-gap">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
              <div className="contact-form gray-background">
                <h5>Enquiry Form</h5>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name*"
                          {...register("firstName")}
                        />
                        <label htmlFor="floatingInput">First Name*</label>
                        {errors.firstName ? (
                          <span className="error-message">
                            {errors.firstName.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name*"
                          {...register("lastName")}
                        />
                        <label htmlFor="floatingInput">Last Name*</label>
                        {errors.lastName ? (
                          <span className="error-message">
                            {errors.lastName.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Company Name*"
                          {...register("company")}
                        />
                        <label htmlFor="floatingInput">Company Name*</label>
                        {errors.company ? (
                          <span className="error-message">
                            {errors.company.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-floating ">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          {...register("email")}
                        />
                        <label htmlFor="floatingInput">Email*</label>
                        {errors.email ? (
                          <span className="error-message">
                            {errors.email.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject*"
                          {...register("subject")}
                        />
                        <label htmlFor="floatingInput">Subject*</label>
                        {errors.subject ? (
                          <span className="error-message">
                            {errors.subject.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control contact-us-text-area"
                          placeholder="What are you intrested in?"
                          {...register("interestedIn")}></textarea>
                        <label htmlFor="floatingTextarea2">
                          What are you intrested in?*
                        </label>
                        {errors.interestedIn ? (
                          <span className="error-message">
                            {errors.interestedIn.message}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap gap-3 mt-1 ">
                    <div className="">
                      <div className="captcha-wrapper ">
                        <div className="captcha-con d-flex align-items-center flex-nowrap">
                          <input
                            type="text"
                            className="form-control contact-us-captcha"
                            placeholder=""
                            value={inputCaptcha}
                            onChange={(e) => setInputCaptcha(e.target.value)}
                          />
                          <Captcha
                            onGenerateCaptcha={handleCaptchaGenerate}
                            ref={captchRef}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" d-flex justify-content-end">
                      <button
                        type="submit"
                        className="contact-us-btn quote-btn">
                        Submit
                      </button>
                    </div>
                    {invalidCaptcha ? (
                      <span className="error-message">Invalid Captcha</span>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className=" gray-background contact-form">
                <h5>Our Location</h5>
                <GoogleMapShow />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Main footer */}
    </>
  );
};

export default ContactUs;
