export const BigButton = ({ className, href, children }) => (
  <a
    className="flex rounded-full bg-teal-500/90 text-sm font-medium text-zinc-800 shadow-lg shadow-teal-800/5 ring-1 ring-teal-900/5 backdrop-blur dark:bg-teal-800/90 dark:text-zinc-200 dark:ring-teal/10 relative px-10 py-5 transition hover:text-teal-500 dark:hover:text-teal-400"
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
