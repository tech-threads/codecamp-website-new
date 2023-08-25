export const BigButton = ({ className, href, children }) => (
  <a
    className="flex rounded-full bg-cyan-800/90 text-sm font-medium text-zinc-200 ring-cyan/10 relative px-10 py-5 transition hover:text-cyan-400 shadow-xl"
    href={href}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="ml-1 w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  </a>
);
