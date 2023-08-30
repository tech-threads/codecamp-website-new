import Image from "next/image";

import logo from "./logo.svg";

export const Footer = () => (
  <div className="flex flex-row justify-center items-start">
    <div className="flex flex-[2]">
      <Image src={logo} alt="Logo" height={32} />
    </div>
    <div className="flex flex-col space-y-1">
      <h4 className="text-zinc-600 mb-2">About</h4>
      <a href="#">TechThreads</a>
      <a href="#">Volunteers</a>
      <a href="#">Sponsors</a>
      <a href="#">Media & Press</a>
    </div>
    <div className="ml-20 flex flex-col space-y-1">
      <h4 className="text-zinc-600 mb-2">CodeCamp</h4>
      <a href="#">Hall of Fame</a>
      <a href="#">Our Events</a>
      <a href="#">Event Rules</a>
      <a href="#">Under 18 Rules</a>
    </div>
    <div className="ml-20 flex flex-col space-y-1">
      <h4 className="text-zinc-600 mb-2">Socials</h4>
      <a href="#">LinkedIn</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
      <a href="#">Blog</a>
    </div>
  </div>
);
