import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
}
HomeLayout.propTypes = {
  children: PropTypes.node,
};
