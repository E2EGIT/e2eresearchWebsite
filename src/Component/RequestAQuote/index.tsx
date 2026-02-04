"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Captcha from "../Captcha";
import Loader from "../Loader";
import { toast } from "react-toastify";
import { requestQuates } from "@/validation-schema/Form-validation-schema";
interface props {
  setIsModalOpen: any;
}
const RequestAQuote = (props: props) => {
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [invalidCaptcha, SetInvalidCaptcha] = useState<boolean>(false);
  const [loader, SetLoader] = useState<boolean>(false);
  const captchRef: any = useRef();

  type FormSchemaType = z.infer<typeof requestQuates>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(requestQuates),
    mode: "onChange",
    defaultValues: {
      interestedIn: [],
    },
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data: any) => {
    if (inputCaptcha !== captchaCode) {
      SetInvalidCaptcha(true);
      reSetCaptcha();
    } else {
      SetInvalidCaptcha(false);
      SetLoader(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/form/quote`,
          {
            method: "POST", // HTTP method
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          reSetCaptcha();
          toast.error("something went wrong. Please try again", {
            autoClose: 3000,
            closeOnClick: true,
            theme: "colored",  
          });
          document.body.style.overflow = "visible";
          throw new Error(`Response status: ${response.status}`);
        } else {
          setInputCaptcha("");
        }
        SetLoader(false);
        props.setIsModalOpen(false);

        toast.success("Request received! We'll respond shortly.", {
          autoClose: 3000,
          closeOnClick: true,
          theme: "colored",
        });
        document.body.style.overflow = "visible";
      } catch (error) {
        document.body.style.overflow = "visible";
        reSetCaptcha();
        console.error("Error:", error);
        SetLoader(false);
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
  const reSetCaptcha = () => {
    setInputCaptcha("");
    captchRef.current.genCaptcha();
  };
  return (
    <>
      <div className="form-body request contact-form">
        <Loader open={loader} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="body-content">
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
                <div className="container-box checkbox-cus-con">
                  <div className="text-fieldname">
                    What are you interestd in?
                  </div>
                  <div className="sub-checkbox">
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="buisness-intelligence"
                        name="interestedIn"
                        value="Buisness-Intelligence"
                        className="form-check-input"
                      />
                      <label htmlFor="buisness-intelligence">
                        Buisness-Intelligence
                      </label>
                    </div>

                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="data-analytics"
                        name="interestedIn"
                        value="Data Analytics"
                        className="form-check-input"
                      />
                      <label htmlFor="data-analytics">Data Analytics</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="data-validation"
                        name="interestedIn"
                        value="Data Validation"
                        className="form-check-input"
                      />
                      <label htmlFor="data-validation">Data validation</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="digital-finger-printing"
                        name="interestedIn"
                        value="Digital Finger Printing"
                        className="form-check-input"
                      />
                      <label htmlFor="digital-finger-printing">
                        Digital Finger Printing
                      </label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="mobile-apps"
                        name="interestedIn"
                        value="Mobile Apps"
                        className="form-check-input"
                      />
                      <label htmlFor="mobile-apps">Mobile Apps</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="participant-engagement-tools"
                        name="interestedIn"
                        value="Participant Engagement Tools"
                        className="form-check-input"
                      />
                      <label htmlFor="participant-engagement-tools">
                        Participant Engagement Tools
                      </label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="questionnaire"
                        name="interestedIn"
                        value="Questionnaire"
                        className="form-check-input"
                      />
                      <label htmlFor="questionnaire">Questionnaire</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="real-time-dashboards"
                        name="interestedIn"
                        value="Real Time Dashboards"
                        className="form-check-input"
                      />
                      <label htmlFor="real-time-dashboards">
                        Real-Time Dashboards
                      </label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="research-reports"
                        name="interestedIn"
                        value="Research Reports"
                        className="form-check-input"
                      />
                      <label htmlFor="research-reports">Research Reports</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="scripting-and-hosting"
                        name="interestedIn"
                        value="Scripting And Hosting"
                        className="form-check-input"
                      />
                      <label htmlFor="scripting-and-hosting">
                        Scripting & Hosting
                      </label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="survey-link-management"
                        name="interestedIn"
                        value="Survey Link Management"
                        className="form-check-input"
                      />
                      <label htmlFor="survey-link-management">
                        Survey Link Management
                      </label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="sample-curation"
                        name="interestedIn"
                        value="Sample Curation"
                        className="form-check-input"
                      />
                      <label htmlFor="sample-curation">Sample Curation</label>
                    </div>
                    <div>
                      <input
                        {...register("interestedIn")}
                        type="checkbox"
                        id="something-else"
                        name="interestedIn"
                        value="Something Else"
                        className="form-check-input"
                      />
                      <label htmlFor="something-else">Something else</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-floating">
                  <textarea
                    className="form-control contact-us-text-area"
                    placeholder="What are you intrested in?"
                    {...register("additional")}
                  ></textarea>
                  <label htmlFor="floatingTextarea2">
                    Please share any additional details?*
                  </label>
                  {errors.additional ? (
                    <span className="error-message">
                      {errors.additional.message}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content d-flex justify-content-between flex-wrap">
            <div className="d-flex">
              <div className="captcha-wrapper">
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
                {invalidCaptcha ? (
                  <span className="error-message">Invalid Captcha</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end ">
              <button type="submit" className="contact-us-btn quote-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestAQuote;
