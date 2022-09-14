import React from "react";

function WalletBalance({ children }) {
  return (
    <div className="grid md justify-center m-2">
        <div className="grid justify-center">
            <h1 className="font-bold text-2xl">$2000.00</h1>
            <h1 className="text-base">Wallet Balance</h1>
        </div>
        <div className="m-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">Deposit</button>
            <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1">Withdraw</button>
        </div>
        
    </div>  
  );
}

export default WalletBalance;
