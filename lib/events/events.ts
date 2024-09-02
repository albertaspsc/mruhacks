export type Event = {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  registration: string;
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const timeOptions = {
  hour: "numeric",
  minute: "2-digit",
};
export const events: Event[] = [
  {
    id: 1,
    title: "Design and Web w/ CybHER",
    description:
      "Learn the foundations of web development with CybHER,MRU’s prominent club for women in tech with a specialization in excellent networking events (for all genders). This is the Perfect chance to brush up on any web development skills or learn web development for the first time. It will be a standard HTML and CSS affair, which is enough to make a web page.",
    startDate: new Date("2024-09-12T16:30:00-06:00"),
    endDate: new Date("2024-09-12T18:00:00-06:00"),
    location: "Library Classroom A",
    registration: "https://forms.gle/vHsQdVfsthqNBGvW9",
  },
  {
    id: 2,
    title: "Javascript Essentials w/ C4",
    description:
      "A workshop for those who already know basic HTML, CSS, and web principles. From some of our hackathon organizers, learn basic elements of Javascript, lightly touching upon the backend and APIs.",
    startDate: new Date("2024-09-17T16:30:00-06:00"),
    endDate: new Date("2024-09-17T18:00:00-06:00"),
    location: "Library Classroom A",
    registration: "https://forms.gle/b8DS19pQdJefTPi68",
  },
  {
    id: 3,
    title: "Git Essentials w/ CAMRU",
    description:
      "Collaborative programming is an incredibly important skill used by many developers; learning to work with others is key to creating projects on greater scale, so this is your chance to learn Git, an industry standard system for collaborative programming and version control, from CAMRU—MRU’s  central student hub for all things tech.",
    startDate: new Date("2024-09-19T17:00:00-06:00"),
    endDate: new Date("2024-09-19T18:30:00-06:00"),
    location: "Library Classroom A",
    registration: "https://forms.gle/frDn2LTf8ZXKDkwn8",
  },
  {
    id: 4,
    title: "Game Development w/ the GDDC",
    description:
      "Exercise your passion for games with this Godot workshop! The GDDC, MRU’s game design and development club, will teach the basics of working with Godot’s engine and language. By the end of the workshop, you’ll have a basic, functional Video game.",
    startDate: new Date("2024-09-26T16:30:00-06:00"),
    endDate: new Date("2024-09-26T18:00:00-06:00"),
    location: "Library Classroom A",
    registration: "https://forms.gle/uc5kAtarLwTC8Arz9",
  },
];
