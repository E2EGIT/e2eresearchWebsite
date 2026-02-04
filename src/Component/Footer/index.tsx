"use client";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import { usePathname } from "next/navigation";

const FooterLink = () => {
  const footerLink = [
    {
      name: "Industries",
      url: "/industries",
      subUrls: [
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
      name: "Research & Consulting",
      url: "/services",
      subUrls: [
        {
          name: "Market Assessment",
          url: "/services/market-assessment",
        },
        {
          name: "Consumer Research",
          url: "/services/consumer-research",
        },
        {
          name: "New Product Development",
          url: "/services/product-development",
        },
        {
          name: "Sensory Research",
          url: "/services/sensory-research",
        },
        {
          name: "Brand Research",
          url: "/services/brand-research",
        },
        {
          name: "Product Insights",
          url: "/services/product-insights",
        },
      ],
    },
    {
      name: "Data Collection & Analysis",
      url: "/data-collection-and-analysis/survey-scripting",

      subUrls: [
        {
          name: "Survey Scripting",
          url: "/data-collection-and-analysis/survey-scripting",
        },
        {
          name: "Data Processing & analysis",
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

    {
      name: "Products",
      url: "/products",
      subUrls: [
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
      subUrls: [
        {
          name: "Contact",
          url: "/contact",
        },
        {
          name: "Leadership",
          url: "/about",
        },
        {
          name: "Careers",
          url: "/careers",
        },
        {
          name: "Policies",
          url: "/policies",
        },
      ],
    },
  ];
  const pathname = usePathname();

  return (
    <>
      <section className="footer-sec  footer-blk footer-border ">
        <div className="container-fluid">
          <div className="row row-gap-3 justify-content-lg-between">
            {footerLink?.map((footerData: any, index: number) => {
              return (
                <div
                  className="col col-12 col-xs-6 col-sm-6 col-md-4 col-lg-2 col-xl-auto"
                  key={index}
                >
                  <Link
                    className={`footer-hedding hover-line-effect_ 
                      ${pathname === footerData?.url ? "active-footer" : " "} `}
                    href={footerData?.url}
                  >
                    {footerData?.name}
                  </Link>

                  {footerData?.subUrls?.map((suburl: any, index: number) => {
                    return (
                      <Link
                        href={suburl?.url}
                        className={`footer-link  ${
                          pathname === suburl?.url ? "active-footer" : ""
                        } `}
                        key={index}
                      >
                        <span className="hover-line-effect">
                          {suburl?.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ScrollToTop
        smooth={true}
        color="#f05a5c"
        width="16px"
        height="16px"
        style={{
          width: "35px",
          height: "35px",
          right: "24px",
        }}
      />
    </>
  );
};

export default FooterLink;
