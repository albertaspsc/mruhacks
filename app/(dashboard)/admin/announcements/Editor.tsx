import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MAX_MESSAGE_LEN } from "./lib";

export const Editor = () => (
  <FormField
    name="message"
    render={({ field }) => {
      const values = field.value as string;
      return (
        <FormItem>
          <FormDescription>
            Please Note: Style,Script and Table Tags are{" "}
            <strong>not allowed</strong> here they will either be stripped
            entrily or rendered as literal text. <br />
            This will be sent to discord, while we have done our best to ensure
            that previews here are accurate this may not be entrily faithful.
            Please use the &apos;stest annoucment&apos; feature to ensure
            you&apos;re annoucment looks appropriate
          </FormDescription>
          <MDEditor
            previewOptions={{
              disallowedElements: ["style", "script", "table"],
              rehypePlugins: [[rehypeSanitize]],
            }}
            {...field}
          />
          <FormMessage />
          <div
            className={`flex flex-col items-end text-xs
              ${values.length > MAX_MESSAGE_LEN ? "text-red-500" : ""}`}
          >
            {(field.value as string).length}/{MAX_MESSAGE_LEN}
          </div>
        </FormItem>
      );
    }}
  />
);
