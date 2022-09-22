import React from "react";
import { Link, NavLink } from "react-router-dom";
import { classNames } from "../utils/classNames";

function NavItem({ to, active, children, ...rest }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        classNames(
          isActive
            ? "bg-indigo-900 text-white"
            : "text-indigo-300 hover:bg-indigo-700 hover:text-white",
          "px-3 py-2 rounded-md text-sm font-medium"
        )
      }
      aria-current={active ? "page" : undefined}
    >
      {children}
    </NavLink>
  );
}
// classNames(
//   active
//     ? "bg-indigo-900 text-white"
//     : "text-indigo-300 hover:bg-indigo-700 hover:text-white",
//   "px-3 py-2 rounded-md text-sm font-medium"
// )
export default NavItem;
