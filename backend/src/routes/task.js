import express from "express";
const router = express.Router();

import taskController from "../controller/task.js";

router.get("/tasks/:id", taskController.getTask);

router.get("/tasks", taskController.getTasks);

router.post("/tasks", taskController.postTask);

router.delete("/tasks/:id", taskController.deleteTask);

router.patch("/tasks/:id", taskController.patchTask);

export default router;
