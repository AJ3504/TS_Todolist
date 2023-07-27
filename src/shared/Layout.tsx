import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
