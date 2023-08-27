import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";
import { PageLayout } from "@/components/page-layout";

export default function Volunteers() {
  return (
    <PageLayout>
      <TimerBanner targetDate={new Date("November 18, 2023")} />
      <Nav />
      <Hero
        headline="Volunteer at CodeCamp"
        subtitle="Learn about how you can get involved with CodeCamp and help us make our events a success."
        ctaLink="asdfasdF"
        ctaText="Sign up to volunteer"
      />
      <PhotoReel className="mb-20 mt-20" />
    </PageLayout>
  );
}
