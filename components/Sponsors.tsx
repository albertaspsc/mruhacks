export default function Sponsors() {
  return (
    <div id="sponsors" className="space-y-5">
      <h1 className="font-bold text-primary-content text-xl text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center">
        <p className="font-medium text-center mb-4">
          MRUHacks would be impossible without our fantastic sponsors.
        </p>
        <a
          href="mailto:outreach@mruhacks.ca"
          className="text-neutral btn btn-primary"
        >
          Become a Sponsor!
        </a>
      </div>
    </div>
  );
}
