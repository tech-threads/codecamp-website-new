export const LinkCard = ({ label, href, icon, className }) => (
  <a
    className={`border border-zinc-700 hover:border-zinc-500/80 border-solid transition-all ease-in-out p-2 bg-zinc-800 hover:bg-zinc-700 shadow-xl rounded-lg flex flex-row items-center ${className} group`}
    href={href}
  >
    <div className="group-hover:border-cyan-300 group-hover:text-cyan-300 transition-all ease-in-out flex items-center justify-center rounded-full bg-zinc-900/50 p-2 group-hover:bg-zinc-800 border-zinc-700/80 border border-solid">
      {icon}
    </div>
    <span className="transition-all ease-in-out	text-base font-medium text-white ml-2">
      {label}
    </span>
  </a>
);
