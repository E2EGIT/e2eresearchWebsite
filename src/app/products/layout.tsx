import "../products/globalTec.scss";
import NextTopLoader from "nextjs-toploader";
import { ProgressBarShow } from "@/Component/ProgressBarHeader";
import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";

// Dynamically import footer components to reduce initial bundle size
const FooterLogo = dynamic(() => import("@/Component/Footer/logoFoter"));
const FooterLink = dynamic(() => import("@/Component/Footer"));
const CopyFooter = dynamic(() => import("@/Component/Footer/copyFooter"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#f05a5c" />
      <ProgressBarShow />
      <div id="root">
        {children}
        {/* Footer components will be loaded separately */}
        <FooterLogo />
        <FooterLink />
        <CopyFooter />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
