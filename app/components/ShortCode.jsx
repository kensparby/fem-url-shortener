import { useEffect, useState } from "react";

export default function ShortCode({ submittedUrl, url }) {
  const [buttonText, setButtonText] = useState("Copy");

  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.previousSibling.textContent);
    setButtonText("Copied!");
  };

  useEffect(() => {
    let timeout;

    if (buttonText !== "Copy") {
      timeout = setTimeout(() => {
        setButtonText("Copy");
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [buttonText]);

  return (
    <div className="flex flex-col lg:flex-row w-full py-4 bg-white mt-5 rounded-md text-sm">
      <p className="text-ellipsis border-b-[1px] border-[color:#e5e5e5] lg:border-none px-4 pb-2 lg:py-2 inline-flex lg:mr-auto">
        {submittedUrl}
      </p>
      <a
        href={url}
        target="_blank"
        className="text-ellipsis px-4 py-2 text-p-cyan"
      >
        {url || "https://rel.ink/k4IKyk"}
      </a>
      <button
        className={`cursor-pointer flex items-center justify-center p-2 rounded-md mx-4 lg:w-20 bg-p-cyan text-white hover:saturate-50 hover:brightness-150 active:filter-none focus:saturate-50 focus:brightness-150 ${
          buttonText === "Copied!" && "bg-p-violet-dark transition-colors"
        }`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
