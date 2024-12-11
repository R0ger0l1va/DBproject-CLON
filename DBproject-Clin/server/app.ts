
import express  from "express";
//Middlewares
import morgan from "morgan";
import cors from "cors";
import taskRoutes from "./routes/index";
import bodyParser from "body-parser";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json())
app.use(taskRoutes)

export default app;
