import express, { Request, Response } from "express";
import { ProductRouters } from "./modules/products/product.route";
const app = express();

//parsers
app.use(express.json());

app.use("/api/products", ProductRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("E-Commerce Mongoose Server is Running");
});

export default app;
