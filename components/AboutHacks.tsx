export default function AboutHacks() {
  return (
    <div className="hero min-h-full  py-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/Little_Guy.jpg" className="max-w-lg rounded-lg shadow-2xl" />
        <div className="p-8 bg-primary-700 rounded-xl">
          <h1 className="text-3xl font-bold text-secondary-200">
            The MRUHacks Story
          </h1>
          <p className="py-6 text-text-50">
            In 2023, Sunny Parmar, Matthew Hrehirchuk, and Jaunie Williams
            established MRUHacks, organizing the very first event. Attracting an
            impressive 60 participants, they hosted one of the most successful
            pilot events in the history of Mount Royal Computing, setting the
            stage for a series of spectacular events.
          </p>
          <button className="btn bg-primary-500">Get Started</button>
        </div>
      </div>
    </div>
  );
}
