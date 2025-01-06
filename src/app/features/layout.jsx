import Footer from "@/components/footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <main className="bg-[#f9f7f7]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
