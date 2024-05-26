export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="collapse collapse-arrow join-item p-4 my-4 border border-accent-100 bg-primary text-neutral">
      <input type="checkbox" name="faq" className="hidden" />
      <summary className="collapse-title font-bold text-lg">{question}</summary>
      <div className="collapse-content ">
        <p>{answer}</p>
      </div>
    </details>
  );
}
