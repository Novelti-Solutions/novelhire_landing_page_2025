import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import ContactUsForm from "@/sections/contactus/contact-us-form";
import HeroPage from "@/sections/contactus/hero-page";
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
          className="w-full h-40 -z-10  opacity-40 object-cover absolute top-0"
        />
        {/* image2 */}
        <Image
          src="/features/bg-bottom.svg"
          alt="df"
          width={500}
          height={500}
          className="w-full h-40 -z-10 opacity-40  object-cover absolute bottom-0"
        />

        <Header />

        <div
          className={cn(
            "mb-16 flex flex-col mx-auto max-w-screen-xl p-8 md:py-10 lg:py-24 md:justify-between lg:mb-28 lg:flex-row"
          )}
        >
          <HeroPage
            caption={"Shape the Future of Talent Development Together"}
            title={"Connect with NovelHire"}
            content={
              "We’re here to answer any questions you may have about how NovelHire can transform your organization’s talent assessment and development process. "
            }
          />

          <ContactUsForm />
        </div>
      </div>
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
