"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Task } from "@/types/task";

interface TaskListProps {
  task: Task;
}

export default function TaskListItems({ task, onHandleClick }: TaskListProps) {
  function handleDetails(id: string) {
    console.log("se abre", id);
    onHandleClick(task);
  }

  return (
    <Card
      className="flex flex-row justify-between px-5 items-center py-3"
      onClick={() => handleDetails(task.id)}
    >
      <div className="flex flex-row gap-3 items-center  w-full">
        {/* <CompleteTaskButton id={task?.id} /> */}
        <div className="flex flex-col w-full">
          <p className="font-semibold text-md">{task?.title || "title"}</p>
          <div>
            <span>{task?.createdAt || "createdAt"} </span>
            <span>Frank Mendoza</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Badge variant={"destructive"}>{task?.status || "pending"}</Badge>
        <p>slider</p>
      </div>
    </Card>
  );
}
