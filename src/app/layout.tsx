import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erix Coach and Car Limo Service | Minneapolis Luxury Transportation",
  description:
    "Minnesota's top trusted luxury transportation provider. Professional black car service, airport rides, wine tours, and limo service in Minneapolis. Call 952-208-4920.",
  keywords: [
    "limo service Minneapolis",
    "black car service Minnesota",
    "airport transportation MSP",
    "wine tour limo",
    "Erix Coach and Car",
    "luxury SUV transportation",
  ],
  openGraph: {
    title: "Erix Coach and Car Limo Service",
    description: "Safety, Reliability, Communication & Quality = TRUST",
    url: "https://erixmn.com",
    siteName: "Erix Coach and Car Transportation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
