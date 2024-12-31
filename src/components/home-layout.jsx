import Footer from "./footer";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
