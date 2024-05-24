export default function AboutUs() {
  return (
    <div className="hero min-h-full py-20" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <img src="/welcome.jpg" className=" rounded-lg shadow-2xl" width={500} />
        <div className="p-8 bg-primary-700 rounded-xl">
          <h1 className="text-3xl font-bold text-secondary-200">
            Welcome to MRUHacks
          </h1>
          <p className="py-6 text-text-50">
            Every October, join 150+ hackers in the Riddell Library and Learning Center for a hackathon experience like no other. Discover a community of like-minded designers, developers, programmers, and tech enthusiasts. Connect and engage with industry mentors from a variety of fields. At MRUHacks, the participant experience comes first. Experience engaging workshops, exciting activities before and during the event, and have the chance to network with not only companies, but your fellow hackers.
          </p>
        </div>
      </div>
    </div>
  );
}
