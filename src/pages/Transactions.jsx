import React from "react";
import { Link } from "react-router-dom";
import TransactionItem from "../components/TransactionItem";
import AppLayout from "../layouts/AppLayout";

function Transactions() {
  const transactions = [1, 2, 3, 4, 5, 6, 8, 9];
  return (
    <AppLayout>
      <div className="w-full max-w-5xl mx-auto px-8 py-4 mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h3 className="text-md font-semibold my-4">Recent Transactions</h3>
        {transactions.map((t) => (
          <Link key={t} to={`/transactions/${t}`}>
            <TransactionItem
              amount={500}
              time="12 June 2021"
              variant="credit"
              className="mb-2"
            />
          </Link>
        ))}
      </div>
    </AppLayout>
  );
}

export default Transactions;
