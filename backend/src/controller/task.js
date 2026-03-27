import Tasks from "../models/task.js"; //aunque este en typescript se importa como js

const getTask = (req, res) => {
  const id = req.params.id;

  if (typeof id !== "string") {
    res.status(300).json({ message: "invalid ID" });
    return;
  }

  Tasks.getTask((data) => {
    res.json(data);
  }, id);
};

const getTasks = (req, res) => {
  Tasks.fetchAll((data) => {
    res.json(data);
  });
};
const postTask = (req, res) => {
  try {
    const task = new Tasks(
      req.body.title,
      req.body.description,
      req.body.createdAt,
    );

    task.save();
    return res
      .status(201)
      .json({ message: "Tarea creada correctamente", task });
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  if (typeof id !== "string") {
    res.status(300).json({ message: "invalid ID" });
    return;
  }

  Tasks.deleteTask((data, err) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }
    res.json(data);
  }, id);
};

const patchTask = (req, res) => {
  const id = req.params.id;
  if (typeof id !== "string") {
    res.status(300).json({ message: "invalid ID" });
    return;
  }

  const updated = req.body;
  Tasks.updateTask(
    (data, err) => {
      if (err) {
        res.json(err.message);
        return;
      }
      res.json(data);
    },
    id,
    updated,
  );
};
const taskController = {
  getTask,
  getTasks,
  postTask,
  deleteTask,
  patchTask,
};
export default taskController;
