import CommunityManagement from "@/Component/CommunityManagement";
import DataCollectionMobileCarousel from "@/Component/DataCollectionMobileCarousel";
import DataVisualization from "@/Component/DataVisualization";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboards",
  keywords:
    "Tailored Visualizations, Tailored Visualizations, User-Centric Design, quick dashboarding, Automated Reporting and Alerts, PowerBi, Tableau, DisplayR, Excel Dashboards ",
  description:
    "We are specialized in custom dashboard development, creating interactive, visually compelling dashboards that bring your data to life and empower you to make informed decisions, faster.",
};

const Data_VisualizationDashboards = () => {
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
            className="nav-item"
            href={"/data-collection-and-analysis/online-data-collection"}
          >
            Online Data Collection
          </Link>
          <Link
            className="nav-item collection-nav-active"
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
            activeNav={"data_visualization"}
            initialScroll={3}
          />
        </div>
        {/* End */}
        <div className="tab-content">
          <div className="tab-pane fade show active"></div>
          <DataVisualization />
        </div>
      </div>
    </section>
  );
};

export default Data_VisualizationDashboards;
