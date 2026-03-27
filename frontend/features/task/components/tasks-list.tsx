import { ScrollArea } from "@/components/ui/scroll-area";
import TaskTableItems from "./task-list-item";
import { Separator } from "@/components/ui/separator";
export default function TasksList({ tasks, onHandleClick }) {
  return (
    <div className="flex flex-col gap-4  w-full h-full ">
      <ScrollArea className="h-full w-full">
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskTableItems task={task} onHandleClick={onHandleClick} />
            <Separator className="my-2" />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
