"use client";

import MDEditor from "@uiw/react-md-editor";
export function AnnouncementCard({ announcement }) {
  const date = new Date(announcement.created_at).toLocaleString();
  return (
    <div className="p-4 my-2 border border-solid rounded-xl">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{announcement.subject}</h1>
        <h3 className="text-md font-medium">{date}</h3>
      </div>
      <MDEditor.Markdown
        source={announcement.message}
        style={{ background: "white", color: "black" }}
      />
    </div>
  );
}
