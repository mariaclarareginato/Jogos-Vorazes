"use client";

import { usePathname } from "next/navigation";
import Header from "./controllers/Header";
import Footer from "./controllers/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideFooter = pathname === "/";

  return (
    <>
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
