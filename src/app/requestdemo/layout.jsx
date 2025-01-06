import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="relative z-10 ">
        {/* image1 */}
        <Image
          src="/features/bg-top.svg"
          alt="df"
          width={500}
          height={500}
          className="w-full h-48 -z-10  opacity-40 object-cover absolute top-0"
        />
        <Header />
      </div>

      <main className="mx-auto max-w-screen-xl p-8 md:py-10 lg:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
