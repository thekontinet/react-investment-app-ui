import { classNames } from "../../utils/classNames";
import Button from "../Button";

function IconButton({ children, icon, position, className, ...rest }) {
  return (
    <Button className={classNames("group", className)} {...rest}>
      <span className="group-hover:-translate-x-2 transition-all">
        {(position === "left" || position === "both") && icon}
      </span>
      <span class="mx-2 block">{children}</span>
      <span className="group-hover:translate-x-2 transition-all">
        {(position === "right" || position === "both") && icon}
      </span>
    </Button>
  );
}

export default IconButton;
