import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", async (req, res) => {
    res.json({
        success: true,
        message: "Product GetTTTTTTTTTTTTTT successfully!!!!!!!!!!!!!!!!!!!!!!!!!!",
    });
});

export const ProductRouters = router;
