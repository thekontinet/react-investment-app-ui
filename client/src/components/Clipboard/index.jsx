import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Button from "../Button";
import {
  DocumentDuplicateIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";

function Clipboard({ content, variant = "primary", type = "copy" }) {
  const [value, setValue] = useState(content);
  const handlePaste = () => {
    navigator.clipboard.readText().then(
      (cliptext) => {
        setValue(cliptext);
        toast("Pasted from clipboard");
      },
      (err) => alert(err.message)
    );
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast("Copied to clipboard");
  };
  return (
    <div className="">
      <div className="flex items-center rounded bg-white border pr-2">
        <input
          value={value}
          onChange={(e) => setValue(() => e.target.value)}
          className="text-md flex-1 whitespace-nowrap text-ellipsis border border-slate-50 pl-2 focus:outline-0 focus:border-indigo-300 py-2 overflow-hidden w-4/6 mr-1"
        />
        <Button
          type="button"
          variant={variant}
          onClick={() => (type === "copy" ? handleCopy() : handlePaste())}
        >
          {type === "copy" && <DocumentDuplicateIcon className="w-5 h-5" />}
          {type === "paste" && <ClipboardIcon className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  );
}

export default Clipboard;
