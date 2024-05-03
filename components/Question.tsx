export default function Question({ question, answer }: {
	question: string;
	answer: string;
}) {
	return (
		<div className="collapse collapse-arrow p-4 m-4 border border-base-300 bg-base-200">
			<input type="checkbox" />
			<div className="collapse-title text-xl font-medium">
				{question}
			</div>
			<div className="collapse-content">
				<p>{answer}</p>
			</div>
		</div>
	);
}
