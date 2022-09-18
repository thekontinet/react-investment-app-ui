function variantClassNames(variant, ...classNames) {
  let classes = "";
  switch (variant) {
    case "primary":
      classes =
        "bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-300 text-white";
      break;
    case "secondary":
      classes =
        "bg-slate-600 hover:bg-slate-500 focus:ring-slate-300 text-white";
      break;
    default:
      classes = "shadow hover:shadow-md";
      break;
  }

  return [...classNames, classes].join(" ");
}

function Button({ children, className, variant, ...rest }) {
  return (
    <button
      {...rest}
      className={variantClassNames(
        variant,
        "flex justify-center items-center rounded px-4 py-2 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform focus:outline-none focus:ring focus:ring-opacity-80",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
