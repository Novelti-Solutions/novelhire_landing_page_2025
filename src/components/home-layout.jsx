import React from "react";
import Header from "./header";
import HomePage from "./home-page";
import Footer from "./footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-gradient-to-br   from-fuchsia-50 to-fuchsia-200">
        <div className="bg-[url('/grid-square.svg')]  min-h-screen   bg-cover bg-center  w-full">
          <Header />
          <HomePage />
        </div>
      </div>

      <main className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10">{children}</main>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
