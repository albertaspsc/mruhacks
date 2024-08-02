import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor() {
  const [value, setValue] = React.useState("");
  return (
    <div className="container">
      <MDEditor
        value={value}
        height="100%"
        // minHeight={50}
        visibleDragbar={false}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
