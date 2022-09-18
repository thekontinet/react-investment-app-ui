import React from "react";
import Button from "../Button";

function WalletBalanceCard({ children, title, content }) {
  return (
    <div className="grid md justify-center p-5">
      <div className="grid justify-center text-center">
        <h1 className="text-sm font-bold tracking-wide text-indigo-500">
          {title}
        </h1>
        <p className="font-bold text-5xl mb-4">{content}</p>
      </div>
      <div className="flex justify-center space-x-6">{children}</div>
    </div>
  );
}

export default WalletBalanceCard;
