import InvestmentItem from ".";

export default {
  title: "components/Investment item",
  component: InvestmentItem,
  argTypes: {
    amount: {
      control: "text",
    },
    title: {
      control: "text",
    },
    classes: {
      control: "text",
    },
  },
};

const Template = (args) => <InvestmentItem {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Basic",
  amount: "$ 500",
};
export const Standard = Template.bind({});
Standard.args = {
  title: "Standard",
  amount: "$ 5000",
};
export const Pro = Template.bind({});
Pro.args = {
  title: "Pro",
  amount: "$ 50000",
};
