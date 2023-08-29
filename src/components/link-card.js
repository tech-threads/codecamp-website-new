export const LinkCard = ({ label, href, icon, className }) => (
  <a
    className={`ring-1 ring-zinc-700 hover:ring-zinc-500/80 transition-all ease-in-out p-2 bg-zinc-800 hover:bg-zinc-700 shadow hover:shadow-lg rounded-lg flex flex-row items-center ${className} group`}
    href={href}
  >
    <div className="group-hover:ring-cyan-300 group-hover:text-cyan-300 transition-all ease-in-out flex items-center justify-center rounded-full bg-zinc-900/50 p-2 group-hover:bg-zinc-800 ring-zinc-700/80 ring-1">
      {icon}
    </div>
    <span className="transition-all ease-in-out	text-base font-medium text-white ml-2">
      {label}
    </span>
  </a>
);
