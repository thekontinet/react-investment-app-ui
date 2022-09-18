import DataCard from ".";

export default {
  title: "Components/Card/DataCard",
  component: DataCard,
};

const Template = (args) => (
  <DataCard {...args}>
    <p className="text-indigo-300 text-xs">2 Pending transactions</p>
  </DataCard>
);

export const Default = Template.bind({});
Default.args = {
  title: "Balance",
  content: "$500.00",
  className: "text-indigo-500",
};
