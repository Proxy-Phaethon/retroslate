import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./shell.css";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Retroslate",
    template: "%s | Retroslate",
  },
  description:
    "Retroslate builds secure software, open-source tools, portfolios, and web experiences.",
  metadataBase: new URL("https://retroslate.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={courierPrime.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
