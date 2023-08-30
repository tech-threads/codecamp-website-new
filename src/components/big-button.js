import { motion } from "framer-motion";

export const BigButton = ({ className, href, children }) => (
  <a
    className="ring-1 ring-cyan-600/90 text-xl flex rounded-full bg-cyan-700 font-medium text-zinc-200 ring-cyan/10 relative px-10 py-5 transition hover:text-cyan-400 shadow-2xl items-center"
    href={href}
  >
    {children}
  </a>
);
