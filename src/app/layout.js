import {
  Inter,
  Montserrat,
  Instrument_Sans,
  Epilogue,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Novel Hire",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mano",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${instrumentSans.variable} ${epilogue.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
