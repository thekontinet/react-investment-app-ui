import React from "react";

function ApplicationLogo({ theme = "light", className }) {
  return (
    <h1
      className={`font-bold ${
        theme == "dark" ? "text-indigo-900" : "text-white"
      } ${className}`}
    >
      Full Logo
    </h1>
  );
}

export default ApplicationLogo;
