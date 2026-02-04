// import type { Metadata } from "next";
import "../industries/global_industries.scss";
import NextTopLoader from "nextjs-toploader";
import { ProgressBarShow } from "@/Component/ProgressBarHeader";
import Header from "@/Component/Header";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

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
      <div id="root">
        <ProgressBarShow />
        <Header />
        {children}
        <FooterLogo />
        <FooterLink />
        <CopyFooter />
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}
