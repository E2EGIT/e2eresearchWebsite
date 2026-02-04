import React from "react";

type BannerType = {
  header: string;
  subHeader: string;
  logo: any;
  logoClass: string;
};

type PropsType = {
  banner: BannerType;
};
const ProuctBanner = (props: PropsType) => {
  const { banner } = props;
  const ProductLogo = banner.logo;

  return (
    <section
      className={`banner-blk banner-background survey-link sec-margin-t overflow-hidden padding-left-x`}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-sm-6 col-md-10 col-lg-8 col-xl-8 col-xxl-8 bg-image-left heading-sec">
            <h1>{banner.header}</h1>
          </div>
          <div className="col-4 col-sm-6  col-md-2 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-end logo-shadow">
            <ProductLogo
              className={`banner-logo ${
                banner.logoClass ? banner.logoClass : ""
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProuctBanner;
