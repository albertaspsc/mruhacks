import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { Announcement } from "./AnnouncementCards";

export const markDownToHtml = async (markdown: string) =>
  await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

export async function AnnouncementCard({
  announcement,
}: {
  announcement: Announcement;
}) {
  const date = new Date(announcement.created_at).toLocaleString();
  const html = await markDownToHtml(announcement.message);

  return (
    <div className="p-4 my-2 border border-solid rounded-xl">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold">{announcement.title}</h1>
        <h3 className="text-md font-medium">{date}</h3>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: String(html) }}
      />
    </div>
  );
}
