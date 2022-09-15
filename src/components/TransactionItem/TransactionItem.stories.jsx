import TransactionItem from ".";

export default {
  title: "components/Transaction item",
  component: TransactionItem,
  argTypes: {
    variant: {
      control: "select",
      options: ["credit", "debit"],
      default: "credit",
      description: "Transaction variant",
    },
    amount: {
      control: "number",
    },
    time: {
      control: "date",
    },
  },
};

const Template = (args) => <TransactionItem {...args} />;

export const Credit = Template.bind({});
Credit.args = {
  time: "12 June 2021",
  amount: 500,
  variant: "credit",
};

export const Debit = Template.bind({});
Debit.args = {
  time: "12 June 2021",
  amount: 500,
  variant: "debit",
};
