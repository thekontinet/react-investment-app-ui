import ClipBoard from ".";

export default {
  title: "Components/Clipboard",
  component: ClipBoard,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      default: "primary",
      description: "Cipboard Button variant",
    },
    type: {
      control: "select",
      options: ["copy", "paste"],
      default: "copy",
      description: "Cipboard Type",
    },
  },
};

const Template = (args) => <ClipBoard {...args} />;

export const Copy = Template.bind({});
Copy.args = {
  content: "Enter content here",
  type: "copy",
};

export const Paste = Template.bind({});
Paste.args = {
  content: "Enter content here",
  type: "paste",
};
