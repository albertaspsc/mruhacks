/* eslint-disable @next/next/no-img-element */
"use client";

import welcomeImage from "@/public/welcome.jpg";
import aboutImage from "@/public/matts_pretty_wheel.jpg";
import hero from "@/public/hero.jpg";
import groupImageVlad from "@/public/group_image_vlad4.jpg";
import photo5 from "@/assets/carousel_images/carousel_image_5.jpg";
import photo6 from "@/assets/carousel_images/carousel_image_6.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import logo from "@/public/mru_title_light.png";

import { useSpring, animated, easings } from "@react-spring/web";

import Link from "next/link";
import {
  FaArrowRight,
  FaBars,
  FaDiscord,
  FaHamburger,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useEffect } from "react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen h-full wrapper bg-gradient-to-br from-blue-100 to-purple-100">
      <Nav />
      <Parallax
        pages={4}
        className="w-full top-0 left-0 bottom-0"
        innerStyle={{
          height: "auto",
          overflow: "hidden",
        }}
        id="parallax"
      >
        <AboutLayer />
        {/* yes, these are backwards. it's z-azis fuckery. i am sorry */}
        <HeroLayer />
        <ParallaxLayer offset={1.75} speed={0} factor={2}>
          <div className="relative">
            <h2
              className="text-3xl md:text-4xl font-bold text-primary w-full text-center pb-8 scroll-mt-24"
              id="faqs"
            >
              FAQs
            </h2>
            <div className="flex flex-col lg:flex-row w-full px-4 md:px-16 gap-8 max-w-screen-2xl mx-auto">
              <div className="flex flex-col flex-1 gap-8">
                <DropdownWindow title="What is a Hackathon?">
                  <p className="text-lg px-4">
                    A hackathon can be thought of as an “invention marathon” or
                    a “real time science fair”. Anyone who has an interest in
                    technology and software attends a hackathon to learn, build
                    & share their creations over the course of a weekend in a
                    relaxed and welcoming atmosphere. Over the course of
                    24-hours you will bring your crazy ideas to life through
                    technology before showcasing them to a team of judges.
                  </p>
                </DropdownWindow>
                <DropdownWindow title="When is MRUHacks?">
                  <p className="text-lg px-4">
                    MRUHacks will be held from October 5th - 6th, 2024, in the
                    Riddell Library and Learning Centre. More details will be
                    released closer to the event.
                  </p>
                </DropdownWindow>
                <DropdownWindow title="Who can participate?">
                  <p className="text-lg px-4">
                    This year, MRUHacks is open to any and all post-secondary
                    students! Just recently graduated? Don’t worry, you’re
                    invited too! All attendees must be 18 years or older to
                    participate.
                  </p>
                </DropdownWindow>
                <DropdownWindow title="How many people can be on a team?">
                  <p className="text-lg px-4">
                    Hackers can form teams of up to five people. Feel free to
                    team up with anyone, regardless of degree, school, or
                    experience level. If you’re still looking for a team, come
                    find one on our Discord.
                  </p>
                </DropdownWindow>
              </div>
              <div className="flex flex-col flex-1 gap-8">
                <DropdownWindow title="How much does it cost to participate?">
                  <p className="text-lg px-4">
                    Absolutely nothing! We’ll also be providing food for the
                    entire event, as well as a few goodies for hackers along the
                    way.
                  </p>
                </DropdownWindow>
                <DropdownWindow title="What if I've never hackathon'd before?">
                  <p className="text-lg px-4">
                    MRUHacks is open to everyone, regardless of skill level.
                    Whether you’re new to coding, or a seasoned veteran, this is
                    the place for you. Still worried? Stay tuned for a series of
                    workshops that’ll help you brush up on your skills.
                  </p>
                </DropdownWindow>
                <DropdownWindow title="When do applications open?">
                  <p className="text-lg px-4">
                    Applications are open right now! Visit mruhacks.ca to apply.
                    Act fast, as we only have room for 150 hackers this year!
                  </p>
                </DropdownWindow>
                <DropdownWindow title="Why should I participate in a hackathon?">
                  <p className="text-lg px-4">
                    Attending MRUHacks will give you a platform to learn new
                    skills, collaborate with like-minded individuals, and build
                    a sweet project. It&apos;s a great opportunity to solve
                    real-world problems, win some prizes, and join a community
                    of hackers.
                  </p>
                </DropdownWindow>
              </div>
            </div>
          </div>
          <div className="relative p-4 pt-16">
            <p
              className="text-3xl md:text-4xl font-bold text-primary w-full text-center py-8 scroll-mt-24"
              id="sponsors"
            >
              Sponsors
            </p>
            <div className="flex flex-col lg:flex-row max-w-screen-lg mx-auto space-x-0 lg:space-x-8 pb-4 items-center">
              <p className="text-text text-xl text-center lg:text-right leading-10 w-full mx-auto z-30 pb-4">
                MRUHacks wouldn&apos;t be possible without the support of our
                fantastic sponsors.
              </p>
              <Link
                href="mailto:outreach@mruhacks.ca"
                className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white p-2 px-4 text-lg w-2/3 lg:min-w-64 flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
              >
                Become a sponsor
                <FaArrowRight className="inline ml-2" />
              </Link>
            </div>
          </div>
          <Window className="relative mx-auto lg:w-[30%] w-1/2 h-auto">
            <p className="text-center text-xl p-12">Coming soon!</p>
          </Window>
          <div className="relative p-4">
            <p className="w-full text-center text-primary text-xl pt-24">
              Made with ❤️ by the MRUHacks Team
            </p>
            <p className="w-full text-center text-text text-lg">
              © 2024 MRUHacks. All rights reserved.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

function HeroLayer() {
  return (
    <>
      <div className="hidden lg:block">
        <ParallaxLayer offset={0} speed={1.5} id="home">
          <AnimatedWindow
            startingScale={0.5}
            endingRot={-6}
            delay={300}
            config={{ duration: 500, easing: easings.easeOutBack }}
            className="absolute top-20 left-4 w-[35%] h-auto"
          >
            <img
              src={welcomeImage.src}
              alt="Welcome to MRUHacks"
              className="w-full h-full object-fit"
            />
          </AnimatedWindow>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.75}>
          <AnimatedWindow
            startingScale={0.5}
            endingRot={12}
            delay={200}
            config={{ duration: 500, easing: easings.easeOutBack }}
            className="absolute top-16 -right-4 w-[40%] h-auto"
          >
            <img
              src={aboutImage.src}
              alt="Welcome to MRUHacks"
              className="w-full h-full object-fit"
            />
          </AnimatedWindow>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <AnimatedWindow
            startingScale={0.5}
            endingRot={-2}
            delay={100}
            config={{ duration: 500, easing: easings.easeOutBack }}
            className="relative top-[60dvh] mx-auto w-[60%] h-auto"
          >
            <img src={groupImageVlad.src} alt="Welcome to MRUHacks" />
          </AnimatedWindow>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
          <AnimatedWindow
            startingScale={0.5}
            delay={300}
            config={{ duration: 1000, easing: easings.easeOutBack }}
            bgOverride
            className="relative mx-auto top-[20dvh] w-[70%] h-auto overflow-visible"
          >
            <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-gradient-to-br bg-white rounded-t-md"></div>
            <PopupButtons />
            <div className="w-full h-full bg-gradient-to-br from-blue-400/70 to-purple-400 backdrop-blur-sm">
              <img
                src={logo.src}
                alt="Welcome to MRUHacks"
                className="h-full object-contain p-16 pt-8 pb-0"
              />

              <p className="text-2xl pl-12 text-white font-bold pb-4 max-w-[70%]">
                October 5th-6th, 2024 • In-Person Event
              </p>
            </div>
            <AnimatedWindow
              endingRot={-4}
              delay={750}
              config={{ duration: 500, easing: easings.easeOutBack }}
              className="absolute right-16 -bottom-16 lg:w-[18dvw] flex flex-col justify-center items-center p-4 pt-12"
            >
              <Link
                className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white w-full p-4 mt-2 text-xl flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
                href="/dashboard/apply"
              >
                Register Now
                <FaArrowRight className="inline ml-2" />
              </Link>
            </AnimatedWindow>
          </AnimatedWindow>
        </ParallaxLayer>
      </div>
      <div className="block lg:hidden">
        <ParallaxLayer offset={0} speed={0.75}>
          <AnimatedWindow
            startingScale={0.5}
            endingRot={4}
            delay={100}
            config={{ duration: 500, easing: easings.easeOutBack }}
            className="relative top-16 mx-auto w-[90%] max-h-[30dvh] h-auto"
          >
            <img
              src={aboutImage.src}
              alt="Welcome to MRUHacks"
              className="w-full h-full object-fit"
            />
          </AnimatedWindow>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <AnimatedWindow
            startingScale={0.5}
            endingRot={2}
            delay={500}
            config={{ duration: 500, easing: easings.easeOutBack }}
            className="relative top-[60dvh] mx-auto w-[90%] h-auto"
          >
            <img src={groupImageVlad.src} alt="Welcome to MRUHacks" />
          </AnimatedWindow>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <AnimatedWindow
            startingScale={0.5}
            endingRot={-2}
            delay={250}
            config={{ duration: 1000, easing: easings.easeOutBack }}
            bgOverride
            className="relative mx-auto top-[28dvh] w-[90%] h-auto overflow-visible"
          >
            <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-gradient-to-br bg-white rounded-t-md"></div>
            <PopupButtons />
            <div className="w-full h-full bg-gradient-to-br from-blue-400/70 to-purple-400 backdrop-blur-sm">
              <img
                src={logo.src}
                alt="Welcome to MRUHacks"
                className="h-full object-contain p-16 pt-8 pb-0"
              />

              <p className="text-lg md:text-2xl px-12 text-white font-bold pb-4 h-32">
                October 5th-6th, 2024 • In-Person Event
              </p>
            </div>
            <AnimatedWindow
              endingRot={-4}
              delay={750}
              config={{ duration: 500, easing: easings.easeOutBack }}
              className="absolute right-8 -bottom-16 lg:w-[24dvw] flex flex-col justify-center items-center p-4 pt-12"
            >
              <Link
                className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white w-full p-4 mt-2 text-xl flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
                href="/dashboard/apply"
              >
                Register Now
                <FaArrowRight className="inline ml-2" />
              </Link>
            </AnimatedWindow>
          </AnimatedWindow>
        </ParallaxLayer>
      </div>
    </>
  );
}

function AboutLayer() {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.3} style={{ pointerEvents: "none" }}>
        <Window
          angle="-6"
          className="relative left-6 w-[20%] h-auto hidden lg:block"
        >
          <img
            src={hero.src}
            alt="Welcome to MRUHacks"
            className="w-full h-full object-fit"
          />
        </Window>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} style={{ pointerEvents: "none" }}>
        <Window
          angle="6"
          className="absolute top-64 right-12 w-[20%] h-auto hidden lg:block"
        >
          <img
            src={photo5.src}
            alt="Welcome to MRUHacks"
            className="w-full h-full object-fit"
          />
        </Window>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} style={{ pointerEvents: "none" }}>
        <Window
          angle="7"
          className="relative left-32 top-96 w-[18%] h-auto hidden lg:block"
        >
          <img
            src={photo6.src}
            alt="Welcome to MRUHacks"
            className="w-full h-full object-fit"
          />
        </Window>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} className="-mt-40 md:mt-0">
        <div className="relative px-4">
          <p
            className="text-primary font-bold text-3xl md:text-4xl w-full text-center scroll-mt-24 md:leading-[6rem]"
            id="about"
          >
            Welcome to MRUHacks
          </p>
          <p className="text-primary text-xl md:text-2xl w-full text-center mb-4">
            Dream, design, and develop your future!
          </p>
          <p className="text-text text-md md:text-lg w-full text-left px-2 md:text-center leading-10 max-w-screen-sm mx-auto z-30 xl:max-w-screen-md">
            This October, join up to 150 hackers in the Riddell Library and
            Learning Center for a hackathon experience like no other. Discover a
            community of like-minded designers, developers, programmers, and
            tech enthusiasts. Connect and engage with experienced software
            engineer industry mentors, and enjoy free food throughout the event.
            At MRUHacks, the participant experience comes first. Experience
            engaging workshops, exciting activities before and during the event,
            and have the chance to network with not only companies but your
            fellow hackers.
          </p>
        </div>
      </ParallaxLayer>
    </>
  );
}

function PopupButtons() {
  return (
    <>
      <div className="absolute top-2 left-2 w-2 md:w-4 h-2 md:h-4 bg-red-500 rounded-full"></div>
      <div className="absolute top-2 left-6 md:left-8 w-2 md:w-4 h-2 md:h-4 bg-orange-500 rounded-full"></div>
      <div className="absolute top-2 left-10 md:left-14 w-2 md:w-4 h-2 md:h-4 bg-green-500 rounded-full"></div>
    </>
  );
}

function AnimatedWindow({
  startingScale = 0,
  startingRot = 0,
  endingScale = 1,
  endingRot = 0,
  delay = 0,
  config = {},
  bgOverride = false,
  className = "absolute top-8 right-8 w-[10%] h-auto",
  children,
}: {
  startingScale?: number;
  startingRot?: number;
  endingScale?: number;
  endingRot?: number;
  delay?: number;
  config?: object;
  bgOverride?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [springs, api] = useSpring(() => ({
    from: { transform: `scale(${startingScale}) rotateZ(${startingRot}deg)` },
  }));

  useEffect(() => {
    api.start({
      transform: `scale(${endingScale}) rotateZ(${endingRot}deg)`,
      delay: delay,
      config: config,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <animated.div
      className={`${className} border rounded-lg shadow-lg ${bgOverride ? "" : "bg-white"} overflow-hidden pt-6 md:pt-8`}
      style={{ ...springs }}
    >
      <PopupButtons />
      {children}
    </animated.div>
  );
}

function DropdownWindow({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`relative border rounded-lg shadow-lg bg-white overflow-hidden pt-6 md:pt-8 ${className}`}
    >
      <PopupButtons />
      <Accordion type="single" collapsible>
        <AccordionItem value="test">
          <AccordionTrigger className="text-xl font-bold text-center px-4">
            {title}
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Window({
  children,
  angle = "0",
  className,
}: {
  children: React.ReactNode;
  angle?: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} border rounded-lg shadow-lg bg-white overflow-hidden pt-6 md:pt-8`}
      style={{ transform: `rotateZ(${angle}deg)` }}
    >
      <PopupButtons />
      {children}
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 w-full lg:px-12 py-4 z-30 bg-white/50 backdrop-blur-sm flex flex-row items-center text-lg justify-between text-base space-x-4">
      <div className="hidden flex-row items-center space-x-8 lg:flex">
        <a
          href="#home"
          className="text-muted-foreground hover:text-black transition"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-muted-foreground hover:text-black transition"
        >
          About
        </a>
        <a
          href="#faqs"
          className="text-muted-foreground hover:text-black transition"
        >
          FAQs
        </a>
        <a
          href="#sponsors"
          className="text-muted-foreground hover:text-black transition"
        >
          Sponsors
        </a>
      </div>
      <div className="hidden flex-row items-center space-x-8 lg:flex">
        <Link
          href="https://www.instagram.com/mruhacks"
          className="text-muted-foreground hover:text-black transition"
        >
          <FaInstagram className="text-2xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/mruhacks"
          className="text-muted-foreground hover:text-black transition"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          href="https://discord.gg/tRtW5phPQv"
          className="text-muted-foreground hover:text-black transition"
        >
          <FaDiscord className="text-2xl" />
        </Link>

        <Link
          href="/dashboard/apply"
          className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white p-2 px-4 flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
        >
          Register Now <FaArrowRight className="inline ml-2" />
        </Link>
      </div>
      <FaBars className="text-2xl lg:hidden text-muted-foreground" />
    </nav>
  );
}
