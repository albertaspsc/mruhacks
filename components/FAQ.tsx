import Question from "../components/Question";
export default function FAQs() {
  const half = faqs.length / 2;
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <div id="faq">
      <h1 className="text-xl font-bold text-center text-primary-content">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-wrap pt-4">
        <div className="w-full px-4 lg:w-1/2">
          {left.map((f, key) => (
            <Question key={key} {...f}></Question>
          ))}
        </div>
        <div className="w-full px-4 lg:w-1/2">
          {right.map((f, key) => (
            <Question key={key} {...f}></Question>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a Hackathon?",
    answer:
      "A hackathon can be thought of as an “invention marathon” or a “real time science fair”. Anyone who has an interest in technology and software attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. Over the course of 24-hours you will bring your crazy ideas to life through technology before showcasing them to a team of judges.",
  },
  {
    question: "When is MRUHacks?",
    answer:
      "MRUHacks will be held from October 5th - 6th, 2024, in the Riddell Library and Learning Centre. More details will be released closer to the event.",
  },
  {
    question: "Who can participate?",
    answer:
      "This year, MRUHacks is open to any and all post-secondary students! Just recently graduated? Don’t worry, you’re invited too! All attendees must be 18 years or older to participate.",
  },
  {
    question: "How many people can be on a team?",
    answer:
      "Hackers can form teams of up to five people. Feel free to team up with anyone, regardless of degree, school, or experience level. If you’re still looking for a team, come find one on our Discord.",
  },
  {
    question: "How much does it cost to participate?",
    answer:
      "Absolutely nothing! We’ll also be providing food for the entire event, as well as a few goodies for hackers along the way.",
  },
  {
    question: "What if I've never hackathon'd before?",
    answer:
      "MRUHacks is open to everyone, regardless of skill level. Whether you’re new to coding, or a seasoned veteran, this is the place for you. Still worried? Stay tuned for a series of workshops that’ll help you brush up on your skills.",
  },
  {
    question: "When do applications open?",
    answer:
      "Applications are open right now! Visit mruhacks.ca to apply. Act fast, as we only have room for 100 hackers this year!",
  },
  {
    question: "Why should I participate in a hackathon?",
    answer:
      "Attending MRUHacks will give you a platform to learn new skills, collaborate with like-minded individuals, and build a sweet project. It's a great opportunity to solve real-world problems, win some prizes, and join a community of hackers.",
  },
];
