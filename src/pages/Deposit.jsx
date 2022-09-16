import React from "react";
import InvestmentItem from "../components/investmentItem";
import AppLayout from "../layouts/AppLayout";

function Deposit() {
  const INVESTMENTS = [
    {
      title: "Basic",
      amount: "$500",
    },
    {
      title: "Standard",
      amount: "$5000",
    },
    {
      title: "Pro",
      amount: "$50000",
    },
  ];
  return (
    <div>
      <AppLayout>
        <div className="flex flex-col gap-3 p-5">
          {INVESTMENTS.map((items) => {
            return <InvestmentItem title={items.title} amount={items.amount} />;
          })}
        </div>
      </AppLayout>
    </div>
  );
}

export default Deposit;
