export default function Sponsors() {
	return (
		<div className="container p-8 mt-4" id="sponsors">
			<h1 className="text-3xl font-bold text-primary-700 mb-4 text-center">
				Our Sponsors
			</h1>
			<div className="flex flex-col items-center p-6 m-4">
				<p className="text-xl font-medium text-text text-center mb-4 text-text-800">
					MRUHacks would be impossible without our fantastic sponsors.
				</p>
				<div className="btn bg-primary-500 text-xl text-text-50 m-auto">
					<a href="mailto:outreach@mruhacks.ca">Become a Sponsor!</a>
				</div>
			</div>
		</div>
	);
}
