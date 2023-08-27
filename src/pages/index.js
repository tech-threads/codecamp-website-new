import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-[#0f0f10] text-white">
      <div className="flex w-full">
        <div className="inset-0 flex justify-center sm:px-8 mx-auto">
          <div className="w-[1164px] mx-24 pt-8 px-8 bg-zinc-900 ring-1 ring-zinc-300/10 pb-40">
            <TimerBanner targetDate={new Date("November 18, 2023")} />
            <Nav />
            <Hero
              headline="CodeCamp is Southern Utah's biggest coding event"
              subtitle="A hackathon experience for all ages, skill-levels, and experiences. Bring a laptop, an idea, and most importantly — bring your genius."
              ctaLink="asdfasdF"
              ctaText="Get tickets"
            />
            <Video videoId="PdEHEwCyHXk" className="mb-20" />
            <Subtitle className="mb-20">
              <strike className="opacity-50">12</strike>,{" "}
              <strike className="opacity-80">13</strike>, 14 years running.
              <br />
              Thousands of coders, designers, and makers.
            </Subtitle>
            <PhotoReel className="mb-20 mt-20" />
            <Section sectionTitle="What is CodeCamp?" className="mb-20">
              <p className="mb-4">
                CodeCamp is Southern Utah&apos;s oldest and biggest coding,
                design, and maker event. For over 14 years running, we&apos;ve
                been bringing together coders, designers, and makers of all ages
                and skill levels to learn, build, and create. CodeCamp started
                as a small gathering of coders but has grown into a series of
                events and a nonprofit organization devoted to supporting local
                computer science outreach and education.
              </p>
              <p className="mb-4">
                Our main event is a 24-hour hackathon where participants compete
                either individually or in teams to build the best project they
                can in 24 hours. Alongside our main event, we also host CodeCamp
                Day Camp — a day-long event for K-12 students to learn about
                computer science and coding. Our newest event, CodeCamp Girl
                Power is a 24-hour long hackathon specifically for girls and
                women.
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
            <Section sectionTitle="What are the rules?" className="mb-20">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod eu lorem et ultricies. In porta lorem at dui semper, sit
                amet ornare nisl ullamcorper.
              </p>
              <p className="mb-4">
                Aliquam ut tortor nec lorem pellentesque elementum. Nunc sed
                risus pretium, euismod dolor ut, dictum quam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
              <p className="mb-4">
                Fusce id ipsum at erat vulputate finibus. Suspendisse potenti.
                Donec quam lorem, bibendum sed lacus et, condimentum tincidunt
                lorem. Vestibulum et turpis at quam fringilla bibendum at at
                leo.
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
            <Section sectionTitle="Who can participate?" className="mb-20">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod eu lorem et ultricies. In porta lorem at dui semper, sit
                amet ornare nisl ullamcorper.
              </p>
              <p className="mb-4">
                Aliquam ut tortor nec lorem pellentesque elementum. Nunc sed
                risus pretium, euismod dolor ut, dictum quam. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
              <p className="mb-4">
                Fusce id ipsum at erat vulputate finibus. Suspendisse potenti.
                Donec quam lorem, bibendum sed lacus et, condimentum tincidunt
                lorem. Vestibulum et turpis at quam fringilla bibendum at at
                leo.
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
            <Subtitle>Thank you to our generous sponsors!</Subtitle>
            <SponsorReel className="mb-10" />
            <div className="flex justify-center">
              <Button href="#" className="mr-2">
                See all sponsors
              </Button>
              <Button href="#">Become a sponsor</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
