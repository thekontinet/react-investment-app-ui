import React from "react";
import AppLayout from "../layouts/AppLayout";
import DataCard from "../components/DataCard/index";
import TransactionItem from "../components/TransactionItem";
import RefererCard from "../components/RefererCard/index";

function Dashboard() {
  const transactions = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <AppLayout>
      <div className="container px-2 mx-auto">
        <div className="lg:grid grid-cols-3 lg:space-x-4 mt-8">
          <DataCard
            title="Balance"
            content="$3400"
            className="flex-1 mb-4 rounded bg-white"
          />
          <DataCard
            title="Profit"
            content="$1000"
            className="flex-1 mb-4 rounded bg-white"
          />
          <DataCard
            title="Bonus"
            content="$900"
            className="flex-1 mb-4 rounded bg-white"
          />
        </div>

        <div className="lg:grid grid-cols-3 items-start rounded lg:space-x-6">
          <div className="bg-white flex-1 p-4 mb-6 col-span-2 rounded">
            <h1 className="font-bold text-lg my-5">Transactions</h1>
            {transactions.map((t) => (
              <TransactionItem
                key={t}
                className="mb-4"
                time="3rd September 2022"
                variant="credit"
                amount="$300"
              />
            ))}
          </div>
          <div className="flex-2 bg-white p-4">
            <RefererCard className="shadow-none"></RefererCard>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
