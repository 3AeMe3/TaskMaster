import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = path.join(__dirname, "..", "data", "task.json");
const cleanText = (text) => text.trim().replace(/\s+/g, " ");

const readFromFile = (cb) => {
  fs.readFile(pathFile, "utf8", (err, fileContent) => {
    if (err) {
      console.log("error", err);
      return cb([]);
    }

    const data = JSON.parse(fileContent);
    return cb(data);
  });
};

class Tasks {
  constructor(title, description, createdAt) {
    this.id = Date.now().toString();
    this.title = cleanText(title);
    this.description = cleanText(description);
    this.status = "pending";
    this.createdAt = createdAt;
  }
  save() {
    readFromFile((data) => {
      console.log(__dirname);
      data.push(this);
      const dataFormated = JSON.stringify(data, null, 2);
      fs.writeFile(pathFile, dataFormated, (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }
  static fetchAll(cb) {
    readFromFile((data) => {
      cb(data);
    });
  }

  static getTask(cb, id) {
    readFromFile((data) => {
      const task = data.find((t) => t.id === id);
      cb(task);
    });
  }

  static deleteTask(cb, id) {
    readFromFile((data) => {
      const existId = data.find((d) => d.id === id);

      if (!existId) {
        return cb(null, new Error("Task no found"));
      }
      const updatedTasks = data.filter((t) => t.id !== id);

      fs.writeFile(pathFile, JSON.stringify(updatedTasks, null, 2), (err) => {
        if (err) {
          console.log(err);
          return;
        }
        cb(updatedTasks, null);
      });
    });
  }

  static updateTask(cb, id, updated) {
    readFromFile((data) => {
      const existingTask = data.find((task) => task.id === id);

      if (!existingTask) {
        return cb(null, new Error("no existe ese id"));
      }
      const changeValueOfTask = data.map((task) => {
        console.log(task, "este es el task");
        if (task.id === id) {
          return { ...task, ...updated };
        }
        return task;
      });

      fs.writeFile(
        pathFile,
        JSON.stringify(changeValueOfTask, null, 2),
        (err) => {
          if (err) {
            return cb(null, new Error("fallo en sobreescribir"));
          }

          cb(changeValueOfTask, null);
        },
      );
    });
  }
}
export default Tasks;
