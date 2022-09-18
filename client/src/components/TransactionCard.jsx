import React, { useState } from "react";
import { CreditTransactionItem, DebitTransactionItem } from "./TransactionItem";

function TransactionCard() {
  const TRANSACTIONS = [
    {
      id: "1",
      status: true,
      amount: "$ 3000",
      time: " 10|12|2022 10:30am",
    },
    {
      id: "2",
      status: false,
      amount: "$ 3000",
      time: "19|12|2022 9:30pm",
    },
  ];

  return (
    <div className=" p-5 bg-slate-200 flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-indigo-500">Transactions</h1>

      {/* using components */}
      {TRANSACTIONS.map((trans) => {
        return trans.status ? (
          <CreditTransactionItem
            key={trans.id}
            time={trans.time}
            amount={trans.amount}
          />
        ) : (
          <DebitTransactionItem
            key={trans.id}
            time={trans.time}
            amount={trans.amount}
          />
        );
      })}
    </div>
  );
}

export default TransactionCard;
