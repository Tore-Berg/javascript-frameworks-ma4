import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
