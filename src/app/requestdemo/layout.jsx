import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
