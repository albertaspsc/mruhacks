export default function Sponsors() {
  return (
    <div className="pt-2" id="sponsors">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-700 text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center">
        <p className="md:text-xl font-medium text-text text-center mb-4 text-text-800">
          MRUHacks would be impossible without our fantastic sponsors.
        </p>
        <div className="btn bg-secondary-500 text-xl border-0 btn-xl text-white font-semibold hover:bg-secondary-300 hover:text-black">
          <a href="mailto:outreach@mruhacks.ca">Become a Sponsor!</a>
        </div>
      </div>
    </div>
  );
}
