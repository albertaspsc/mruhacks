import React from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Editor = () => (
  <FormField
    name="message"
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-lg">Announcements Body</FormLabel>
        <MDEditor
          value={field.value}
          onChange={field.onChange}
          height="100%"
          visibleDragbar={false}
          previewOptions={{
            disallowedElements: ["style", "script", "table"],
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
        <FormMessage />
      </FormItem>
    )}
  />
);
