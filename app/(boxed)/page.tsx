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

import { useSpring, animated, easings, useScroll } from "@react-spring/web";

import { useEffect } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import mruhacks from "@/public/mruhacks.png";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Nav />
      <Parallax
        pages={4}
        className="w-full h-full top-0 left-0 bottom-0"
        innerStyle={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(202,250,255,1) 78%, rgba(238,212,255,1) 100%)",
        }}
      >
        <div className="w-full relative">
          <ParallaxLayer offset={0} speed={1.5}>
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
          <div className="relative top-[95dvh] p-4">
            <p className="text-primary font-bold text-2xl md:text-4xl w-full text-center">
              Welcome to MRUHacks
            </p>
            <p className="text-primary text-xl md:text-2xl w-full text-center mb-4">
              Dream, design, and develop your future!
            </p>
            <p className="text-text text-l w-full text-center leading-10 max-w-screen-md mx-auto z-30">
              This October, join up to 150 hackers in the Riddell Library and
              Learning Center for a hackathon experience like no other. Discover
              a community of like-minded designers, developers, programmers, and
              tech enthusiasts. Connect and engage with experienced software
              engineer industry mentors, and enjoy free food throughout the
              event. At MRUHacks, the participant experience comes first.
              Experience engaging workshops, exciting activities before and
              during the event, and have the chance to network with not only
              companies but your fellow hackers.
            </p>
          </div>
          <ParallaxLayer offset={0} speed={0.25}>
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
          <ParallaxLayer offset={0} speed={1} className="relative">
            <AnimatedWindow
              startingScale={0.5}
              delay={300}
              config={{ duration: 1000, easing: easings.easeOutBack }}
              bgOverride
              className="mx-auto mt-[20dvh] relative w-[70%] h-auto"
            >
              <div className="absolute top-0 left-0 w-full h-6 md:h-8 bg-gradient-to-br bg-white"></div>
              <PopupButtons />
              <div className="w-full h-full bg-gradient-to-br from-blue-400/70 to-purple-400 backdrop-blur-sm">
                <img
                  src={logo.src}
                  alt="Welcome to MRUHacks"
                  className="h-full object-contain p-16 pt-8 pb-0"
                />

                <p className="text-2xl pl-12 text-white font-bold pb-4">
                  October 5th-6th, 2024 • In-Person Event
                </p>
              </div>
            </AnimatedWindow>
            <AnimatedWindow
              endingRot={-4}
              delay={750}
              config={{ duration: 500, easing: easings.easeOutBack }}
              className="absolute right-[18dvw] top-[70dvh] w-[18dvw] h-32 flex flex-col justify-center items-center px-4"
            >
              <Link
                className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white w-full p-4 text-xl flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
                href="/dashboard/apply"
              >
                Register Now
                <FaArrowRight className="inline ml-2" />
              </Link>
            </AnimatedWindow>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.75}
            speed={0.5}
            style={{ pointerEvents: "none" }}
          >
            <Window
              angle="-6"
              className="relative top-[60dvh] left-6 w-[20%] h-auto"
            >
              <img
                src={hero.src}
                alt="Welcome to MRUHacks"
                className="w-full h-full object-fit"
              />
            </Window>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.95}
            speed={0.3}
            style={{ pointerEvents: "none" }}
          >
            <Window
              angle="6"
              className="absolute top-[60dvh] right-12 w-[20%] h-auto"
            >
              <img
                src={photo5.src}
                alt="Welcome to MRUHacks"
                className="w-full h-full object-fit"
              />
            </Window>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.75}
            speed={0.1}
            style={{ pointerEvents: "none" }}
          >
            <Window
              angle="7"
              className="relative top-[85dvh] left-48 w-[18%] h-auto"
            >
              <img
                src={photo6.src}
                alt="Welcome to MRUHacks"
                className="w-full h-full object-fit"
              />
            </Window>
          </ParallaxLayer>
          <div className="relative top-[110dvh]">
            <h2 className="text-4xl font-bold text-primary w-full text-center pb-8">
              FAQs
            </h2>
            <div className="flex flex-row w-full px-16 gap-8">
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
          <div>
            <div className="relative top-[130dvh] p-4">
              <p className="text-4xl font-bold text-primary w-full text-center pb-8">
                Sponsors
              </p>
              <div className="flex flex-row max-w-screen-md mx-auto space-x-8">
                <p className="text-text text-xl text-right leading-10 max-w-screen-md mx-auto z-30">
                  MRUHacks wouldn&apos;t be possible without the support of our
                  fantastic sponsors.
                </p>
                <Link
                  href="mailto:outreach@mruhacks.ca"
                  className="rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-white p-2 px-4 text-lg min-w-64 flex flex-row items-center justify-center hover:from-blue-500 hover:to-purple-500 transition"
                >
                  Become a sponsor
                  <FaArrowRight className="inline ml-2" />
                </Link>
              </div>
            </div>
            <Window className="relative top-[135dvh] mx-auto w-[30%] h-auto">
              <p className="text-center text-xl p-12">Coming soon!</p>
            </Window>
          </div>
        </div>
        <p className="absolute top-[388dvh] w-full text-center text-primary text-xl">
          Made with ❤️ by the MRUHacks Team
        </p>
        <p className="absolute top-[393dvh] w-full text-center text-text text-lg">
          © 2024 MRUHacks. All rights reserved.
        </p>
      </Parallax>
    </div>
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
    <nav className="sticky top-0 w-full px-12 py-4 z-30 bg-white/50 backdrop-blur-sm flex flex-row items-center text-lg justify-between text-base space-x-4">
      <div className="flex flex-row items-center space-x-8">
        <img src={mruhacks.src} alt="MRUHacks" className="w-16 h-auto -ml-4" />
        <a>Home</a>
        <a>About</a>
        <a>FAQs</a>
        <a>Community</a>
        <a>Sponsors</a>
      </div>
      <div className="flex flex-row items-center space-x-8">
        <Link
          href="#"
          className="text-muted-foreground hover:text-black transition"
        >
          <FaInstagram className="text-2xl" />
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-black transition"
        >
          <FaLinkedin className="text-2xl" />
        </Link>
        <Link
          href="#"
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
    </nav>
  );
}
