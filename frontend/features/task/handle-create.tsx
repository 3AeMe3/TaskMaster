"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import * as z from "zod";
import { formSchema } from "@/schema/form-schema";

export async function createTask(data: z.infer<typeof formSchema>) {
  try {
    const response = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("error al guardar los datos");
    }

    const result = await response.json();

    console.log("Respuesta del backend", result);
    revalidatePath("/tasks");

    redirect("/");
  } catch (error) {
    console.error(error);
  }
  return {
    success: true,
  };
}
