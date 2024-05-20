import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);

    // console.log(result)
    // // data is sending as response from the database to the frontend.
    // // Here result is the inserted document
    res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
    });
};
const getAllProducts = async (req: Request, res: Response) => {
    // const productData = req.body;
    const result = await ProductServices.getAllProducts();

    // console.log(result)
    // // data is sending as response from the database to the frontend.
    // // Here result is the inserted document
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
};
const getProductById = async (req: Request, res: Response) => {
    const id = req.params.productId;
    console.log(typeof id);
    const result = await ProductServices.getProductById(id);

    // console.log(result)
    // // data is sending as response from the database to the frontend.
    // // Here result is the inserted document
    res.json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
    });
};
const updateProductById = async (req: Request, res: Response) => {
    const id = req.params.productId;
    const updateProduct = req.body;
    const result = await ProductServices.updateProductById(id, updateProduct);

    // console.log(result)
    if (!result) {
        return res.json({ success: false, message: "Product not found" });
    }
    // // data is sending as response from the database to the frontend.
    // // Here result is the inserted document
    res.json({
        success: true,
        message: "Product updated successfully!",
        data: result,
    });
};

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
};
