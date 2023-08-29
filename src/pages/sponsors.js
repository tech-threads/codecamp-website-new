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

export default function Sponsors() {
  return (
    <PageLayout>
      <TimerBanner targetDate={new Date("November 18, 2023")} />
      <Nav />
      <Hero
        headline="Our Sponsors"
        subtitle="CodeCamp wouldn't be possible without the generous support of our sponsors. Learn more about how you can support CodeCamp."
        ctaLink="asdfasdF"
        ctaText="Help sponsor CodeCamp"
      />
      <PhotoReel className="mb-20 mt-20" />
    </PageLayout>
  );
}
