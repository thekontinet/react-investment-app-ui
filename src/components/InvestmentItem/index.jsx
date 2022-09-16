import React from "react";
import icon from "./asset/icon.svg";
import { classNames } from "../../utils/classNames";

function InvestmentItem({ title, amount, classes }) {
  return (
    <div
      className={classNames(
        "p-4 bg-white border shadow-md rounded-md border-indigo-200 bg-red hover:border-indigo-600 transition-all ease-in",
        classes
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 py-2">
          <img className="mb-1 w-5" src={icon} alt="" />
          <p className="text-xl tracking-wide text-black">{title}</p>
        </div>
        <p className="text-2xl font-bold text-indigo-700">
          {amount} <span className=" text-sm font-light">/Yearly</span>
        </p>
      </div>
    </div>
  );
}

export default InvestmentItem;
