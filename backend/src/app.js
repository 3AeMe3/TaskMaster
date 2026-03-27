import express from "express";
import router from "./routes/task.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 4000;
app.listen(PORT);
