import WalletBalanceCard from ".";
import Button from "../Button";

export default {
  title: "Components/Card/WalletBalanceCard",
  component: WalletBalanceCard,
};

const Template = (args) => (
  <WalletBalanceCard {...args}>
    <Button variant="secondary">Deposit</Button>
  </WalletBalanceCard>
);

export const Default = Template.bind({});
Default.args = {
  title: "Wallet Balance",
  content: "$300.40",
};
