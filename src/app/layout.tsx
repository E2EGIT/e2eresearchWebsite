import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/assets/styles/globals.scss";
import NextTopLoader from "nextjs-toploader";
import { ProgressBarShow } from "@/Component/ProgressBarHeader";
import { ToastContainer } from "react-toastify";
import CookieConsentBanner from "@/Component/Cookies";
import Script from "next/script";
import Head from "next/head";
// import { extractCritical } from "@emotion/server";

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fav-iocns.png" as="image" />

        <link rel="icon" href="/fav-iocns.png" sizes="32x32" />
        <link rel="icon" href="/fev-icons-192x192.png" sizes="192x192" />
        <link rel="icon" href="/fav-icon-180x180.png" />
        <link rel="icon" href="/fav-icons-270x270.png" />

        {/* SEO Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="E2E Research Services Pvt. Ltd" />
        <meta property="og:url" content="%PUBLIC_URL%/" />
        <meta
          property="og:site_name"
          content="E2E Research Services Pvt. Ltd"
        />
        <meta
          property="article:modified_time"
          content="2024-01-22T08:13:53+00:00"></meta>
        <meta property="og:image" content="/fav-iocns.png"></meta>
        <meta property="og:image:width" content="316"></meta>
        <meta property="og:image:height" content="316"></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content="/fav-iocns.png"></meta>
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#000000"></meta>
        <meta name="robots" content="index, follow"></meta>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          as="style"
        />
        <meta
          name="google-site-verification"
          content="ljMqU8UYXmNy9FT5jgtPAknppNmmDzTnxNbV5_F7eSs"
        />

        <link rel="canonical" href="https://www.e2eresearch.com/" />
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PNPXZVE5WQ"`}
        />
        <meta property="og:image" content="/fav-iocns.png" />
        <meta property="og:image:width" content="316" />
        <meta property="og:image:height" content="316" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/fav-iocns.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Theme and browser meta */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="ljMqU8UYXmNy9FT5jgtPAknppNmmDzTnxNbV5_F7eSs"
        />
        <link rel="canonical" href="https://www.e2eresearch.com/" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          as="style"
        />

        {/* Google Analytics - Load with low priority */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PNPXZVE5WQ`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PNPXZVE5WQ');
          `}
        </Script>
      </head>

      <body>
        <NextTopLoader showSpinner={false} color="#f05a5c" />
        <CookieConsentBanner />
        <div id="root">
          <ProgressBarShow />
          {children}
        </div>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
