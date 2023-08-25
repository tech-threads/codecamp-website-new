export const Button = ({ className, href, children }) => (
  <a
    className="flex rounded-full bg-cyan-500/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-cyan-800/5 ring-1 ring-cyan-900/5 backdrop-blur dark:bg-cyan-800/90 dark:text-zinc-200 dark:ring-cyan/10 relative py-2 transition hover:text-cyan-500 dark:hover:text-cyan-400 h-9"
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
