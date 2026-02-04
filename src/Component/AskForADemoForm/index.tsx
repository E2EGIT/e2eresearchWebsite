"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Captcha from "../Captcha";
import Loader from "../Loader";
import { toast } from "react-toastify";
import { FormsData } from "@/validation-schema/Form-validation-schema";
interface productName {
  productName: string;
  setIsModalOpen: any;
}

const AskForADemoForm = (props: productName) => {
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [inputCaptcha, setInputCaptcha] = useState<string>("");
  const [invalidCaptcha, SetInvalidCaptcha] = useState<boolean>(false);
  const [loader, SetLoader] = useState<boolean>(false);
  const [tanksMessage, SetTanksMessage] = useState<boolean>(false);

  type FormSchemaType = z.infer<typeof FormsData>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormsData),
    mode: "onChange",
    defaultValues: {
      productName: props.productName, // Provide the default value here
    },
  });
  const onSubmit: SubmitHandler<FormSchemaType> = async (data: any) => {
    if (inputCaptcha !== captchaCode) {
      SetInvalidCaptcha(true);
      SetLoader(false);
      reSetCaptcha();
    } else {
      SetLoader(true);
      SetInvalidCaptcha(false);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/form/demo`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          document.body.style.overflow = "visible";
          reSetCaptcha();
          toast.error("something went wrong. Please try again", {
            autoClose: 3000,
            closeOnClick: true,
            theme: "colored",
          });
          throw new Error(`Response status: ${response.status}`);
        }
        SetLoader(false);
        document.body.style.overflow = "visible";
        props.setIsModalOpen(false);
        toast.success("Request received! We'll respond shortly.", {
          autoClose: 3000,
          closeOnClick: true,
          theme: "colored",
        });
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

  const captchRef: any = useRef();

  const reSetCaptcha = () => {
    setInputCaptcha("");
    captchRef.current.genCaptcha();
  };

  return (
    <>
      {tanksMessage ? (
        <div>Thanks submmiting</div>
      ) : (
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
                      {...register("interestedIn")}
                    ></textarea>
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
            </div>

            <div className="d-flex justify-content-between flex-wrap footer-content">
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

              <div className=" d-flex justify-content-end">
                <button type="submit" className="contact-us-btn quote-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AskForADemoForm;
