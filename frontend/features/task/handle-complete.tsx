"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const handleCompleteTask = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "completed",
      }),
    });

    if (!response.ok) {
      throw new Error("fallo al momento marcar como completado ");
    }

    revalidatePath("/tasks");
    redirect("/tesks");
  } catch (err) {
    console.error(err);
  }
};
