import React from "react";
import { classNames } from "../../utils/classNames";
import Clipboard from "../Clipboard";

function RefererCard({ className, ...rest }) {
  return (
    <div
      {...rest}
      className={classNames(
        "shadow text-center px-5 py-14 rounded flex flex-col space-y-4",
        className
      )}
    >
      <h1 className="text-xl font-bold capitalize mb-5">
        Refer and earn upto $500 bonus
      </h1>
      <Clipboard content="https://example.com/12345" type="copy" />
      <p className="text-sm text-slate-500">
        Copy your referral link and share to <br /> others to earn bonus points
      </p>
    </div>
  );
}

export default RefererCard;
