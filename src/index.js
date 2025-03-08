import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import clientRoutes from "./routes/client.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(clientRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
