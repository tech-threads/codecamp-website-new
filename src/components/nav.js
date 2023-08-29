import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@/components/button";

import logo from "./logo.svg";

const ActiveIndicator = () => (
  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-cyan-400/40 to-cyan-400/0"></span>
);

export const Nav = () => {
  const router = useRouter();

  return (
    <header className="flex justify-center items-center">
      <div className="flex justify-center h-9" style={{ marginRight: -44 }}>
        <Link href="/">
          <Image src={logo} alt="Logo" height={32} />
        </Link>
      </div>
      <nav className="flex rounded-full bg-zinc-800/90 px-3 text-sm font-medium text-zinc-200 ring-1 ring-white/10 mx-auto h-9">
        <Link
          className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
          href="/"
        >
          About
          {router.pathname === "/" && <ActiveIndicator />}
        </Link>
        <Link
          className="relative block px-3 py-2 transition hover:text-teal-400 h-9"
          href="/rules"
        >
          Rules
          {router.pathname === "/rules" && <ActiveIndicator />}
        </Link>
        <Link
          className="relative block px-3 py-2 transition hover:text-teal-400 h-9"
          href="/volunteers"
        >
          Volunteers
          {router.pathname === "/volunteers" && <ActiveIndicator />}
        </Link>
        <Link
          className="relative block px-3 py-2 transition hover:text-teal-400 h-9"
          href="/sponsors"
        >
          Sponsors
          {router.pathname === "/sponsors" && <ActiveIndicator />}
        </Link>
        <a
          className="relative block px-3 py-2 transition hover:text-teal-400 h-9"
          href="#"
        >
          Blog
        </a>
      </nav>
      <div className="flex justify-center h-9">
        <Button href="https://www.eventbrite.com/e/southern-utah-code-camp-2023-tickets-636694499387?aff=ebdssbdestsearch">
          Get tickets
        </Button>
      </div>
    </header>
  );
};
