import { motion } from "framer-motion";

export const BigButton = ({ className, href, children }) => (
  <a
    className="text-xl flex rounded-full bg-cyan-800/90 font-medium text-zinc-200 ring-cyan/10 relative px-10 py-5 transition hover:text-cyan-400 shadow-2xl items-center"
    href={href}
  >
    {children}
  </a>
);
