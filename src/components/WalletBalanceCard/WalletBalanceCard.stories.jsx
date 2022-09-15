import WalletBalanceCard from ".";

export default {
  title: "Components/Card/WalletBalanceCard",
  component: WalletBalanceCard,
};

const Template = (args) => <WalletBalanceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Wallet Balance",
  content: "$300.40",
};
