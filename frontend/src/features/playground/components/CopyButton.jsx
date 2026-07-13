import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyButton({ text }) {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {

        setCopied(false);

      }, 2000);

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <button
      onClick={handleCopy}
      className="rounded-lg bg-zinc-800 p-2 hover:bg-zinc-700 transition"
    >

      {copied ? <Check size={16} /> : <Copy size={16} />}

    </button>

  );

}