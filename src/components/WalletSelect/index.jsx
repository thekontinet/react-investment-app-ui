/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/bitcoin.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WalletSelect() {
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 right-0 z-10 mt-2 origin-top-right rounded-md bg-white px-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {[1, 2, 3, 4, 5, 6].map((d) => (
              <Menu.Item key={d}>
                {({ active }) => (
                  <div className="flex border-b my-2 hover:bg-slate-50 relative border-slate-10 py-2 px-4 text-xl font-bold items-center bg-white justify-between">
                    <div className="flex items-center space-x-1">
                      <img className="w-6 h-6" src={Logo} alt="btc icon" />
                      <p className="text-sm">BTC WALLET</p>
                    </div>
                    <div className="flex space-x-4 text-sm">
                      <p>0.0778895BTC</p>
                      <span>=</span>
                      <p>$500.00</p>
                    </div>
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
