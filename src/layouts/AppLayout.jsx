import React from "react";
import Footer from "./patials/Footer";
import Navbar from "./patials/Navbar";

function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
