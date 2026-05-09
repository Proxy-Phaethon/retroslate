import type { Metadata } from "next";
import "./globals.css";
import "./shell.css";

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
      <body>{children}</body>
    </html>
  );
}
