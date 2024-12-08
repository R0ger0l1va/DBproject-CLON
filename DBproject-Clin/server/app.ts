
import express  from "express";
//Middlewares
import morgan from "morgan";
import cors from "cors";
import taskRoutes from "./routes/index";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api",taskRoutes)

export default app;
