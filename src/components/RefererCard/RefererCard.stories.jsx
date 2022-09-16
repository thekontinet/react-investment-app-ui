import RefererCard from ".";

export default {
  title: "Components/Card/RefererCard",
  component: RefererCard,
};

const Template = (args) => <RefererCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Enter content here",
  type: "copy",
};
