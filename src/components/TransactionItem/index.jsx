import React from "react";
import { classNames } from "../../utils/classNames";

const variantClasses = (variant) => {
  if (variant === "credit") {
    return "border-green-200 text-green-400";
  }
  if (variant === "debit") {
    return "border-red-200 text-red-400";
  }
};

export default function TransactionItem({ time, variant, amount }) {
  return (
    <div
      className={classNames(
        "flex justify-between p-4 items-center border-2 rounded-md shadow-lg",
        variantClasses(variant)
      )}
    >
      <div className="flex items-center space-x-3">
        <img className=" w-10 h-10 rounded-[50%] bg-indigo-400 " />
        <div>
          <p className="text-sm font-bold text-slate-500">
            {variant.toUpperCase()}
          </p>
          <p className="text-xs text-slate-300 font-light">{time}</p>
        </div>
      </div>
      <p className="text-sm font-bold">{amount}</p>
    </div>
  );
}
