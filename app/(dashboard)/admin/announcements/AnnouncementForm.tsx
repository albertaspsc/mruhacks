"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Editor from "@/components/Editor";
import React from "react";
import { Label } from "@/components/ui/label";

export function AnnouncementForm({
  formSubmit,
}: {
  formSubmit: (data: object) => void;
}) {
  const [titleValue, setTitleValue] = React.useState("");
  const [editorValue, setEditorValue] = React.useState("");
  const [discord, setDiscord] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [error, setError] = React.useState("");

  function handleSubmit() {
    if (titleValue.trim() === "") {
      setError("Title can't be blank");
      return;
    }

    if (editorValue.trim() === "") {
      setError("Editor content can't be blank");
      return;
    }

    if (!discord && !email) {
      setError("At least one checkbox must be selected");
      return;
    }

    setError("");

    const data = {
      title: titleValue,
      content: editorValue,
      discord,
      email,
    };

    formSubmit(data);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form action={handleSubmit} className="w-9/12 space-y-6">
      <Input
        placeholder="Annoucement Title"
        className="resize-none"
        value={titleValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTitleValue(event.target.value)
        }
      />

      <Editor
        value={editorValue}
        setValue={(value) => setEditorValue(value || "")}
      />

      <div className="flex flex-col justify-between space-y-2">
        <div className="flex flex-row justify-start">
          <Checkbox
            id="discord"
            checked={discord}
            onCheckedChange={(checked: boolean) => {
              setDiscord(!!checked);
            }}
          />
          <Label htmlFor="discord" className="ml-2 text-md leading-none">
            Discord
          </Label>
        </div>
        <div className="flex flex-row justify-start">
          <Checkbox
            id="email"
            checked={email}
            onCheckedChange={(checked: boolean) => {
              setEmail(!!checked);
            }}
          />
          <Label htmlFor="email" className="ml-2 text-md leading-none">
            Email
          </Label>
        </div>
      </div>
      <Button
        type="submit"
        className="bg-primary text-white font-semibold text-md"
      >
        Submit
      </Button>
      <p className="text-red-500 text-md inline ml-2">{error}</p>
    </form>
  );
}
