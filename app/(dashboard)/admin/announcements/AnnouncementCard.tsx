export function AnnouncementCard({ announcement }) {
  return (
    <>
      <div className="p-4 my-2 border border-solid rounded-xl">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-semibold">{announcement.title}</h1>
          <h3 className="text-md font-medium">{announcement.date}</h3>
        </div>
        <p>{announcement.description}</p>
      </div>
    </>
  );
}
