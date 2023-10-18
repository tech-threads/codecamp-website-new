import { Hero } from "@/components/hero";
import { Video } from "@/components/video";
import { TimerBanner } from "@/components/timer-banner";
import { Section } from "@/components/section";
import { Nav } from "@/components/nav";
import { LinkCard } from "@/components/link-card";
import { GradientSection } from "@/components/gradient-section";
import { GradientSectionFull } from "@/components/gradient-section-full";
import { Wrapper } from "@/components/wrapper";
import { Layout } from "@/components/layout";
import { NumberHeader } from "@/components/number-header";
import { Footer } from "@/components/footer";

export default function Rules() {
  return (
    <Layout>
      <TimerBanner targetDate={new Date("November 18, 2023")} />
      <Wrapper>
        <Nav />
        <Hero
          headline="CodeCamp Rules & Guidelines"
          subtitle="Learn how to have a safe, successful, and fun CodeCamp."
          ctaLink="#time-and-date"
          ctaText="Read all rules"
        />
      </Wrapper>
      <GradientSectionFull>
        <Wrapper className="pb-20">
          <Video videoId="2HbVD1lqrus" />
        </Wrapper>
      </GradientSectionFull>
      <GradientSection>
        <NumberHeader className="mt-10" label="Basics" sectionNumber="00" />
        <Wrapper grid={false}>
          <Section sectionTitle="Time and Date" className="mb-10 mt-1">
            <div className="mb-4">
              The main CodeCamp event lasts 24 hours straight, from 8:00am on
              Friday to 8:00am on Saturday. We also host a day camp for K-12
              students on Saturday from 8:00am to 5:00pm.
            </div>
            <div className="mb-4">
              We encourage you to have a plan and come prepared to make the most
              of your time. If you are participating in the main event, we
              recommend you bring a sleeping bag and pillow, and plan to take a
              nap at some point during the event.
            </div>
            <div className="flex flex-row mt-10">
              <LinkCard
                label="Directions"
                href="#"
                className="mr-4"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                }
              />
              <LinkCard
                label="Add to calendar"
                href="#"
                className="mr-8"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                }
              />
            </div>
          </Section>
          <Section sectionTitle="Venue information" className="mb-10">
            <div className="mb-4">
              Our venue is in the gym of the Vasion building up on Tech Ridge.
              This is the same venue we have used for the last several years. It
              fits several hundred people comfortably, and has plenty of space
              for everyone to spread out. There is a loft space inside the gym
              with couches for more seating (and sleeping) options.
            </div>
            <div className="mb-4">
              We will be able to open the large bay doors in the gym to let in
              fresh air as well as facilitate loading and unloading. We will
              mark off the street next to them specifically for loading and
              unloading. Please do not park in this area.
            </div>
            <div className="mb-4">
              Please remember our venue is also an active workplace. Please do
              not disturb the employees of Vasion or any other tenants in the
              building during the event, especially on Friday while they are
              still in office. Do not enter any areas of the building that are
              not part of the event — they will be clearly marked so there are
              no excuses.
            </div>
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
          <Section sectionTitle="Preflight Meeting" className="mb-10">
            <div className="mb-4">
              Each year we hold a Preflight Meeting where we go over the rules,
              answer questions, and get everyone excited for the event. We
              highly recommend you attend the Preflight Meeting, but it is not
              required. Pizza and drinks are provided.
            </div>
            <div className="mb-4">
              This year&apos;s Preflight Meeting is being held on November XXth
              at 7:00pm in the Vasion gym — the same venue as the main event.
            </div>
            <div className="flex flex-row mt-10">
              <LinkCard
                label="Add to calendar"
                href="#"
                className="mr-4"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                }
              />
            </div>
          </Section>
          <Section sectionTitle="Networking and power" className="mb-10">
            <div className="mb-4">
              We will provide power to each table in the venue as well as speedy
              Wifi. We have a small amount of ethernet cables available on some
              of the tables - if you need a wired connection, please bring your
              own cables and switches.
            </div>
            <div className="mb-4">
              If you have any special networking and hardware needs that are
              required for your project (such as extra space for 3D printers,
              etc.), please let us know when you register and we will do our
              best to accommodate.
            </div>
          </Section>
          <Section sectionTitle="Snacks and food" className="mb-20">
            <div className="mb-4">
              We will provide snacks and drinks throughout the event. We also
              provide breakfast, lunch, and dinner on Friday, and breakfast on
              Saturday. If you have any special dietary needs, please let us
              know when you register and we will do our best to accommodate.
            </div>
          </Section>
        </Wrapper>
      </GradientSection>
      <GradientSection>
        <NumberHeader
          className="mt-20"
          label="Code of Conduct"
          sectionNumber="01"
        />
        <Wrapper grid={false}>
          <Section sectionTitle="Conduct" className="mb-10 mt-1">
            <div className="mb-4">
              We try our best to make CodeCamp a safe, welcoming, and fun
              environment for everyone involved. We expect all participants to
              be respectful of others and our staff and volunteers. We expect
              people to spend their time working on their projects, networking,
              and learning.
            </div>
            <div className="mb-4">
              We do not tolerate harassment of any kind. If you feel unsafe or
              uncomfortable, please contact a staff member or volunteer
              immediately. CodeCamp is not a day-care and we do not provide
              supervision for minors. If you are under 18, you must have a
              parent or guardian sign a permission slip and you must be
              accompanied by a responsible adult at all times.
            </div>
            <div className="mb-4">
              We reserve the right to remove anyone violating these rules from
              the event at any time.
            </div>
            <div className="flex flex-row mt-10">
              <LinkCard
                label="Code of Conduct"
                href="#"
                className="mr-8"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                }
              />
            </div>
          </Section>
          <Section sectionTitle="Under 18?" className="mb-20">
            <div className="mb-4">
              If you are under 18 years old, you are required to have a parent
              or guardian sign a permission slip before you can participate in
              CodeCamp. In addition, you will need to follow the additional
              rules outlined in the Under 18 Letter PDF. In a nutshell, you are
              required to have a responsible person over the age of 21 accompany
              you and/or your team. This responsible person doesn&apos;t have to
              be a parent, but must be willing to accept responsibility for
              anybodyon your team under the age of 18, such as a coach, teacher,
              or mentor.
            </div>
            <div className="mb-4">
              When you arrive at CodeCamp, you and your chaperone will be
              required to check in with the CodeCamp staff. You will be given a
              wristband that you must wear at all times during the event.
            </div>
            <div className="mb-4">
              If your chaperone is not able to stay for the entire event, you
              will not be able to stay overnight and may need to leave early.
            </div>
            <div className="flex flex-row mt-10">
              <LinkCard
                label="Under 18 Waiver"
                href="#"
                className="mr-4"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                }
              />

              <LinkCard
                label="Under 18 Parent Letter"
                href="#"
                className="mr-8"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                }
              />
            </div>
          </Section>
        </Wrapper>
      </GradientSection>

      <GradientSection>
        <NumberHeader
          className="mt-20"
          label="Event Rules"
          sectionNumber="02"
        />
        <Wrapper grid={false}>
          <Section sectionTitle="24 Hours" className="mb-10 mt-1">
            <div className="mb-4">
              Each team has exactly 24 hours to develop their project during
              CodeCamp. Throughout the 24-hour period, mentors and staff will be
              available to help teams in any way they can. All work on your
              project must be done during this 24 hour period.
            </div>
            <div className="mb-4">
              You are not required to stay for all 24 hours straight, but if you
              want to be judged you will need to be present in the morning when
              judging starts. If you are not present, you will not be eligible
              to be judged.
            </div>
            <div className="mb-4">
              <em>This does not apply to the Day Camp division.</em>
            </div>
          </Section>
          <Section sectionTitle="Write your own code" className="mb-10">
            <div className="mb-4">
              This probably goes without saying, but CodeCamp is a coding
              competition. The main code in your project, that is the code that
              makes it do what it does, must be written during the event. While
              you are encouraged to plan ahead, you are not allowed to use code
              that you have written before the event.
            </div>
            <div className="mb-4">
              <em>
                Violating this rule will result in you and your team&apos;s
                immediate disqualification.
              </em>
            </div>
          </Section>
          <Section sectionTitle="Code on-site" className=" mb-10">
            <div className="mb-4">
              You are more than welcome to come and go as you need during the
              event, but the majority of your project&apos;s code must be
              written on-site.
            </div>
          </Section>
          <Section sectionTitle="Team size" className="mb-10 mt-1">
            <div className="mb-4">
              You can compete on your own or form a team of up to 4 people.
            </div>
          </Section>
          <Section sectionTitle="Open source libraries" className="mb-10">
            <div className="mb-4">
              Open source libraries, frameworks, and tools are allowed as long
              as they are publicly available to everyone. This doesn&apos;t mean
              you can write your entire project beforehand and &quot;open
              source&quot; it to use during event. If you have any questions
              about this, please ask.
            </div>
          </Section>
          <Section sectionTitle="Web services and APIs" className="mb-10">
            <div className="mb-4">
              You are more than welcome and in fact are encouraged to use
              third-party services and APIs (e.g. Stripe, Twilio, Google Maps,
              etc.) in your project.
            </div>
          </Section>
          <Section sectionTitle="Code ownership" className="mb-10">
            <div className="mb-4">
              The code you write is yours. If you intend to share it after the
              competition, you can pick whatever license you love. We encourage
              contestants to open source their code, but it&apos;s totally up to
              you. If you want to start a business based on it, awesome.
            </div>
          </Section>
          <Section sectionTitle="AI tools" className="mb-20">
            <div className="mb-4">
              Use of generative AI for any part of your project is allowed and
              welcomed! This includes using tools like GitHub Copilot, ChatGPT,
              Dall-E, etc. Many professionals in industry use these tools to
              great effect, and we want to encourage you to do the same.
            </div>
          </Section>
        </Wrapper>
      </GradientSection>

      <GradientSection>
        <NumberHeader
          className="mt-20"
          label="Getting Ready"
          sectionNumber="03"
        />
        <Wrapper grid={false}>
          <Section sectionTitle="Team prep" className="mb-10 mt-1">
            <div className="mb-4">
              We encourage you to come prepared with a team and a project idea.
              You are more than welcome to spend time preparing for the event
              doing activites such as planning, designing, and researching.
              However, you are not allowed to write any code for your project
              before the event begins.
            </div>
            <div className="mb-4">
              If you are looking for a team or a project idea, we will try to
              help you out at the Preflight Meeting. During the main event, our
              staff and volunteers will be available to help you find a team
              and/or a project idea but please keep in mind that they are not
              there to do the work for you.
            </div>
          </Section>
          <Section sectionTitle="Computers and tools" className="mb-10">
            <div className="mb-4">
              It is your responsibility to bring your own computer and any other
              tools you need to work on your project. This includes screens, 3D
              printers, extra chargers, soldering irons, etc. We will provide
              power and networking, see below for details.
            </div>
            <div className="mb-4">
              We will provide tables and chairs for you to work at. Be aware the
              chairs are not that comfortable. You are more than welcome to
              bring your own chair.
            </div>
          </Section>
          <Section sectionTitle="Bring something to nap with" className="mb-20">
            <div className="mb-4">
              If you are super hardcore and plan on staying up for the entire 24
              hours successfully, you can ignore this section.
            </div>
            <div className="mb-4">
              Most people will want to take naps during the event. We recommend
              bringing at least a pillow, blanket, and potentially event a
              jacket. Some people bring cots and sleeping bags. The louge area
              upstairs will have couches you can spread out on.
            </div>
          </Section>
        </Wrapper>
      </GradientSection>

      <GradientSection>
        <NumberHeader
          className="mt-20"
          label="Odds and Ends"
          sectionNumber="04"
        />
        <Wrapper grid={false}>
          <Section
            sectionTitle="Heads up about noise and sensory"
            className="mb-10 mt-1"
          >
            <div className="mb-4">
              CodeCamp is a busy, noisy, and crowded event. If you have any
              concerns with this we encourage you to bring noise-cancelling
              headphones, earplugs, or any other tools you need to make yourself
              comfortable.
            </div>
          </Section>
          <Section sectionTitle="Keep things tidy" className="mb-10">
            <div className="mb-4">
              We expect everyone to clean up after themselves. We will provide
              multiple easy to find trash cans throughout the venue. Please use
              them. Vasion has been extremely kind to allow us to use their gym
              for the last several years and we want to make sure we leave it in
              better condition than we found it.
            </div>
          </Section>
          <Section sectionTitle="Photo and video" className="mb-20">
            <div className="mb-4">
              We will have photographers, videographers, and possibly press at
              the event. Part of your registration includes a media release -
              this is so we can use and photos or videos taken during the event
              to promote CodeCamp.
            </div>
            <div className="mb-4">
              That being said - you are more than welcome to take any photos or
              videos you want and use them for your own purposes. And if you
              want a cool photo of you coding for the scrapbook, let our
              photographers know.
            </div>
            <div className="flex flex-row mt-10">
              <LinkCard
                label="Media Release"
                href="#"
                className="mr-4"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                }
              />
            </div>
          </Section>
        </Wrapper>
      </GradientSection>
      <Wrapper grid={false} className="py-20">
        <Footer />
      </Wrapper>
    </Layout>
  );
}
