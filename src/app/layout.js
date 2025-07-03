// src/app/layout.js (Root Layout for Next.js 14 App Router)

import "./globals.css";

export const metadata = {
  title: {
    default: "Bolbol.az - Azərbaycanda ən böyük elan platforması",
    template: "%s | Bolbol.az",
  },
  description:
    "Bolbol.az - Azərbaycanda maşın, mənzil, iş və digər elanların ən böyük bazarı",
  keywords: ["elan", "bolbol", "azerbaijan", "maşın", "mənzil", "iş", "satış"],
  authors: [{ name: "Bolbol.az" }],
  creator: "Bolbol.az",
  publisher: "Bolbol.az",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bolbol.az"),
  alternates: {
    canonical: "/",
    languages: {
      "az-AZ": "/az",
    },
  },
  openGraph: {
    title: "Bolbol.az - Azərbaycanda ən böyük elan platforması",
    description:
      "Bolbol.az - Azərbaycanda maşın, mənzil, iş və digər elanların ən böyük bazarı",
    url: "https://bolbol.az",
    siteName: "Bolbol.az",
    locale: "az_AZ",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bolbol.az",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolbol.az - Azərbaycanda ən böyük elan platforması",
    description:
      "Bolbol.az - Azərbaycanda maşın, mənzil, iş və digər elanların ən böyük bazarı",
    images: ["/img/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        {/* Font preloading for performance */}
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

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://api.bolbol.az" />

        {/* Additional meta tags */}
        <meta name="language" content="az" />
        <meta name="geo.region" content="AZ" />
        <meta name="geo.placename" content="Azerbaijan" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bolbol.az",
              url: "https://bolbol.az",
              description: "Azərbaycanda ən böyük elan platforması",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://bolbol.az/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Browser compatibility warning */}
        <noscript>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              background: "#f44336",
              color: "white",
              textAlign: "center",
              padding: "10px",
              zIndex: 10000,
            }}
          >
            Bu sayt JavaScript-i tələb edir. Zəhmət olmasa JavaScript-i
            aktivləşdirin.
          </div>
        </noscript>

        {children}
      </body>
    </html>
  );
}
