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
        data: result 
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
        data: result 
    });
};

export const ProductControllers = {
    createProduct,
    getAllProducts
}
