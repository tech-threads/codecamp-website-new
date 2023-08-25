import Image from "next/image";

import logo from "./logo.svg";
import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";

export default function Rules() {
  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-black">
      <div className="flex w-full">
        <div className="inset-0 flex justify-center sm:px-8">
          <div className="mx-24 pt-8 px-8 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 pb-40">
            <TimerBanner targetDate={new Date("November 18, 2023")} />
            <header className="flex justify-center items-center">
              <div
                className="flex justify-center h-9"
                style={{ marginRight: -44 }}
              >
                <Image src={logo} alt="Logo" height={32} />
              </div>
              <nav className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mx-auto h-9">
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  About
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Rules
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Volunteers
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Sponsors
                </a>
                <a
                  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400 h-9"
                  href="#"
                >
                  Blog
                </a>
              </nav>
              <div className="flex justify-center h-9">
                <Button href="#">Get tickets</Button>
              </div>
            </header>
            <Hero
              headline="CodeCamp Rules & Guidelines"
              subtitle="Learn how to have a safe, successful, and fun CodeCamp experience."
              ctaLink="asdfasdF"
              ctaText="Get tickets"
            />
            <Video videoId="PdEHEwCyHXk" className="mb-20" />
            <Section sectionTitle="Event duration" className="mb-20">
              <p className="mb-4">
                The main CodeCamp event lasts 24 hours straight, from 8:00am on
                Friday to 8:00am on Saturday. We also host a day camp for K-12
                students on Saturday from 8:00am to 5:00pm.
              </p>
              <p className="mb-4">
                We encourage you to have a plan and come prepared to make the
                most of your time. If you are participating in the main event,
                we recommend you bring a sleeping bag and pillow, and plan to
                take a nap at some point during the event.
              </p>
              <p className="flex flex-row">
                <a href="#" className="mr-8">
                  Venue directions
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
            {/* <Section sectionTitle="Registration" className="mb-20">
              <p className="mb-4">something about registration</p>
              <p className="mb-4">
                We encourage you to have a plan and come prepared to make the
                most of your time. If you are participating in the main event,
                we recommend you bring a sleeping bag and pillow, and plan to
                take a nap at some point during the event.
              </p>
            </Section> */}
            <Section sectionTitle="Conduct" className="mb-20">
              <p className="mb-4">
                We try our best to make CodeCamp a safe, welcoming, and fun
                environment for everyone involved. We expect all participants to
                be respectful of others and our staff and volunteers. We expect
                people to spend their time working on their projects,
                networking, and learning.
              </p>
              <p className="mb-4">
                We do not tolerate harassment of any kind. If you feel unsafe or
                uncomfortable, please contact a staff member or volunteer
                immediately. CodeCamp is not a day-care and we do not provide
                supervision for minors. If you are under 18, you must have a
                parent or guardian sign a permission slip and you must be
                accompanied by a responsible adult at all times.
              </p>
              <p>
                We reserve the right to remove anyone violating these rules from
                the event at any time.
              </p>
            </Section>
            <Section sectionTitle="Under 18?" className="mb-20">
              <p className="mb-4">
                If you are under 18 years old, you are required to have a parent
                or guardian sign a permission slip before you can participate in
                CodeCamp. In addition, you will need to follow the additional
                rules outlined in the Under 18 Letter PDF. In a nutshell, you
                are required to have a responsible person over the age of 21
                accompany you and/or your team. This responsible person doesn ot
                have to be a parent, but must be willing to accept
                responsibility for anybodyon your team under the age of 18, such
                as a coach, teacher, or mentor.
              </p>
              <p className="mb-4">
                When you arrive at CodeCamp, you and your chaperone will be
                required to check in with the CodeCamp staff. You will be given
                a wristband that you must wear at all times during the event.
              </p>
              <p className="mb-4">
                If your chaperone is not able to stay for the entire event, you
                will not be able to stay overnight and may need to leave early.
              </p>
              <p className="flex flex-row">
                <a href="#" className="mr-8">
                  Under 18 waiver
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
                <a href="#" className="mr-8">
                  Under 18 letter
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
            <Section sectionTitle="Preflight Meeting" className="mb-20">
              <p className="mb-4">
                Each year we hold a Preflight Meeting where we go over the
                rules, answer questions, and get everyone excited for the event.
                We highly recommend you attend the Preflight Meeting, but it is
                not required. Pizza and drinks are provided.
              </p>
            </Section>
            <Section sectionTitle="Open source & 3rd party" className="mb-20">
              <p className="mb-4">
                Libraries, plugins, artwork and other assets that are public and
                freely available are allowed to be included in apps. Please list
                all libraries that you use on your team's profile page to give
                credit where it's due. Stock photos and free icon sets are
                allowed. Paying for something that is not generally available to
                everyone is not allowed, and not nice.
              </p>
              <p className="mb-4">
                Developing a library in secret before the competition that
                provides the same general functionality of your project will
                likely get you disqualified. On the other hand, developing a
                library that is publicly available and provides a
                general-purpose, publicly usable function can be done before the
                competition begins.
              </p>
            </Section>
            <Section sectionTitle="Web services and APIs" className="mb-20">
              <p className="mb-4">
                We encourage use of third-party web services and their APIs
                (e.g. Twitter, Flickr, Google maps, Facebook, OpenID). Almost
                everyone loves mashups. Again, make sure to update your team
                profile with what services you use.
              </p>
            </Section>
            <Section sectionTitle="Code ownership" className="mb-20">
              <p className="mb-4">
                The code you write is yours. If you intend to share it after the
                competition, you can pick whatever license you love. We
                encourage contestants to open source their code, but it’s
                totally up to you. If you want to start a business based on it,
                awesome.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
