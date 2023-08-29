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
      <PhotoReel className="mb-20" />
      <Subtitle className="mb-20">
        CodeCamp is a volunteer-run event.
        <br />
        We rely on the generous support of people like you to make our events a
        success.
      </Subtitle>
      <Section
        sectionTitle="What kind of help is needed?"
        className="mt-20 mb-20"
      >
        <p className="mb-4">
          CodeCamp is Southern Utah&apos;s oldest and biggest coding, design,
          and maker event. For over 14 years running, we&apos;ve been bringing
          together coders, designers, and makers of all ages and skill levels to
          learn, build, and create. CodeCamp started as a small gathering of
          coders but has grown into a series of events and a nonprofit
          organization devoted to supporting local computer science outreach and
          education.
        </p>
        <p>
          <a href="#">
            Read more about our story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </p>
      </Section>
    </PageLayout>
  );
}
