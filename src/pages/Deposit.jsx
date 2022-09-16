import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import InvestmentItem from "../components/investmentItem";
import AppLayout from "../layouts/AppLayout";
import barcode from "./asset/barcode.svg";

function Deposit() {
  const INVESTMENTS = [
    {
      id: "1",
      title: "Basic",
      amount: "$500",
    },
    {
      id: "2",
      title: "Standard",
      amount: "$5000",
    },
    {
      id: "3",
      title: "Pro",
      amount: "$50000",
    },
  ];
  return (
    <div>
      <AppLayout>
        <div className="flex flex-col items-center w-screen">
          <div className="flex flex-col gap-3 pt-12 px-12 w-full">
            {INVESTMENTS.map((items) => {
              return (
                <InvestmentItem
                  key={items.id}
                  title={items.title}
                  amount={items.amount}
                />
              );
            })}
          </div>
          <div className="p-5 px-12 w-full ">
            <div className="flex flex-col gap-4">
              <h1 className="mb-5 font-bold text-indigo-500 items-start">
                DEPOSIT
              </h1>
              <Input className="bg-gray-100" placeholder="Amount" />
              <select
                className="px-4 py-3 mx-2 w-full bg-gray-100 outline-none rounded border"
                name=""
                id=""
              >
                <option value="Bitcion">Bitcoin</option>
                <option value="Ethrium">Ethrium</option>
                <option value="Solina">Solina</option>
              </select>
              <Input
                className="bg-gray-100"
                placeholder="3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5"
              />
            </div>
            <div className="flex justify-between items-center mt-10 px-24">
              <img src={barcode} alt="" />
              <p className="text-md w-64 justify-start ">
                <span className="text-lg font-bold">Important</span> <br />{" "}
                Please deposit only bitcoin to this address. Sending other types
                of asset might result to loss of funds
              </p>
            </div>
            <div className="flex justify-end w-full mt-4">
              <Button variant="primary">Deposit</Button>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
}

export default Deposit;
