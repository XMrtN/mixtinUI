import { useState } from "preact/hooks";

export default function CodeBlock(props) {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(props.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="group relative mt-8 font-mono text-sm">
      <span className="pointer-events-none absolute right-2 top-2 select-none text-xs font-semibold text-neutral-400 transition-opacity group-hover:opacity-0">
        {props.title}
      </span>
      <button
        type="button"
        className="absolute right-2 top-2 flex rounded-md border border-neutral-700 bg-neutral-800 p-2 text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onCopy}
      >
        {copied ? props.checkIcon : props.copyIcon}
      </button>
      {props.codeComponent}
    </div>
  );
}
