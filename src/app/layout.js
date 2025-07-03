import "../styles/main.css";
import "../styles/loading.css";
import { metadata } from "./metadata";
import Providers from "./providers";

// Export metadata (this stays on server side)
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <head>
        {/* Font preloading */}
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
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
