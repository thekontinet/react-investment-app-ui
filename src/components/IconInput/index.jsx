import Input from "../../components/Input";
import React from "react";

function IconInput({ icon, className = "", ...rest }) {
  return (
    <div className="flex items-center w-full">
      <Input {...rest} className="rounded-tr-none rounded-br-none rounded" />
      <span className="bg-indigo-500 py-2 px-4 border-indigo-500 border font-bold text-white rounded-tr rounded-br">
        {icon}
      </span>
    </div>
  );
}

export default IconInput;
