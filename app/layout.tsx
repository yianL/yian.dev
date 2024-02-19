import { Noto_Sans } from "next/font/google";
import Script from "next/script";

import { SiteTitle, SiteDescription } from "../lib/constants";

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
        <Script
          src="https://kit.fontawesome.com/87445c11d6.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
