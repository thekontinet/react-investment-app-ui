import Button from "../Button";

function IconButton({ children, icon, position, ...rest }) {
  return (
    <Button {...rest}>
      {(position === "left" || position === "both") && icon}
      <span class="mx-2 block">{children}</span>
      {(position === "right" || position === "both") && icon}
    </Button>
  );
}

export default IconButton;
