import { useState } from "preact/hooks";

export default function CodeBlock(props) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="group relative mt-8">
      <span className="pointer-events-none absolute right-2 top-2 select-none text-xs font-medium text-gray-400 transition-opacity group-hover:opacity-0">
        {props.title}
      </span>
      <button
        type="button"
        className="absolute right-2 top-2 flex rounded-md border border-gray-700 bg-gray-800 p-2 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onCopy}
      >
        {copied ? props.checkIcon : props.copyIcon}
      </button>
      {props.codeComponent}
    </div>
  );
}
