import React from "react";
import Footer from "./patials/Footer";
import Navbar from "./patials/Navbar";

function AppLayout({ children }) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
