import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// O1
const createOrder = async (req: Request, res: Response) => {
    try {
        const OrderData = req.body;
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
        console.log(result);
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
// //2
// const getAllProducts = async (req: Request, res: Response) => {
//     try {
//         const search = req.query.searchTerm as string;
//         // console.log(search);

//         let result;
//         if (search) {
//             result = await ProductServices.getSearchProducts(search);
//         } else {
//             result = await ProductServices.getAllProducts();
//         }

//         console.log(result)
//         if (!result) {
//             return res.json({
//                 success: false,
//                 message: "No products found!",
//                 data: [],
//             });
//         }
//         // // data is sending as response from the database to the frontend.
//         // // Here result is the inserted document
//         res.json({
//             success: true,
//             message: "Products fetched successfully!",
//             data: result,
//         });
//     } catch (error) {
//         console.log("Error ==>", error);
//     }
// };
// //3
// const getProductById = async (req: Request, res: Response) => {
//     try {
//         const id = req.params.productId;
//         console.log(typeof id);
//         const result = await ProductServices.getProductById(id);

//         // console.log(result)
//         // // data is sending as response from the database to the frontend.
//         // // Here result is the inserted document
//         if (!result) {
//             return res.json({
//                 success: false,
//                 message: "Product not found",
//                 data: result,
//             });
//         }
//         res.json({
//             success: true,
//             message: "Products fetched successfully!",
//             data: result,
//         });
//     } catch (error) {
//         console.log("Error ==>", error);
//     }
// };
// //4
// const updateProductById = async (req: Request, res: Response) => {
//     try {
//         const id = req.params.productId;
//         const updateProduct = req.body;
//         const result = await ProductServices.updateProductById(
//             id,
//             updateProduct
//         );

//         // console.log(result)
//         if (!result) {
//             return res.json({ success: false, message: "Product not found" });
//         }
//         // // data is sending as response from the database to the frontend.
//         // // Here result is the inserted document
//         res.json({
//             success: true,
//             message: "Product updated successfully!",
//             data: result,
//         });
//     } catch (error) {
//         console.log("Error ==>", error);
//     }
// };
// //5
// const deleteProductById = async (req: Request, res: Response) => {
//     try {
//         const id = req.params.productId;

//         const result = await ProductServices.deleteProductById(id);

//         // console.log(result)
//         if (!result) {
//             return res.json({
//                 success: false,
//                 message: "Product not found",
//                 data: null,
//             });
//         }
//         // // data is sending as response from the database to the frontend.
//         // // Here result is the inserted document
//         res.json({
//             success: true,
//             message: "Product deleted successfully!",
//             data: null,
//         });
//     } catch (error) {
//         console.log("Error ==>", error);
//     }
// };

export const OrderControllers = {
    createOrder,
    getAllOrder,
    // getProductById,
    // updateProductById,
    // deleteProductById,
};
