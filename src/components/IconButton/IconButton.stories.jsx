import IconButton from ".";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default {
  title: "Components/Button",
  component: IconButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      default: "primary",
      description: "Button variant",
    },
    position: {
      control: "select",
      options: ["left", "right", "both"],
      default: "left",
      description: "Button icon position",
    },
  },
};

const Template = (args) => <IconButton {...args}>Button</IconButton>;

export const Icon = Template.bind({});
Icon.args = {
  icon: <ArrowPathIcon className="w-4 h-4" />,
  position: "left",
  variant: "primary",
};
