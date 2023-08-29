import { useState } from "react";

export const Section = ({ sectionTitle, children, className = "" }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const anchorId = sectionTitle.toLowerCase().replace(" ", "-");

  const handleCopyClick = (event) => {
    event.stopPropagation();

    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;

    // Copy to clipboard
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className={`${className} w-3/4 mx-auto`}>
      <a id={anchorId}>
        <h2 className="flex-1 font-bold text-white mb-4 text-2xl relative group flex flex-row items-center">
          {sectionTitle}
          <svg
            onClick={handleCopyClick}
            title="Copy link"
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`ml-2 w-5 h-5 transition-opacity ease-in-out duration-150 ${
              copySuccess ? "opacity-50" : "opacity-0"
            } group-hover:opacity-50 text-zinc-300`}
          >
            <path
              fillRule="evenodd"
              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
              clipRule="evenodd"
            />
          </svg>
          {copySuccess && (
            <span className="ml-1 text-sm transition-opacity ease-in-out duration-150 font-medium opacity-50">
              {copySuccess}
            </span>
          )}
        </h2>
      </a>
      <div className="flex-1 text-lg text-zinc-400">{children}</div>
    </div>
  );
};
