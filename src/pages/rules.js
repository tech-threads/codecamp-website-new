import { Hero } from "@/components/hero";
import { Button } from "@/components/button";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Subtitle } from "@/components/subtitle";
import { PhotoReel } from "@/components/photo-reel";
import { SponsorReel } from "@/components/sponsor-reel";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";

export default function Rules() {
  return (
    <div className="min-h-screen flex bg-zinc-50 dark:bg-black">
      <div className="flex w-full">
        <div className="inset-0 flex justify-center sm:px-8">
          <div className="mx-24 pt-8 px-8 w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 pb-40">
            <TimerBanner targetDate={new Date("November 18, 2023")} />
            <Nav />
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
                  Directions
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
                  Calendar invite (Google)
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
            <Section sectionTitle="Venue information" className="mb-20">
              <p className="mb-4">
                Our venue is in the gym of the Vasion building up on Tech Ridge.
                This is the same venue we have used for the last several years.
                It fits several hundred people comfortably, and has plenty of
                space for everyone to spread out. There is a loft space inside
                the gym with couches for more seating (and sleeping) options.
              </p>
              <p className="mb-4">
                We will be able to open the large bay doors in the gym to let in
                fresh air as well as facilitate loading and unloading. We will
                mark off the street next to them specifically for loading and
                unloading. Please do not park in this area.
              </p>
              <p className="mb-4">
                Please remember our venue is also an active workplace. Please do
                not disturb the employees of Vasion or any other tenants in the
                building during the event, especially on Friday while they are
                still in office. Do not enter any areas of the building that are
                not part of the event — they will be clearly marked so there are
                no excuses.
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
              <p className="mb-4">
                We reserve the right to remove anyone violating these rules from
                the event at any time.
              </p>
              <p className="flex flex-row">
                <a href="#" className="mr-8">
                  Code of Conduct
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
              <p className="mb-4">
                This year's Preflight Meeting is being held on November XXth at
                7:00pm in the Vasion gym — the same venue as the main event.
              </p>
              <p className="flex flex-row">
                <a href="#" className="mr-8">
                  Calendar invite (Google)
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
            <Section sectionTitle="AI tools" className="mb-20">
              <p className="mb-4">ASDF</p>
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
            <Section sectionTitle="Team prep" className="mb-20">
              <p className="mb-4">
                We encourage you to come prepared with a team and a project
                idea. You are more than welcome to spend time preparing for the
                event doing activites such as planning, designing, and
                researching. However, you are not allowed to write any code for
                your project before the event begins.
              </p>
              <p className="mb-4">
                If you are looking for a team or a project idea, we will try to
                help you out at the Preflight Meeting. During the main event,
                our staff and volunteers will be available to help you find a
                team and/or a project idea but please keep in mind that they are
                not there to do the work for you.
              </p>
            </Section>
            <Section sectionTitle="Computers and tools" className="mb-20">
              <p className="mb-4">
                It is your responsibility to bring your own computer and any
                other tools you need to work on your project. This includes
                screens, 3D printers, extra chargers, soldering irons, etc. We
                will provide power and networking, see below for details.
              </p>
              <p className="mb-4">
                We will provide tables and chairs for you to work at. Be aware
                the chairs are not that comfortable. You are more than welcome
                to bring your own chair.
              </p>
            </Section>
            <Section sectionTitle="Networking and power" className="mb-20">
              <p className="mb-4">
                We will provide power to each table in the venue as well as
                speedy Wifi. We have a small amount of ethernet cables available
                on some of the tables - if you need a wired connection, please
                bring your own cables and switches.
              </p>
              <p className="mb-4">
                If you have any special networking and hardware needs that are
                required for your project (such as extra space for 3D printers,
                etc.), please let us know when you register and we will do our
                best to accommodate.
              </p>
            </Section>
            <Section sectionTitle="Snacks and food" className="mb-20">
              <p className="mb-4">
                We will provide snacks and drinks throughout the event. We also
                provide breakfast, lunch, and dinner on Friday, and breakfast on
                Saturday. If you have any special dietary needs, please let us
                know when you register and we will do our best to accommodate.
              </p>
            </Section>
            <Section sectionTitle="Noise and sensory" className="mb-20">
              <p className="mb-4">
                CodeCamp is a busy, noisy, and crowded event. If you have any
                concerns with this we encourage you to bring noise-cancelling
                headphones, earplugs, or any other tools you need to make
                yourself comfortable.
              </p>
            </Section>
            <Section sectionTitle="Cleanliness" className="mb-20">
              <p className="mb-4">
                We expect everyone to clean up after themselves. We will provide
                multiple easy to find trash cans throughout the venue. Please
                use them. Vasion has been extremely kind to allow us to use
                their gym for the last several years and we want to make sure we
                leave it in better condition than we found it.
              </p>
              <p className="mb-4">
                While we provide food, snacks, and drinks throughout the event,
                please keep your workspace clean and tidy.
              </p>
              <p className="mb-4">
                Please keep the bathrooms clean and tidy. We will make sure they
                are stocked with toilet paper and paper towels. If you notice
                they are running low, please let us know.
              </p>
            </Section>
            <Section sectionTitle="Media" className="mb-20">
              <p className="mb-4">
                We will have photographers, videographers, and possibly press at
                the event. Part of your registration includes a media release -
                this is so we can use and photos or videos taken during the
                event to promote CodeCamp.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
