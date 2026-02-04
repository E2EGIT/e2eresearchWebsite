import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";

interface CaptchaProps {
  onGenerateCaptcha: (captcha: string) => void;
  ref: any; // Callback to return the CAPTCHA code
}

const Captcha: React.FC<CaptchaProps> = forwardRef(
  ({ onGenerateCaptcha }, ref) => {
    const [captchaCode, setCaptchaCode] = useState<string>("");

    // Function to generate a random CAPTCHA code
    const generateCaptcha = () => {
      const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let captcha = "";
      for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters[randomIndex];
      }
      setCaptchaCode(captcha);
      onGenerateCaptcha(captcha); // Return the CAPTCHA code to the parent
    };

    useImperativeHandle(ref, () => ({
      genCaptcha() {
        generateCaptcha();
      },
    }));

    // On component mount, generate the first CAPTCHA code
    useEffect(() => {
      generateCaptcha();
    }, []);

    return (
      <div>
        <div
          // style={{
          //   fontSize: "16px",
          //   fontWeight: "bold",
          //   color: "#f05a5c",
          //   letterSpacing: "2px",
          //   marginLeft: "10px",
          //   fontStyle: "italic",
          //   userSelect: "none",
          // }}
          className="captcha-text"
        >
          {captchaCode}
        </div>
      </div>
    );
  }
);

export default Captcha;
