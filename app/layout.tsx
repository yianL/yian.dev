import { Noto_Sans } from "next/font/google";
import Script from "next/script";

import { SiteTitle, SiteDescription, IS_LOCAL_DEV } from "../lib/constants";

import "../styles/index.css";

export const metadata = {
  title: SiteTitle,
  description: SiteDescription,
};

const noto = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={noto.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=202403"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=202403"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=202403"
        />
        <link rel="manifest" href="/site.webmanifest?v=202403" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=202403"
          color="#4c574a"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=202403" />
        <meta name="msapplication-TileColor" content="#4c574a" />
        <meta name="theme-color" content="#c6ccc3" />

        {!IS_LOCAL_DEV && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-P9MJR96YXY"
              strategy="beforeInteractive"
            />
            <Script id="ga" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-P9MJR96YXY');
              `}
            </Script>
          </>
        )}
        <Script
          src="https://kit.fontawesome.com/87445c11d6.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
