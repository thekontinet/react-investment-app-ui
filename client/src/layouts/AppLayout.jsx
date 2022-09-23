import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authContext from "../context/authContext";
import api from "../services/axios";
import Footer from "./patials/Footer";
import Navbar from "./patials/Navbar";

function AppLayout({ children }) {
  const { user, setUser } = useContext(authContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(function () {
    api
      .get("/users/me")
      .then((res) => {
        setUser(() => {
          return res.data;
        });
      })
      .catch((err) => setUser(null))
      .finally(() => setLoaded(true));
  }, []);

  if (loaded && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="bg-slate-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
