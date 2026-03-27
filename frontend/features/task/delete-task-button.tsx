"use client";
import { Button } from "../ui/button";
import { handleDelete } from "./handle-delete";

export default function DeleteTaskButton({ id }: { id: string }) {
  return (
    <Button type="button" onClick={() => handleDelete(id)}>
      Delete
    </Button>
  );
}
