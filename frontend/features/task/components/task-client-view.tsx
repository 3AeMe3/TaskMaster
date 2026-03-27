"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import TasksList from "./tasks-list";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CircleCheck,
  Clock,
  Edit,
  MessageSquare,
  Tag,
  Trash,
  UserCircle,
  UserRound,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export default function TaskClientView({ taskData }) {
  const [selectedTask, setSelectedTask] = useState(false);
  return (
    <>
      <TasksList tasks={taskData} onHandleClick={setSelectedTask} />

      <Sheet open={selectedTask} onOpenChange={setSelectedTask}>
        <SheetContent className="gap-0 ">
          <SheetHeader className="bg-white border-b border-gray-200 ">
            <div className=" flex flex-col gap-3 py-2 ">
              <SheetTitle className="text-2xl font-semibold">
                {selectedTask?.title}
              </SheetTitle>
              <div className="flex gap-2">
                <Badge
                  className="bg-red-100 text-red-600 border-red-300 border"
                  variant={"destructive"}
                >
                  Urgente
                </Badge>
                <Badge className="bg-purple-100 text-purple-500 border border-purple-300">
                  Revisado
                </Badge>
              </div>
            </div>
          </SheetHeader>
          <div className="px-4 bg-[#fafbfc] border pt-5 h-full">
            <div className=" flex gap-3 mt-3 ">
              <Button className="flex-1 text-white bg-gradient-to-r from-violet-400 to-indigo-500">
                <Edit />
                Editar
              </Button>
              <Button className="flex-1" variant={"outline"}>
                <CircleCheck />
                Completar
              </Button>
              <Button variant={"outline"}>
                <Trash />
              </Button>
            </div>
            <div className="py-6  border-b border-gray-300">
              <span className="font-semibold text-lg ">Descripción</span>
              <SheetDescription className="mt-2">
                {selectedTask?.description}
              </SheetDescription>
            </div>
            <div className=" grid grid-cols-2  gap-y-5 py-5 border-b border-gray-300 ">
              <div className="flex flex-col justify-center ">
                <Badge variant={"ghost"} className="text-gray-500">
                  <UserRound /> Assignee
                </Badge>
                <div className="flex gap-2">
                  <UserRound />
                  <span className="font-semibold text-sm">Frank Mendoza</span>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <Badge variant={"ghost"} className="text-gray-500">
                  <Calendar /> Assignee
                </Badge>
                <div className="flex gap-2">
                  <UserCircle />
                  <span className="font-semibold text-sm">Frank Mendoza</span>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <Badge variant={"ghost"} className="text-gray-500">
                  <Tag /> Assignee
                </Badge>
                <div className="flex gap-2">
                  <UserCircle />
                  <span className="font-semibold text-sm">Frank Mendoza</span>
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <Badge variant={"ghost"} className="text-gray-500">
                  <Clock /> Assignee
                </Badge>
                <div className="flex gap-2">
                  <UserCircle />
                  <span className="font-semibold text-sm">Frank Mendoza</span>
                </div>
              </div>
              <div className="col-span-2 flex  flex-col gap-3 ">
                <span className="font-semibold text-lg ">Tags</span>
                <div className="flex w-full  gap-2 flex-wrap">
                  <Badge className="bg-gray-200 px-3 " variant={"outline"}>
                    Backend
                  </Badge>
                </div>
              </div>
            </div>
            <div className="py-5 flex flex-col gap-3 border-b border-gray-200">
              <span className="font-medium text-lg">Progreso</span>
              <Progress value={90} />
              <div>
                <span>SubTasks</span>
                <ul className="flex flex-col gap-3 my-3  ">
                  <li>
                    <Checkbox />
                    Tasks
                  </li>
                  <li>
                    <Checkbox /> Tasks
                  </li>

                  <li>
                    <Checkbox /> Tasks
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-5">
              <div className="flex gap-2 mb-4">
                <MessageSquare />
                <span className="font-medium text-lg">Comentarios</span>
              </div>
              <div className="flex gap-2 ">
                <UserRound />
                <Textarea placeholder="Añade un comentario..." />
                <Button className="flex-1 text-white bg-gradient-to-r from-violet-400 to-indigo-500">
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
