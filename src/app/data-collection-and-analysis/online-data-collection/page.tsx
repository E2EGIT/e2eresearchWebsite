import DataCollection from "@/Component/DataCollection";
import DataCollectionMobileCarousel from "@/Component/DataCollectionMobileCarousel";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Data Collection",
  keywords:
    "Targeted Sampling, online sampling, Rigorous Quality Control, Global Reach with Local Precision, Data Collection across all devices, Real-Time Data Collection & Tracking, Multi-Platform Compatibility, Transparency and Consent ",
  description:
    "Our online data collection approach goes beyond simply gathering responses. We apply a meticulous process that combines best-in-class tools with strategic methodologies to reach the right respondents, protect data integrity, and optimize response rates.",
};

const Online_Data_Collection = () => {
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
            className="nav-item"
            href={"/data-collection-and-analysis/data-processing-and-analysis"}
          >
            Data Processing & Analysis
          </Link>
          <Link
            className="nav-item  collection-nav-active"
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
            activeNav={"data_collection"}
            initialScroll={2}
          />
        </div>
        {/* End */}
        <div className="tab-content">
          <div className="tab-pane fade show active"></div>
          <DataCollection />
        </div>
      </div>
    </section>
  );
};

export default Online_Data_Collection;
