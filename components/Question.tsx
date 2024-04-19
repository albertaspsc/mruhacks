export default function Question({ question, answer }: {
	question: string;
	answer: string;
}) {
	return (
		<div className="flex-1 p-4 bg-gray-200 my-2 rounded-2xl">
			<h2 className="text-l font-semibold">{question}</h2>
			<hr className="my-1" />
			<p className="flex flex-row space-x-1 p-2 font-normal">{answer}</p>
		</div>
	);
}
