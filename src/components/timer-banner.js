import { useState, useEffect } from "react";
import { SynthwaveMtn } from "./synthwave-mtn/synthwave-mtn";

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
    <div className="text-center py-4 px-8 -mx-8 -mt-8 mb-10 flex flex-row">
      <SynthwaveMtn />
      <div>
        <span className="flex flex-1">Registration open for CodeCamp 2023</span>
        <span>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </span>
      </div>
    </div>
  );
};
