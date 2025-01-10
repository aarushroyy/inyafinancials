import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { acid, acidBold, acidMedium, acidNormal, acidRegular, inter } from "../styles/fonts";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Inya Financials",
  description: "Investment & Financial Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acid.variable} ${inter} ${acidBold.variable} ${acidMedium.variable} ${acidNormal.variable} ${acidRegular.variable} `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
