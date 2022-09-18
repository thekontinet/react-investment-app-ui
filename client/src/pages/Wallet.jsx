import React from "react";
import AppLayout from "../layouts/AppLayout";
import WalletBalanceCard from "../components/WalletBalanceCard";
import TransactionItem from "../components/TransactionItem";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Wallet() {
  const transactions = [1, 2, 3, 4, 5, 6, 8, 9];
  return (
    <AppLayout>
      <div className="w-full max-w-5xl mx-auto px-8 py-4 mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <WalletBalanceCard content="$300.40" title="Wallet Balance">
          <Link to="/deposit">
            <Button variant="primary">Deposit</Button>
          </Link>
          <Link to="/withdraw">
            <Button variant="primary">Withdraw</Button>
          </Link>
          <Link to="/transfer">
            <Button variant="primary">Transfer</Button>
          </Link>
        </WalletBalanceCard>
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold my-4">Recent Transactions</h3>
          <Link to="/transactions" className="text-sm text-indigo-300">
            See All
          </Link>
        </div>
        <div>
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
      </div>
    </AppLayout>
  );
}

export default Wallet;
