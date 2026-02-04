import Link from "next/link";
import Cross from "../../../public/homePage/sidebar/cross.svg";
import { usePathname } from "next/navigation";

const Sidebar = (props: any) => {
  const { setIsSidebarOpen, isSidebarOpen } = props;
  const pathname = usePathname();

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const headerUrl = [
    {
      name: "Industries",
      url: "/industries",
      suburl: [
        {
          name: "Food and Beverage",
          url: "/industries/food-and-beverage",
        },
        {
          name: "Consumer Goods",
          url: "/industries/consumer-goods",
        },
        {
          name: "Healthcare",
          url: "/industries/healthcare",
        },
        {
          name: "Financial Services",
          url: "/industries/financial-services",
        },
        {
          name: "Technology",
          url: "/industries/technology",
        },
        {
          name: "Entertainment",
          url: "/industries/entertainment",
        },
        {
          name: "Sports",
          url: "/industries/sports",
        },
        {
          name: "Advertising",
          url: "/industries/advertising",
        },
      ],
    },
    {
      name: "Services",
      url: "/services",
      suburl: {
        Research: [
          {
            name: "Product Insights",
            url: "/services/product-insights",
            subUrls: [
              {
                name: "Features testing",
                url: "/services/product-insights",
              },
              {
                name: "Barrier to adoption",
                url: "/services/product-insights",
              },
              {
                name: "Improvement needed",
                url: "/services/product-insights",
              },
              {
                name: "Packaging Research",
                url: "/services/product-insights",
              },
              {
                name: "Pricing Research",
                url: "/services/product-insights",
              },
            ],
          },
          {
            name: "Brand Research",
            url: "/services/brand-research",
            subUrls: [
              {
                name: "Brand Awareness Research",
                url: "/services/brand-research",
              },
              {
                name: "Brand Tracking Research",
                url: "/services/brand-research",
              },
              {
                name: "Campaign Evaluation",
                url: "/services/brand-research",
              },
              {
                name: "Brand Communication",
                url: "/services/brand-research",
              },
              {
                name: "Brand",
                url: "/services/brand-research",
              },
            ],
          },
          {
            name: "New Product Development",
            url: "/services/product-development",
            subUrls: [
              {
                name: "Idea Screening",
                url: "/services/product-development",
              },
              {
                name: "Concept Testing and Validation",
                url: "/services/product-development",
              },
              {
                name: "Product testing",
                url: "/services/product-development",
              },
              {
                name: "Pricing Research",
                url: "/services/product-development",
              },
            ],
          },
          {
            name: "Consumer Research",
            url: "/services/consumer-research",
            subUrls: [
              {
                name: "Consumer Usage and Attitude",
                url: "/services/consumer-research",
              },
              {
                name: "Consumer Segmentation",
                url: "/services/consumer-research",
              },
              {
                name: "Customer satisfaction and NPS Measurement",
                url: "/services/consumer-research",
              },
            ],
          },
          {
            name: "Marketing Assessment",
            url: "/services/market-assessment",
            subUrls: [
              {
                name: "Demand and Forecasting",
                url: "/services/market-assessment",
              },
              {
                name: "Demand Research",
                url: "/services/market-assessment",
              },
              {
                name: "Competition Analysis",
                url: "/services/market-assessment",
              },
            ],
          },
          {
            name: "Sensory Research",
            url: "/services/sensory-research",
            subUrls: [
              {
                name: "Central location testing",
                url: "/services/sensory-research",
              },
              {
                name: "Home User testing",
                url: "/services/sensory-research",
              },
              {
                name: "Food experts",
                url: "/services/sensory-research",
              },
            ],
          },
        ],
        DataCollection: [
          {
            name: "Data Collection & Analysis",
            url: "/data-collection-and-analysis/survey-scripting",
            subUrls: [
              {
                name: "Survey Scripting",
                url: "/data-collection-and-analysis/survey-scripting",
              },
              {
                name: "Data Processing & Analysis",
                url: "/data-collection-and-analysis/data-processing-and-analysis",
              },
              {
                name: "Online Data Collection",
                url: "/data-collection-and-analysis/online-data-collection",
              },
              {
                name: "Data Visualization & Dashboards",
                url: "/data-collection-and-analysis/data-visualization-dashboards",
              },
              {
                name: "Community Management",
                url: "/data-collection-and-analysis/community-management",
              },
            ],
          },
        ],
      },
    },
    {
      name: "Products",
      url: "/products",
      suburl: [
        {
          name: "Raven",
          url: "/products/raven",
        },
        {
          name: "SLM",
          url: "/products/slm",
        },
        {
          name: "AI",
          url: "/products/AI",
        },
        {
          name: "Data Validator",
          url: "/products/data-validator",
        },
        {
          name: "Inscribee",
          url: "/products/inscribee",
        },
        {
          name: "Data Pilot",
          url: "/products/datapilot",
        },
        {
          name: "Gamification",
          url: "/products/gamification",
        },
        {
          name: "resQ",
          url: "/products/resQ",
        },
      ],
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Careers",
      url: "/careers",
    },
    {
      name: "Contact",
      url: "/contact",
    },
    {
      name: "Policies",
      url: "/policies",
    },

    ,
  ];

  const handleClick = () => {
    setTimeout(() => {
      setIsSidebarOpen(false);
    }, 500);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${
          isSidebarOpen ? "sidebar-overlay-show" : ""
        }`}
        onClick={closeSidebar}></div>
      <div
        className={`side-bar-container ${isSidebarOpen ? "show-sidebar" : ""}`}>
        <div className="side-bar-container__heading px-4 px-md-5 py-4">
          <Cross onClick={closeSidebar} />
        </div>
        <ul className="items">
          {headerUrl?.map((header: any, index: number) => {
            const serverData = header?.name != "Services";

            return (
              <li
                className={`${
                  serverData ? "sidebar-industries" : "sidebar-service"
                } ripple-bullet item ${
                  !isSidebarOpen ? "pointer-decibel" : ""
                }`}
                key={index}>
                {header?.suburl ? (
                  <Link
                    href={header.url}
                    className="header-url"
                    onClick={() => handleClick()}>
                    <div
                      className={
                        header?.suburl
                          ? "bullet-text-wraper bullet-check"
                          : "bullet-text-wraper bullet-check default-url"
                      }>
                      <span></span>
                      {header.name}
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={header.url}
                    className="header-url"
                    onClick={() => handleClick()}>
                    <div
                      className={
                        header?.suburl
                          ? "bullet-text-wraper bullet-check"
                          : "bullet-text-wraper bullet-check default-url"
                      }>
                      <span></span>
                      {header.name}
                    </div>
                  </Link>
                )}
                {header?.name != "Services" ? (
                  <div
                    className={`${
                      header?.suburl
                        ? "sidebar-industries-sub  sidebar-sub-item"
                        : ""
                    } `}>
                    <ul key={index}>
                      {header?.suburl?.map((urls: any, index: number) => {
                        return (
                          <li
                            className={`ripple-bullet mobile-riple ${
                              pathname === urls?.url ? "active-url" : ""
                            } `}
                            key={index}>
                            <Link
                              className=""
                              href={urls?.url}
                              onClick={() => handleClick()}>
                              <div className="bullet-text-wraper-inner">
                                <span></span>
                                {urls?.name}{" "}
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="container-fluid sidebar-service-sub sidebar-sub-item  research-sec">
                    <div className="row">
                      <div className="col-12 row-sec">
                        <h4>Research & Consulting</h4>
                      </div>
                    </div>
                    <div className="row">
                      {header?.suburl.Research?.map(
                        (research: any, index: number) => {
                          return (
                            <div
                              className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5"
                              key={index}>
                              {/* <h2>{research?.name}</h2> */}
                              <Link
                                href={research?.url}
                                className={`data-url hover-line-effect ${
                                  pathname === research?.url ? "active-url" : ""
                                }`}
                                onClick={() => handleClick()}>
                                {research?.name}
                              </Link>
                              <ul key={index}>
                                {research?.subUrls?.map(
                                  (subUrl: any, index: number) => {
                                    return (
                                      <li
                                        className={`sub-ripple-bullet`}
                                        key={index}>
                                        <Link
                                          href={subUrl?.url}
                                          onClick={() => handleClick()}>
                                          <div className="bullet-text-wraper-inner">
                                            <span></span>
                                            {subUrl?.name}
                                          </div>
                                        </Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          );
                        }
                      )}
                    </div>

                    <div className="border-top row py-4_5">
                      <ul key={index}>
                        {header?.suburl.DataCollection?.map(
                          (research: any, index: number) => {
                            return (
                              <div
                                className=" col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 mb-5 mobile-margin-top"
                                key={index}>
                                {/* <h2></h2> */}
                                <Link
                                  href={research?.url}
                                  className="data-url hover-line-effect"
                                  onClick={() => handleClick()}>
                                  {research?.name}
                                </Link>
                                <ul key={index}>
                                  {research?.subUrls?.map(
                                    (subUrl: any, index: number) => {
                                      return (
                                        <li
                                          className={`sub-ripple-bullet ${
                                            pathname === subUrl?.url
                                              ? "active-url"
                                              : ""
                                          }`}
                                          key={index}>
                                          <Link
                                            href={subUrl?.url}
                                            onClick={() => handleClick()}>
                                            <div className="bullet-text-wraper-inner">
                                              <span></span>
                                              {subUrl?.name}
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
