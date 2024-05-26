export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="collapse collapse-arrow join-item p-4 my-4 border border-accent-100 bg-accent-700">
      <input type="checkbox" name="faq" className="hidden" />
      <summary className="collapse-title text-lg lg:text-xl font-semibold text-secondary-200">
        {question}
      </summary>
      <div className="collapse-content text-md text-text-50 font-medium lg:text-lg">
        <p>{answer}</p>
      </div>
    </details>
  );
}
