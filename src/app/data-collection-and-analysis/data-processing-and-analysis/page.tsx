import DataCollectionMobileCarousel from "@/Component/DataCollectionMobileCarousel";
import DataProcessing from "@/Component/DataProcessing";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing & Analysis",
  keywords:
    "Data Cleaning & Validation, Data Transformation & Structuring, Custom Data Coding & Labeling, Descriptive Analytics, Advanced Statistical Analysis, Predictive Modeling & Forecasting, Transparency and Consent, Multi-Platform Compatibility",
  description:
    "Our expert team, with extensive experience in advanced survey analytics such as key driver analysis, Conjoint, hierarchical clustering, Kano, MaxDiff, and Van Westendorp, ensures valuable insights from your surveys to guide data-driven strategies, product development, and overall business direction, minimizing reliance on guesswork. ",
};

const DataProcessing_Analytics = () => {
  return (
    <section className="padding-left-x  light-gray-bg">
      <div className="container-fluid">
        <div className="data-collection-nav dataCollectionDesktopCarousel">
          <Link
            className="nav-item"
            href={"/data-collection-and-analysis/survey-scripting"}
          >
            Survey Scripting & Customizations
          </Link>
          <Link
            className="nav-item collection-nav-active"
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
            className="nav-item"
            href={"/data-collection-and-analysis/community-management"}
          >
            Community Management
          </Link>
        </div>
        {/* for mobile */}
        <div className="container-fluid dataCollectionMobileCarousel">
          <DataCollectionMobileCarousel
            activeNav={"data_processing"}
            initialScroll={1}
          />
        </div>
        {/* End */}
        <div className="tab-content">
          <div className="tab-pane fade show active"></div>
          <DataProcessing />
        </div>
      </div>
    </section>
  );
};

export default DataProcessing_Analytics;
