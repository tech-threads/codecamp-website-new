import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";

import logo from "./logo.svg";

export const Nav = () => (
  <header className="flex justify-center items-center">
    <div className="flex justify-center h-9" style={{ marginRight: -44 }}>
      <Link href="/">
        <Image src={logo} alt="Logo" height={32} />
      </Link>
    </div>
    <nav className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mx-auto h-9">
      <Link
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
        href="/"
      >
        About
      </Link>
      <Link
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
        href="/rules"
      >
        Rules
      </Link>
      <Link
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
        href="/volunteers"
      >
        Volunteers
      </Link>
      <Link
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
        href="/sponsors"
      >
        Sponsors
      </Link>
      <a
        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
        href="#"
      >
        Blog
      </a>
    </nav>
    <div className="flex justify-center h-9">
      <Button href="#">Get tickets</Button>
    </div>
  </header>
);
