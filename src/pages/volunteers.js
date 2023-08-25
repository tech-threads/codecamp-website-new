import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";

export default function Volunteers() {
  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-black">
      <div className="flex w-full">
        <div className="inset-0 flex justify-center sm:px-8">
          <div className="mx-24 pt-8 px-8 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 pb-40">
            <TimerBanner targetDate={new Date("November 18, 2023")} />
            <Nav />
            <Hero
              headline="Volunteer at CodeCamp"
              subtitle="Learn about how you can get involved with CodeCamp and help us make our events a success."
              ctaLink="asdfasdF"
              ctaText="Sign up to volunteer"
            />
            <PhotoReel className="mb-20 mt-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
