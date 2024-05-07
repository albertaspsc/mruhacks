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
      <div className="collapse-title text-xl font-medium text-secondary-200">
        {question}
      </div>
      <div className="collapse-content text-text-50">
        <p>{answer}</p>
      </div>
    </div>
  );
}
