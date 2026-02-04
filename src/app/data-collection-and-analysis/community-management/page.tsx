import CommunityManagement from "@/Component/CommunityManagement";
import DataCollectionMobileCarousel from "@/Component/DataCollectionMobileCarousel";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Management",
  keywords:
    "Brand Loyality, Audience Insights, Consumer Group, Direct to consumer, Online forum, communities",
  description:
    "Effective community management not only strengthens brand trust and engagement but also provides insights into your audience’s needs and preferences. By building an engaged community, you gain a valuable feedback loop that helps you adapt and grow alongside your customers.",
};

const CommunityManagement_ = () => {
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
            className="nav-item"
            href={"/data-collection-and-analysis/data-visualization-dashboards"}
          >
            Data Visualization & Dashboards
          </Link>
          <Link
            className="nav-item collection-nav-active"
            href={"/data-collection-and-analysis/community-management"}
          >
            Community Management
          </Link>
        </div>
        {/* for mobile */}
        <div className="container-fluid dataCollectionMobileCarousel">
          <DataCollectionMobileCarousel
            activeNav={"community_management"}
            initialScroll={4}
          />
        </div>
        {/* End */}
        <div className="tab-content">
          <div className="tab-pane fade show active"></div>
          <CommunityManagement />
        </div>
      </div>
    </section>
  );
};

export default CommunityManagement_;
