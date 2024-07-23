export type Event = {
  id: number;
  title: string;
  description: string;
  start: string;
  end: string;
  location: string;
};

export const events: Event[] = [
  {
    id: 1,
    title: "Design and Web w/ cybHER",
    description:
      "Learn the foundations of web development with CybHER,MRU’s prominent club for women in tech with a specialization in excellent networking events (for all genders). This is the Perfect chance to brush up on any web development skills or learn web development for the first time. It will be a standard HTML and CSS affair, which is enough to make a web page.",
    start: "September 12th, 4:30pm",
    end: "September 12th, 6:00pm",
    location: "Library Classroom A",
  },
  {
    id: 2,
    title: "Git Essentials w/ CAMRU",
    description:
      "Collaborative programming is an incredibly important skill used by many developers; learning to work with others is key to creating projects on greater scale, so this is your chance to learn Git, an industry standard system for collaborative programming and version control, from CAMRU—MRU’s  central student hub for all things tech.",
    start: "September 19th, 5:00pm",
    end: "September 19th, 6:00pm",
    location: "Library Classroom A",
  },
  {
    id: 3,
    title: "Minecraft Build Challenge",
    description:
      "Just before the event, you have the opportunity to win a prize! Submit photos of your best minecraft build based on our prompt, which will be announced at the end of September. The winners will be announce at MRUHacks' opening ceremony. So prepare yourself, you could win something before the event even starts!",
    start: "September 30th, 10:00am",
    end: "October 4th, 12:00pm",
    location: "Online",
  },
];
