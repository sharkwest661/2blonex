"use client";
// src/components/layout/Layout.js
import { useEffect } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const Layout = ({
  children,
  title = "Bolbol.az - Azərbaycanda ən böyük elan platforması",
  description = "Bolbol.az - Azərbaycanda maşın, mənzil, iş və digər elanların ən böyük bazarı",
  noHeader = false,
  noFooter = false,
  containerClass = "",
  pageClass = "",
}) => {
  // Handle mobile menu body scroll lock
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove("noscroll");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Arimo-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Arimo-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Meta tags for SEO */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bolbol.az" />
        <meta property="og:image" content="/img/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/img/og-image.jpg" />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bolbol.az",
              url: "https://bolbol.az",
              description: description,
              potentialAction: {
                "@type": "SearchAction",
                target: "https://bolbol.az/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <div className={clsx("page-wrapper", pageClass)}>
        {!noHeader && <Header />}

        <main className={clsx("main-content", containerClass)}>{children}</main>

        {!noFooter && <Footer />}
      </div>

      {/* Browser compatibility warning for IE */}
      <div className="d-none">
        {/*[if lt IE 9]>
        <p className="browserupgrade">
          You are using an <strong>outdated</strong> browser. Please
          <a href="https://browsehappy.com/">upgrade your browser</a> to improve
          your experience and security.
        </p>
        <![endif]*/}
      </div>
    </>
  );
};

export default Layout;
