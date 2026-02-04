"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Captcha from "../Captcha";
import Loader from "../Loader";
import "./probmeMe.scss";
import { toast } from "react-toastify";
import { requestProbeMe } from "@/validation-schema/Form-validation-schema";

interface props {
  setIsModalOpen: any;
}
const ProbeMeAi = (props: props) => {
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [invalidCaptcha, SetInvalidCaptcha] = useState<boolean>(false);
  const [loader, SetLoader] = useState<boolean>(false);
  const captchRef: any = useRef();

  type FormSchemaType = z.infer<typeof requestProbeMe>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(requestProbeMe),
    mode: "onChange",
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
          `${process.env.NEXT_PUBLIC_URL}/form/probeMe`,
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
      <div className="form-body request contact-form probeMe-ai-form">
        <div className="mb-3">
          Have questions or ready to get started? Reach out - we're here to help
        </div>
        <Loader open={loader} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="body-content">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-floating ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name*"
                    {...register("name")}
                  />
                  <label htmlFor="floatingInput">Name*</label>
                  {errors.name ? (
                    <span className="error-message">{errors.name.message}</span>
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
                    placeholder="Phone No*"
                    {...register("phone")}
                  />
                  <label htmlFor="floatingInput">Phone No</label>
                  {errors.phone ? (
                    <span className="error-message">
                      {errors.phone.message}
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
                    placeholder="Company Name*"
                    {...register("company")}
                  />
                  <label htmlFor="floatingInput">Company Name</label>
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

export default ProbeMeAi;
