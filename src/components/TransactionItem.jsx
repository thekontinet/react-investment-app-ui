import React from "react";

export function CreditTransactionItem({ time, amount }) {
  return (
    <div>
      <div className="flex justify-between bg-white p-4 items-center border-2 border-green-100 rounded-md shadow-lg">
        <div className="flex items-center gap-3">
          <img className=" w-10 h-10 rounded-[50%] bg-indigo-400 " />
          <div>
            {" "}
            <p className="text-sm font-bold">CREDIT</p>
            <p className=" text-xs mt-1 font-light">{time}</p>
          </div>
        </div>
        <div>
          <p className=" text-sm text-green-500">
            <span>+</span> {amount}
          </p>
        </div>
      </div>
    </div>
  );
}
export function DebitTransactionItem({ time, amount }) {
  return (
    <div>
      <div className="flex justify-between bg-white p-4 items-center border-2 border-red-100 rounded-md shadow-lg">
        <div className="flex items-center gap-3">
          <img className=" w-10 h-10 rounded-[50%] bg-indigo-400 " />
          <div>
            {" "}
            <p className="text-sm font-bold">DEBIT</p>
            <p className=" text-xs mt-1 font-light">{time}</p>
          </div>
        </div>
        <div>
          <p className=" text-sm text-red-500">
            <span>-</span> {amount}
          </p>
        </div>
      </div>
    </div>
  );
}
