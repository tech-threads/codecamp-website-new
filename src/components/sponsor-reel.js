import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/sponsors/jetbrains.png",
  "/sponsors/zonos.png",
  "/sponsors/audience-300x300-1.png",
  "/sponsors/denton-300x300-1.png",
  "/sponsors/dixietech-300x300-1.png",
  "/sponsors/eaglegate-300x300-1.png",
  "/sponsors/infowest.png",
  "/sponsors/intergalactic-300x300-1.png",
  "/sponsors/mango-300x300-1.png",
  "/sponsors/scitools-1.png",
  "/sponsors/sga-300x300-1.png",
  "/sponsors/smartcare-300x300-1.png",
  "/sponsors/stg-chamber-300x300-1.png",
  "/sponsors/tcn.png",
  "/sponsors/techridge-300x300-1.png",
  "/sponsors/usu_roi_logo.png",
  "/sponsors/Utah4H.png",
  "/sponsors/utahtech-300x300-1.png",
  "/sponsors/vasion-logo.png",
  "/sponsors/washco.png",
];

export const SponsorReel = ({ className }) => (
  <div className={`w-[900px] mx-auto relative ${className}`}>
    <div className="pointer-events-none	left-0 top-0 h-[164px] absolute z-20 w-[150px] bg-gradient-to-r from-zinc-900 to-transparent"></div>
    <Slide
      arrows={false}
      pauseOnHover
      autoplay
      infinite
      slidesToScroll={1}
      slidesToShow={5}
      easing="ease"
      duration={3000}
      canSwipe={false}
      className="z-10 bg-transparent"
    >
      {images.map((image, index) => (
        <div key={index} className="mx-2">
          <a href="#">
            <Image
              width={150}
              height={150}
              src={image}
              alt={`Sponsor ${index}`}
              className="rounded-xl bg-white sm:w-72 sm:rounded-2xl shadow-xl p-4"
            />
          </a>
        </div>
      ))}
    </Slide>
    <div className="pointer-events-none	right-0 top-0 h-[164px] absolute z-20 w-[150px] bg-gradient-to-l from-zinc-900 to-transparent"></div>
  </div>
);
