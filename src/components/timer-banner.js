import { useState, useEffect } from "react";

import { Wrapper } from "@/components/wrapper";

export const TimerBanner = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    let difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="border-b border-zinc-800/70 border-solid bg[#121213] text-center relative font-mono text-sm">
      <Wrapper grid={false} className="flex flex-row items-center z-20 py-2">
        <span className="flex flex-1 opacity-60 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 mr-2 opacity-50"
          >
            <path d="M13.92 3.845a19.361 19.361 0 01-6.3 1.98C6.765 5.942 5.89 6 5 6a4 4 0 00-.504 7.969 15.974 15.974 0 001.271 3.341c.397.77 1.342 1 2.05.59l.867-.5c.726-.42.94-1.321.588-2.021-.166-.33-.315-.666-.448-1.004 1.8.358 3.511.964 5.096 1.78A17.964 17.964 0 0015 10c0-2.161-.381-4.234-1.08-6.155zM15.243 3.097A19.456 19.456 0 0116.5 10c0 2.431-.445 4.758-1.257 6.904l-.03.077a.75.75 0 001.401.537 20.902 20.902 0 001.312-5.745 1.999 1.999 0 000-3.545 20.902 20.902 0 00-1.312-5.745.75.75 0 00-1.4.537l.029.077z" />
          </svg>
          Registration open for CodeCamp 2024
        </span>
        <span className="opacity-60 font-bold" suppressHydrationWarning>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>

        {/* <svg
        viewBox="0 0 1140 34"
        fill="none"
        className="absolute bottom-[-67px] left-1/2 ml-[-553px] w-[1130px] z-10"
      >
        <g opacity=".6" filter="url(#:R5l6:-a)">
          <path fill="url(#:R5l6:-b)" d="M6 6h1128v22H6z"></path>
          <path fill="url(#:R5l6:-c)" d="M6 6h1128v22H6z"></path>
        </g>
        <defs>
          <radialGradient
            id=":R5l6:-c"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 -22 1128 0 563 28)"
          >
            <stop offset=".273" stopColor="#18181b"></stop>
            <stop offset="1" stopColor="#18181b" stopOpacity="0"></stop>
          </radialGradient>
          <linearGradient
            id=":R5l6:-b"
            x1="6"
            y1="6"
            x2="1134"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06B6D4" stopOpacity="0"></stop>
            <stop offset=".323" stopColor="#06B6D4"></stop>
            <stop offset=".672" stopColor="#D946A2" stopOpacity=".3"></stop>
            <stop offset="1" stopColor="#D946A2" stopOpacity="0"></stop>
          </linearGradient>
          <filter
            id=":R5l6:-a"
            x="0"
            y="0"
            width="1140"
            height="34"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              stdDeviation="3"
              result="effect1_foregroundBlur_311_43535"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg> */}
      </Wrapper>
    </div>
  );
};
