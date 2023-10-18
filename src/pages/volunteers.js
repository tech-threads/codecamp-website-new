"use client";

import Script from "next/script";

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
import { GradientSection } from "@/components/gradient-section";
import { GradientSectionFull } from "@/components/gradient-section-full";
import { Wrapper } from "@/components/wrapper";
import { Layout } from "@/components/layout";

export default function Volunteers() {
  return (
    <Layout>
      <TimerBanner targetDate={new Date("November 18, 2023")} />
      <Wrapper>
        <Nav />
        <Hero
          headline="Volunteer at CodeCamp"
          subtitle="Learn how to get involved and help out at CodeCamp."
          ctaLink="#time-and-date"
          ctaText="Sign up to volunteer"
        />
      </Wrapper>
      <GradientSectionFull>
        <Wrapper className="pb-20">
          <PhotoReel className="mb-20" />
        </Wrapper>
      </GradientSectionFull>
      <GradientSection>
        <Wrapper grid={false}>
          <Section
            sectionTitle="Sign up to volunteer"
            className="form-target my-20 !bg-white"
          >
            <Script
              src="//js.hsforms.net/forms/embed/v2.js"
              onLoad={() => {
                hbspt.forms.create({
                  region: "na1",
                  portalId: "43983310",
                  formId: "73070cfc-594e-4f2b-90b7-9cd5174a8bbc",
                  target: ".form-target",
                });
              }}
            ></Script>
          </Section>
        </Wrapper>
      </GradientSection>
    </Layout>
  );
}
