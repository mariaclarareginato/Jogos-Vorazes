import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jogos Vorazes",
  description: "Site sobre a saga literária e cinematográfica Jogos Vorazes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
