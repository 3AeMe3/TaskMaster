"use client";
import { Button } from "../ui/button";
import { handleCompleteTask } from "./handle-complete";

type CompleteTaskProps = {
  id: string;
};

export default function CompleteTaskButton({ id }: CompleteTaskProps) {
  return (
    <Button type="button" onClick={() => handleCompleteTask(id)}>
      play
    </Button>
  );
}
