import DataAccess from "../../../public/ourservice/datavisualization/dataaccess.svg";
import Statistics from "../../../public/ourservice/datavisualization/statistics.svg";
import Humancentric from "../../../public/ourservice/datavisualization/humancentric.svg";
import Crossplatform from "../../../public/ourservice/datavisualization/crossplatform.svg";
import Scripting from "../../../public/ourservice/datavisualization/scripting.svg";
import AutomatedReporting from "../../../public/ourservice/datavisualization/automatedreporting.svg";
import Accesscontrol from "../../../public/ourservice/datavisualization/accesscontrol.svg";

const DataVisualization = () => {
  return (
    <section className="survey-scripting data-visualization ">
      <div className="header-container">
        <div className="heading-sec survey-script__text res-head">
          <h2>
            Custom Dashboard Development: Transforming Data into Real-Time,
            Actionable Insights
          </h2>
          <div className="horizontal-row"></div>
        </div>
        <p>
          We are specialized in custom dashboard development, creating
          interactive, visually compelling dashboards that bring your data to
          life and empower you to make informed decisions, faster.
        </p>
        <div className="hedding-sb-head">
          <h6>Why Choose Custom Dashboards?</h6>
          <p>
            Standard data solutions often fail to address the unique needs of
            each organization. Our custom dashboards are tailored to your
            specific goals, KPIs, and data sources, giving you a centralized
            view of all critical insights in one place. With a focus on
            intuitive design and user experience, we ensure that your team has
            the tools needed to make data-driven decisions with confidence.
          </p>
        </div>
        <div className="row sec-blk-row blk-gap">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <DataAccess className="data-c-icon" />
              <h6>Real-Time Data Access</h6>
              <p>
                View and analyze your data as it's generated, with automatic
                updates that keep your dashboard current and relevant.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column  align-items-center card-wrapper hover-svg-blk">
              <Statistics className="data-c-icon" />
              <h6>Tailored Visualizations</h6>
              <p>
                From charts and graphs to heat maps and trend lines, we create
                visualizations that highlight what matters most, helping you see
                patterns and trends at a glance.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <Humancentric className="data-c-icon" />
              <h6>User-Centric Design</h6>
              <p>
                We design dashboards that are intuitive and easy to navigate,
                ensuring that users of all technical backgrounds can quickly
                access the insights they need.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-head">
          <h6>Our Dashboard Development Process</h6>
          <p>
            We approach dashboard development as a collaborative process,
            working closely with your team to understand your unique objectives
            and data sources. Here's how we bring your dashboard vision to life
            -
          </p>
        </div>

        <div className="box-shadow box-text border-radious">
          <h6>Requirements Gathering and Planning</h6>
          <p>
            We begin by identifying your KPIs, data sources, and the specific
            insights you need to track.
          </p>
        </div>
        <div className="box-shadow box-text border-radious">
          <h6>Data Integration and Structuring</h6>
          <p>
            We connect to all relevant data sources-whether from your CRM, ERP,
            spreadsheets, or third-party applications-and structure the data for
            optimal performance.
          </p>
        </div>
        <div className="box-shadow box-text border-radious">
          <h6>Custom Design and Visualization</h6>
          <p>
            Our designers craft custom visuals and layouts to present your data
            in the clearest, most impactful way.
          </p>
        </div>
        <div className="box-shadow box-text border-radious">
          <h6>Dashboard Development and Testing</h6>
          <p>
            Using industry-leading tools like Power BI, Tableau, and
            custom-built solutions, we develop and rigorously test your
            dashboard to ensure it meets your needs.
          </p>
        </div>
        <div className="box-shadow box-text border-radious last-row-none">
          <h6>Deployment and Training</h6>
          <p>
            Once deployed, we provide training and ongoing support to empower
            your team to make the most of your dashboard.
          </p>
        </div>
        <div className="hedding-sb-head">
          <h6>Key Features of Our Dashboards</h6>
          <p>
            Our dashboards are equipped with powerful features to ensure they
            align with your business goals, are easy to use, and provide
            actionable insights -
          </p>
        </div>
        <div className="row sec-blk-row blk-gap">
          <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <Crossplatform className="data-c-icon" />
              <h6>Cross-Device Compatibility</h6>
              <p>
                Access your dashboard on desktop, tablet, or mobile for
                flexibility and convenience.
              </p>
            </div>
          </div>
          <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
            <div className="box-sec d-flex flex-column  align-items-center card-wrapper hover-svg-blk">
              <Scripting className="data-c-icon" />
              <h6>Drill-Down Capabilities</h6>
              <p>
                Dig deeper into the data with drill-down options, filters, and
                interactive elements that let you explore specific metrics.
              </p>
            </div>
          </div>
          <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <AutomatedReporting className="data-c-icon" />
              <h6>Automated Reporting and Alerts</h6>
              <p>
                Set up automated reports and custom alerts for when metrics
                reach critical levels, keeping you proactive.
              </p>
            </div>
          </div>
          <div className="col-xs-3 col-sm-6 col-md-6 col-lg-3">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <Accesscontrol className="data-c-icon" />
              <h6>Role-Based Access Control</h6>
              <p>
                Ensure that the right team members have access to the data they
                need with customizable permission levels.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-head">
          <h6>Benefits of Our Custom Dashboards</h6>
          <p>
            Our custom dashboards help you cut through data noise, streamline
            reporting, and foster a data-driven culture within your
            organization.
          </p>
        </div>
        <div className="box-shadow box-text border-radious">
          <h6>Enhanced Decision-Making</h6>
          <p>
            With real-time insights and trend visualizations, you can make
            quicker, evidence-backed decisions.
          </p>
        </div>
        <div className="box-shadow box-text border-radious">
          <h6>Improved Efficiency</h6>
          <p>
            Eliminate time-consuming manual reporting processes, allowing your
            team to focus on strategy and analysis.
          </p>
        </div>
        <div className="box-shadow box-text border-radious last-row-none">
          <h6>Centralized Insights</h6>
          <p>
            Consolidate data from multiple sources into one cohesive dashboard,
            making it easier to track overall performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;
