import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor({
  value,
  setValue,
}: {
  value: string;
  setValue: (value?: string, event?: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="container" data-color-mode="dart">
      <MDEditor
        value={value}
        height="100%"
        // minHeight={50}
        visibleDragbar={false}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
