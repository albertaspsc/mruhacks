export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="collapse collapse-arrow p-4 border border-accent-100 bg-primary text-neutral">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-bold">{question}</div>
      <div className="collapse-content  ">
        <p>{answer}</p>
      </div>
    </div>
  );
}
