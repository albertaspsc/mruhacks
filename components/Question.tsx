export default function Question({ question, answer }: {
	question: string;
	answer: string;
}) {
	return (
		<div className="collapse collapse-arrow p-4 border border-accent-500">
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
