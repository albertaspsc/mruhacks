export type Announcement = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export const announcements = [
  {
    id: 1,
    title: "MRUHacks Arrives Tomorrow",
    description: "Friendly reminder to bring your chargers, and a can-do mood!",
    date: "October 4th, 4:00pm",
  },
  {
    id: 2,
    title: "Prepping for Fall",
    description:
      "Hey, hackers! We preparations are in full swing! We can't wait to see you in October!",
    date: "July 15th, 4:30pm",
  },
  {
    id: 3,
    title: "Test Announcement",
    description: "Is this thing working?",
    date: "June 20th, 12:00pm",
  },
];
