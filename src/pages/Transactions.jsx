import React from "react";
import AppLayout from "../layouts/AppLayout";
import TransactionItem from "../components/TransactionItem/index"

function Transactions() {
  const update = [
    {
      time: "12|09|2022 11:00pm",
      amount: "$10,000",
      variant: "debit",
    },
    {
      time: "12|09|2022 12:51am",
      amount: "$50,000",
      variant: "credit",
    },
    {
      time: "13|10|2022 09:00am",
      amount: "$30,000",
      variant: "credit",
    },
    {
      time: "13|09|2022 10:22am",
      amount: "$5,000",
      variant: "debit",
    },
    {
      time: "13|09|2022 10:32am",
      amount: "$1,000,000",
      variant: "credit",
    },
  ]

  return (
    <AppLayout>
      <div className="mt-5 p-6 mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p className="m-5 font-bold">Transactions</p>
        <div className="flex flex-col gap-3">
        {update.map((items) =>{
          return(
            <TransactionItem variant={items.variant} amount={items.amount} time={items.time} />
          )
        })};
        </div>
      </div>
    </AppLayout>
  )
}

export default Transactions;
