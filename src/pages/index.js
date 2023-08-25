import Image from "next/image";
import { Inter } from "next/font/google";

import logo from "./logo.svg";
import glyph from "./glyph.svg";
import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import Video from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-black">
      <div className="flex w-full">
        <div className="inset-0 flex justify-center sm:px-8">
          <div className="mx-24 pt-8 px-8 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
            <TimerBanner targetDate={new Date("November 18, 2023")} />
            <header className="flex justify-center items-center h-9">
              <div
                className="flex justify-center h-9"
                style={{ marginRight: -44 }}
              >
                <Image src={logo} alt="Logo" height={32} />
              </div>
              <nav className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mx-auto h-9">
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  About
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Rules
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Volunteers
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Sponsors
                </a>
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
            <Hero
              headline="CodeCamp is Southern Utah's biggest coding event"
              subtitle="A hackathon experience for all ages, skill-levels, and experiences. Bring a laptop, an idea, and most importantly — bring your genius."
              ctaLink="asdfasdF"
              ctaText="Get tickets"
            />
            <Video videoId="PdEHEwCyHXk" />
          </div>
        </div>
      </div>
    </div>
  );
}
