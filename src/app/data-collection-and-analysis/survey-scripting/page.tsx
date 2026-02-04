import DataCollectionMobileCarousel from "@/Component/DataCollectionMobileCarousel";
import SurveyScripting from "@/Component/SurveyScripting";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Survey Scripting & Customizations, survey programming",
  keywords:
    "Custom Survey Setups, Advanced Scripting Capabilities, Data Quality and Integrity, Mobile and Cross-Platform Optimization, confirmit, decipher, forsta, Qualtrics, Questback, dimension, quantum, sawtooth",
  description:
    "Our team brings extensive expertise in complex survey design, logic implementation, and scripting using industry-leading tools like Qualtrics, Confirmit, Decipher, Dimension, Sawtooth etc. From multi-layered question flows to sophisticated respondent segmentation and data validation, we ensure every aspect of your survey runs seamlessly, delivering quality data you can rely on.",
};

const SurveyScripting_ = () => {
  return (
    <section className="padding-left-x  light-gray-bg">
      <div className="container-fluid">
        <div className="data-collection-nav dataCollectionDesktopCarousel">
          <Link
            className="nav-item collection-nav-active"
            href={"/data-collection-and-analysis/survey-scripting"}
          >
            Survey Scripting & Customizations
          </Link>
          <Link
            className="nav-item"
            href={"/data-collection-and-analysis/data-processing-and-analysis"}
          >
            Data Processing & Analysis
          </Link>
          <Link
            className="nav-item"
            href={"/data-collection-and-analysis/online-data-collection"}
          >
            Online Data Collection
          </Link>
          <Link
            className="nav-item"
            href={"/data-collection-and-analysis/data-visualization-dashboards"}
          >
            Data Visualization & Dashboards
          </Link>
          <Link
            className="nav-item "
            href={"/data-collection-and-analysis/community-management"}
          >
            Community Management
          </Link>
        </div>
        {/* for mobile */}
        <div className="container-fluid dataCollectionMobileCarousel">
          <DataCollectionMobileCarousel
            activeNav={"survey_scripting"}
            initialScroll={0}
          />
        </div>
        {/* End */}
        <div className="tab-content">
          <div className="tab-pane fade show active"></div>
          <SurveyScripting />
        </div>
      </div>
    </section>
  );
};

export default SurveyScripting_;
