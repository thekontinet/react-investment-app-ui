import React from "react";
import { BanknotesIcon } from "@heroicons/react/24/solid";

function DataCard({ children, title, content, className, ...rest }) {
  return (
    <div {...rest} className={`shadow px-14 py-6 max-w-sm ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">{title}</p>
        <div className="bg-indigo-100 p-2 rounded-full">
          <BanknotesIcon className="w-5 h-5 text-indigo-500" />
        </div>
      </div>
      <div>
        <p className="font-bold text-5xl mb-4">{content}</p>
      </div>
      {children}
    </div>
  );
}

export default DataCard;
