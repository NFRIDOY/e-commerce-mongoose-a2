import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductServices } from "../products/product.service";

// O1
const createOrder = async (req: Request, res: Response) => {
    try {
        const OrderData = req.body;

        // Find the product Stock

        // const getProductStock = await ProductServices.getProductById(OrderData?.productId)
        
        // Update the product Quantity
        
        const getProductStock = await ProductServices.updateStockByProductId(OrderData?.productId, OrderData?.quantity)

        // const updateProductQuantity = await ProductServices.updateProductById()

        if (!getProductStock) {
            return res.json({
                success: false,
                message: "Stock Out",
                data: getProductStock,
            });
        }

        // Create Order
        const result = await OrderServices.createOrder(OrderData);

        // console.log(result)
        if (!result) {
            return res.json({
                success: false,
                message: "Order is not created!",
                data: result,
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};
// O2
const getAllOrder = async (req: Request, res: Response) => {
    try {
        const search = req.query.email as string;
        // console.log(search);

        let result;
        if (search) {
            result = await OrderServices.getSearchOrderByEmail(search);
        } else {
            result = await OrderServices.getAllOrder();
        }
        // console.log(result);
        if (!result || result.length === 0) {
            return res.json({
                success: false,
                message: "No order found",
                data: [],
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrder,
};
