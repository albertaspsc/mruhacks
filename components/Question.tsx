export default function Question({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="bg-primary rounded-xl text-base-100 p-4 my-4 ">
      <summary className="font-bold text-lg list-none">{question}</summary>
      <p className="pt-4">{answer}</p>
    </details>
  );
}
