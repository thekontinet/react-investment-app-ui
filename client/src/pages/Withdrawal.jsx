import { useEffect, useState } from "react";
import AppLayout from "../layouts/AppLayout";
import Input from "../components/Input/index";
import Button from "../components/Button";
import IconInput from "../components/IconInput";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import WalletSelect from "../components/WalletSelect";
import Clipboard from "../components/Clipboard";

function Withdrawal() {
  const [buttons, setButtons] = useState([
    { text: "BTC", active: true },
    { text: "SOL", active: false },
    { text: "TRON", active: false },
  ]);

  const handleSwitch = (text) =>
    setButtons(() =>
      buttons.map((button) => ({ ...button, active: button.text === text }))
    );

  const activeButton = buttons.find((button) => button.active);

  return (
    <AppLayout>
      <div className="max-w-5xl w-full mx-auto mt-5 text-sm rounded text-slate-600 bg-white shadow px-10 py-4">
        <h1 className="text-2xl my-9 font-bold">Withdraw</h1>
        <form action="">
          <div>
            <div className="mb-4">
              <WalletSelect />
            </div>

            <div className="mb-4">
              <label htmlFor="">Wallet Address</label>
              <Clipboard content="Enter content here" type="copy" />
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
          </div>
          <Button variant="primary" className="my-5">
            Proceed
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}

export default Withdrawal;
