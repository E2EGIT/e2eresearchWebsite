"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner = () => {
  const handleAccept = () => {
    // console.log("Cookies accepted");
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="I accept"
      cookieName="user-consent"
      buttonClasses="cookie-btn"
      containerClasses="banner-text"
      expires={365}
      onAccept={handleAccept} // Call a function when cookies are accepted
    >
      We use cookies to enhance your experience. By continuing to use our
      website, you consent to our{" "}
      <a href="/policies" className="prvacy-color">
        Privacy Policy
      </a>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
