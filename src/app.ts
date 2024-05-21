import express, { Request, Response } from "express";
import { ProductRouters } from "./modules/products/product.route";
import { OrderRouters } from "./modules/orders/order.route";
const app = express();

//parsers
app.use(express.json());

app.use("/api/products", ProductRouters);
app.use("/api/orders", OrderRouters);

app.get("/", (req: Request, res: Response) => {
    res.send("E-Commerce Mongoose Server is Running");
});

// app.use((req, res, next) => {
//     res.send("Not Found");
// });

export default app;
