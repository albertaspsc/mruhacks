import Question from "../components/Question";

export default function FAQs() {
	return (
		<div className="container p-8 mt-4 bg-background">
			<h1 className="text-4xl font-semibold text-center bg-primary">Frequently Asked Questions</h1>
			<div className="gap-8 columns-1 md:columns-2 mt-12 space-y-8">
				<Question question="What is a Hackathon?"
					answer="A hackathon can be thought of as an “invention marathon” or a “real time science fair”. Anyone who has an interest in technology and software attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. Over the course of 24-hours you will bring your crazy ideas to life through technology before showcasing them to a team of judges." />
				<Question question="When is MRUHacks?"
					answer="MRUHacks will be held from October 5th - 6th, 2024, in the Riddell Library and Learning Centre. You can sign up here to subscribe to our mailing list to receive details when they become available." />
				<Question question="Who can participate?"

					answer="MRUHacks is open to any Post Secondary student. It's completely free to participate, and you don't need any prior experience to participate. You can participate as an individual or as a team of up to four people." />
				<Question question="What is MRUHacks?"
					answer="MRUHacks is a hackathon run by students for students, where 100+ students of different skill levels come together to create unique software projects from scratch. We empower and enable teams to make something great in only 24 hours by providing an abundance of resources like workshops, mentors, sponsors, and more." />
				<Question question="How much does it cost to participate?"
					answer="Admission to MRUHacks is completely free! We also provide food and a space to work for the entire event, as well as all the resources our participants need to build their projects." />
				<Question question="What if I have never been to a hackathon before?"
					answer="We’ll provide mentors, and workshops to help you with your project. Hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people." />
				<Question question="When do applications open?"
					answer="We are working hard on finalizing details for MRUHacks 2024. You can sign up here to subscribe to our mailing list to receive details when they become available." />
				<Question question="Why should you participate in a hackathon?"
					answer="They are way too fun to pass up!" />
			</div></div>);
}
