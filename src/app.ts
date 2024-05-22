import express, { NextFunction, Request, Response } from "express";
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

// "Not Found" middleware
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
    });
});

export default app;
