import "../data-collection-and-analysis/global_data_colection.scss";
import Breadcrumb from "@/Component/widgets/BreadCrumb";
import Header from "@/Component/Header";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
// import { usePathname } from "next/navigation";
const FooterLogo = dynamic(() => import("@/Component/Footer/logoFoter"));
const FooterLink = dynamic(() => import("@/Component/Footer"));
const CopyFooter = dynamic(() => import("@/Component/Footer/copyFooter"));

const DataCollection = ({ children }: any) => {
  // const pathname = usePathname();
  return (
    <>
      <Header />
      <section className="data-collection banner-pd sec-margin-t overflow-hidden padding-left-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-image-left heading-sec">
              <h1>DATA COLLECTION & ANALYSIS</h1>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb
        hedding={"services"}
        urls="/services"
        activeUrl={"Data Collection & Analysis"}
      />
      {/* food sec*/}
      <section className="data-sec  padding-left-x light-gray-bg">
        <div className="container-fluid">
          <div className="brand-hedder offering">
            <p>
              Harness the power of informed decision-making with our expert data
              collection and analysis services. We gather high-quality, reliable
              data from sources like surveys, focus groups, and real-time
              streams, customized to your needs. Our advanced techniques
              transform raw data into actionable insights, revealing trends,
              behaviors, and opportunities. Committed to confidentiality and
              precision, we deliver results that drive strategic success and
              give you a competitive edge.
            </p>
          </div>
        </div>
      </section>

      {children}

      {/*END*/}
      {/*Main footer */}
      <FooterLogo />
      {/*END*/}
      {/*Url Footer*/}
      <FooterLink />
      {/*END*/}
      {/*Footer Copyright*/}
      <CopyFooter />
      <ToastContainer position="top-right" />
      {/*END*/}
    </>
  );
};

export default DataCollection;
