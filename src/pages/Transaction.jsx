import React from "react";
import AppLayout from "../layouts/AppLayout";
import cryptoIcon from "../assets/bitcoin.svg";
import Button from "../components/Button";

function Transaction() {
  return (
    <AppLayout>
      <div className="px-2">
        <div className="w-full max-w-5xl mx-auto px-8 py-4 mt-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <span className="text-3xl font-bold text-center block">$500</span>
          <span className="text-xs text-center text-indigo-300 block">
            Amount
          </span>

          <ul className="my-4">
            <li className="flex justify-between items-center border-b py-3 px-4 text-sm">
              <span className="font-semibold">Wallet</span>
              <span>
                <img
                  src={cryptoIcon}
                  className="w-4 h-4 inline-block mr-1"
                  alt="assets"
                />
                Bitcoin
              </span>
            </li>
            <li className="flex justify-between items-center border-b py-3 px-4 text-sm">
              <span className="font-semibold">Hash</span>
              <span>342453451352345</span>
            </li>
            <li className="flex justify-between items-center border-b py-3 px-4 text-sm">
              <span className="font-semibold">Date</span>
              <span>12 June 2022</span>
            </li>
            <li className="flex justify-between items-center border-b py-3 px-4 text-sm">
              <span className="font-semibold">Email</span>
              <span>example@email.com</span>
            </li>
          </ul>
          <Button className="mx-auto mt-10" variant="primary">
            Share Reciept
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Transaction;
