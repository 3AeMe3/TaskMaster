"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleDelete = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Fallo en eliminar el task" + id);
    }
    revalidatePath("/tasks");
    redirect("/tasks");
  } catch (err) {
    console.error(err);
  }
};
