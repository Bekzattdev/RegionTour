import type { Metadata } from "next";
import "./globals.scss";
import RootLayoutClient from "./layout.client";

export const metadata: Metadata = {
  title: "RegionTour",
  description: "Tours to 7 regions in Kyrgyzstan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
