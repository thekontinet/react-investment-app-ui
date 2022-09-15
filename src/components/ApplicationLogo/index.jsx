import React from "react";

function ApplicationLogo({ dark = false, className }) {
  return (
    <h1
      className={`font-bold drop-shadow-sm ${
        dark ? "text-indigo-900" : "text-white"
      } ${className}`}
    >
      Full Logo
    </h1>
  );
}

export default ApplicationLogo;
