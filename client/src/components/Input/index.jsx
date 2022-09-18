import React from "react";
import { classNames } from "../../utils/classNames";

function Input({ className, ...rest }) {
  return (
    <input
      {...rest}
      className={classNames(
        "px-3 py-2 bg-white border text-sm rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-400 dark:focus:border-indigo-300 focus:outline-none w-full",
        className
      )}
    />
  );
}

export default Input;
