import React, { useState } from "react";
import AppLayout from "../layouts/AppLayout";
import Input from "../components/Input";
import Logo from "../assets/bitcoin.svg";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import Button from "../components/Button";
import IconInput from "../components/IconInput";
import WalletSelect from "../components/WalletSelect";

function Transfer() {
  // const [toggle, setToggle] = useState(false)

  return (
    <AppLayout>
      <div className="max-w-5xl w-full mx-auto mt-5 rounded text-sm text-slate-600 bg-white shadow px-10 py-4">
        <h1 className="text-2xl my-9 font-bold">TRANSFER</h1>
        <form action="">
          <div>
            <div className="mb-4">
              <WalletSelect />
            </div>

            <div className="mb-4">
              <label htmlFor="">Recipient</label>
              <Input className="py-2" placeholder="Enter a BTC address" />
            </div>

            <div className="mb-4">
              <label htmlFor="">Amount</label>
              <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-x-2">
                <IconInput icon="USD" />
                <div className="flex lg:rotate-90 sm:flex-row sm:mx-auto text-slate-400">
                  <ArrowUpIcon className="w-5 h-5" />
                  <ArrowDownIcon className="w-5 h-5" />
                </div>
                <IconInput icon="BTC" />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="">Balance</label>
              <Input placeholder="Main balance" />
            </div>

            <div className="mb-4">
              <label htmlFor="">Description</label>
              <Input placeholder="Description" />
            </div>
          </div>
          <Button variant="primary" className="my-5">
            Proceed
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}

export default Transfer;
