export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="collapse collapse-arrow p-4 border border-accent-100 bg-accent-700">
      <input type="checkbox" />
      <div className="collapse-title text-lg lg:text-xl font-semibold text-secondary-200">
        {question}
      </div>
      <div className="collapse-content text-md text-text-50 font-medium lg:text-lg">
        <p>{answer}</p>
      </div>
    </div>
  );
}
