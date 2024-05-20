import express, { Request, Response } from "express";
// import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

//parsers
app.use(express.json());

// app.use("/api/movies", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("E-Commerce Mongoose Server is Running");
});

export default app;
