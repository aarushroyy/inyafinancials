import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const acid = localFont({
  src: "../../public/fonts/acid-grotesk.woff",
  variable: "--font-acid",
  weight: "800",
  style: "normal",
  display: "swap",
});

export const acidBold = localFont({
    src: "../../public/fonts/acid-grotesk-bold.otf",
    variable: "--font-acid-bold",
    weight: "800",
    style: "normal",
    display: "swap",
  });

export const acidRegular = localFont({
    src: "../../public/fonts/AcidGrotesk-Regular.otf",
    variable: "--font-acid-regular",
    style: "normal",
    display: "swap",
  });
  
export const acidMedium = localFont({
    src: "../../public/fonts/acid-grotesk-medium.otf",
    variable: "--font-acid-medium",
    style: "normal",
    display: "swap",
  });

export const acidNormal = localFont({
    src: "../../public/fonts/acid-grotesk-normal.otf",
    variable: "--font-acid-normal",
    style: "normal",
    display: "swap",
 });
