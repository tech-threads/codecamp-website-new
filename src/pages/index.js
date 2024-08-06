import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";
import { GradientSection } from "@/components/gradient-section";
import { GradientSectionFull } from "@/components/gradient-section-full";
import { Wrapper } from "@/components/wrapper";
import { Layout } from "@/components/layout";
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <TimerBanner targetDate={new Date("November 18, 2023")} />
      <Wrapper>
        <Nav />
        <Hero
          headline="CodeCamp is Southern Utah&apos;s biggest coding event"
          subtitle="A hackathon experience for all ages, skill-levels, and experiences. Bring a laptop, an idea, and most importantly — bring your genius."
          ctaLink="https://www.eventbrite.com/e/southern-utah-code-camp-2023-tickets-636694499387?aff=ebdssbdestsearch"
          ctaText="Get tickets"
        />
      </Wrapper>
      <GradientSectionFull>
        <Wrapper>
          <Video videoId="PdEHEwCyHXk" className="mb-20" />
        </Wrapper>
      </GradientSectionFull>
      <GradientSection>
        <Wrapper className="py-20">
          <Section sectionTitle="What is CodeCamp?">
            <p className="mb-4">
              CodeCamp is Southern Utah&apos;s oldest and biggest coding,
              design, and maker event. For over 14 years running, we&apos;ve
              been bringing together coders, designers, and makers of all ages
              and skill levels to learn, build, and create. CodeCamp started as
              a small gathering of coders but has grown into a series of events
              and a nonprofit organization devoted to supporting local computer
              science outreach and education.
            </p>
            <p className="mb-4">
              Our main event is a 24-hour hackathon where participants compete
              either individually or in teams to build the best project they can
              in 24 hours. Alongside our main event, we also host CodeCamp Day
              Camp — a day-long event for K-12 students to learn about computer
              science and coding. Our newest event, CodeCamp Girl Power is a
              24-hour long hackathon specifically for girls and women.
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
          <PhotoReel className="mb-20 mt-20" />
          <Section sectionTitle="What are the rules?">
            <p className="mb-4">
              To ensure a fair and fun competition, please review the following key rules and guidelines. For the full set of rules, visit our <Link href="/rules">Rules page</Link>.
            </p>
            <ul className="mb-4">
              <li><strong>Registration:</strong> Register early to guarantee your team’s spot and receive a T-shirt (if available). Teams consist of 1 to 4 members, and if you&apos;re an individual, attending pre-contest meetings is recommended for team placement.</li>
              <li><strong>Teams and Categories:</strong> Teams compete in divisions based on the highest level of experience among members, from Rookie to Industry. Categories include App, Game, Maker, and several Rookie-specific options. We’ll help determine the best fit for your team.</li>
              <li><strong>24-Hour Rule:</strong> Teams have 24 hours to develop their projects. Work must be completed at the venue, though planning and discussions are allowed beforehand. Off-site work is discouraged.</li>
              <li><strong>Kickoff Meetings:</strong> Attend the pre-contest kickoff meeting for valuable tips, team formation, and networking. Pizza and drinks are provided.</li>
              <li><strong>Open Source & 3rd Party:</strong> Use public libraries, plugins, and free assets. Paid or secret libraries are not allowed. Update your profile with any third-party services or APIs used.</li>
              <li><strong>Web Services:</strong> Utilize third-party APIs and services, but ensure they are acknowledged on your team profile.</li>
              <li><strong>Ownership and Open Source:</strong> Your code is yours to license and share as you choose. We encourage open-sourcing but it’s not mandatory.</li>
              <li><strong>Judging:</strong> Applications will be evaluated on technical expertise, completeness, aesthetics, commercial viability (excluding Rookie Kit), and novelty/innovation. Provide devices for mobile apps or a URL for web apps.</li>
              <li><strong>Under 18?</strong> A parent or guardian waiver is required. A responsible adult over 21 must accompany any participants under 18.</li>
              <li><strong>Miscellany:</strong> Adhere to all laws and treat animals kindly. For additional details, check our FAQ page.</li>
            </ul>
            <p>
              <Link href="/rules">
                See the full rules
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
              </Link>
            </p>
          </Section>
          <PhotoReel className="mb-20 mt-20" />
          <Section sectionTitle="Who can participate?">
            <p className="mb-4">
              We welcome participants of all ages and skill levels! Our CodeCamp event is designed to accommodate everyone from complete beginners to seasoned professionals. Here&apos;s a breakdown of our divisions:
            </p>
            <ul className="mb-4">
              <li><strong>Day-Camp:</strong> Ideal for younger students (ages 8-17) with no prior coding experience. Participants will use tools like Scratch to create and modify simple games in a fun, supportive environment.</li>
              <li><strong>Rookie-Kit:</strong> A 24-hour event open to all ages who have little to no coding experience. Each participant receives a premade game starting kit that they can personalize and enhance.</li>
              <li><strong>Novice:</strong> For any age group with a basic understanding of coding. This 24-hour challenge is perfect for those who have taken a coding class or have a small project in mind that they want to develop.</li>
              <li><strong>Collegiate:</strong> Designed for individuals with college-level coding experience. During this 24-hour event, participants bring their own project ideas or class assignments and work on them with other skilled coders.</li>
              <li><strong>Industry:</strong> Tailored for professional coders, this 24-hour segment allows participants to work on side projects, explore new technologies, or develop their passions with other industry experts.</li>
            </ul>
            <p className="mb-4">
              Whether you’re looking to get started with coding or eager to push the boundaries of your technical skills, there’s a place for you at CodeCamp!
            </p>
            <p>
              <a href="#">
                See the full rules
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
        </Wrapper>
      </GradientSection>
      <Subtitle className="mt-20">Thank you to our generous sponsors!</Subtitle>
      <SponsorReel className="mb-10" />
      <div className="flex justify-center">
        <Button href="#" className="mr-2">
          See all sponsors
        </Button>
        <Button href="#">Become a sponsor</Button>
      </div>
    </Layout>
  );
}
