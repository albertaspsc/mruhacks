import { Markdown, Html, Link, Tailwind, Text } from "@react-email/components";
import { unsubscribeURL } from "./lib";

export const Email = ({
  markdown,
  send_to,
  message_id,
}: {
  markdown: string;
  send_to: string;
  message_id: string;
}) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Markdown>{markdown}</Markdown>
        <Text>
          This emails was meant for <strong>{send_to}</strong>.<br />
          <Link href={unsubscribeURL({ email: send_to, uuid: message_id })}>
            Unsubscribe
          </Link>
        </Text>
      </Tailwind>
    </Html>
  );
};
