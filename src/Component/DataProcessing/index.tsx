import DataCleaning from "../../../public/ourservice/dataprocessing/datacleaning.svg";
import DataTransformation from "../../../public/ourservice/dataprocessing/datatransformation.svg";
import DataCoding from "../../../public/ourservice/dataprocessing/datacoding.svg";
import Analytics from "../../../public/ourservice/dataprocessing/analytics.svg";
import StatisticalAnalysis from "../../../public/ourservice/dataprocessing/statisticalanalysis.svg";
import Forecasting from "../../../public/ourservice/dataprocessing/forecasting.svg";

const DataProcessing = () => {
  return (
    <section className="survey-scripting ">
      <div className="header-container">
        <div className="heading-sec survey-script__text res-head">
          <h2>Data Processing & Analysis</h2>
          <div className="horizontal-row"></div>
        </div>
        <p className="desc-para">
          Leveraging data science, we can unlock deeper insights from your data.
          Utilizing a variety of advanced analytical tools and technologies, our
          team ensures successful research outcomes. With expertise in
          generating actionable business insights and delivering lasting
          solutions, we tailor our methods to align with your specific needs.
        </p>
        <p>
          Our expert team, with extensive experience in advanced survey
          analytics such as key driver analysis, Conjoint, hierarchical
          clustering, Kano, MaxDiff, and Van Westendorp, ensures valuable
          insights from your surveys to guide data-driven strategies, product
          development, and overall business direction, minimizing reliance on
          guesswork.
        </p>
        <div className="hedding-sb-head">
          <h6>Transforming Raw Data</h6>
          <p>
            In an era where data drives decision-making, the quality of insights
            depends on more than just collection-it requires precise processing
            and advanced analytics. E2E, we excel in{" "}
            <b>data processing, tabulation, cleaning, and analytics,</b>{" "}
            transforming raw data into high-quality, actionable insights that
            empower your strategic initiatives.
          </p>
        </div>
        <div className="hedding-sb-head">
          <h6>Our Data Processing Expertise</h6>
          <p>
            Data processing is the backbone of any research project. Our team
            meticulously manages your data to ensure accuracy, consistency, and
            reliability at every step. We utilize advanced tools and
            industry-best practices to -
          </p>
        </div>
        <div className="row sec-blk-row blk-gap">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <DataCleaning className="data-c-icon" />
              <h6>Data Cleaning & Validation</h6>
              <p>
                Ensure your data is free from duplicates, inaccuracies, and
                inconsistencies with robust quality checks and automated
                validation processes.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column  align-items-center card-wrapper hover-svg-blk">
              <DataTransformation className="data-c-icon" />
              <h6>Data Transformation & Structuring</h6>
              <p>
                Reformat and structure raw data to align with your analysis
                requirements, making it ready for deeper insights.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <DataCoding className="data-c-icon" />
              <h6>Custom Data Coding & Labeling</h6>
              <p>
                We provide customized coding solutions to standardize open-ended
                responses, sentiment analysis, and categorization, delivering a
                structured dataset for quick analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-head">
          <h6>Analytics: Uncovering Patterns & Trends</h6>
          <p>
            Our analytics team employs a range of methodologies and tools to
            derive insights that help you understand your audience, predict
            behaviors, and make data-driven decisions. We support every phase of
            the research lifecycle, from exploratory analysis to predictive
            modeling.
          </p>
        </div>
        <div className="row sec-blk-row blk-gap">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <Analytics className="data-c-icon" />
              <h6>Descriptive Analytics</h6>
              <p>
                Summarize key findings, trends, and patterns to provide an
                overview of your data’s story.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column  align-items-center card-wrapper hover-svg-blk">
              <StatisticalAnalysis className="data-c-icon" />
              <h6>Advanced Statistical Analysis</h6>
              <p>
                Go beyond basics with regression analysis, segmentation, and
                correlation studies that deliver deeper insights into customer
                behavior and market trends.
              </p>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="box-sec d-flex flex-column align-items-center card-wrapper hover-svg-blk">
              <Forecasting className="data-c-icon" />
              <h6>Predictive Modeling & Forecasting</h6>
              <p>
                Anticipate future trends and behaviors with predictive models
                tailored to your specific business objectives.
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-head margin-b">
          <h6>Our Tools and Technology</h6>
          <p>
            We leverage the power of advanced data tools and platforms,
            including R, Python, SPSS, Quantum, Wincross, Tableau, and Power BI,
            allowing us to handle data at scale and deliver fast, accurate
            results. Our team’s technical proficiency ensures seamless
            integration of data from multiple sources, including survey data,
            transactional data, and third-party sources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataProcessing;
