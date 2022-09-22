import { color } from "console-log-colors";
import { Request, Response } from "express";
import { Product } from "../types/product";
import { validatorJWT } from "../utils/jwt";
import { prismaClient } from "../utils/prismaClient";

const { bgGreen,bgMagenta, bgRed, bgYellow, bgCyan, bgBlue } = color;

const createProduct = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    const token = req.headers.authorization;
    try {
        const { code_bar, description, discount, name, price, quantity, type,url } =
            <Product>req.body;
        const id = validatorJWT(token);
        try {
            const data = await prismaClient.product.create({
                data: {
                    description,
                    name,
                    price,
                    quantity,
                    type,
                    code_bar,
                    discount,
                    cooperativeId: id,
                    url
                },
            });
            return res.status(200).json({ status: "create", has_error: false });
        } catch (error) {
            return res.status(400).json({ data: error, has_error: true });
        }
    } catch (error) {
        return res.status(403).json({
            data: "Usuário não cadastrado.",
            has_error: true,
        });
    }
};

const listProduct = async (req: Request, res: Response) => {
    console.log(bgMagenta(req.method));
    try {
        const data = await prismaClient.product.findMany()
        return res.status(200).json({ data: data, has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }   
}

const deleteProduct = async (req: Request, res: Response) => {
    console.log(bgRed(req.method));
    const id = req.params.id
    try {
        validatorJWT(req.headers.authorization);
        await prismaClient.product.delete({
            where:{
             id:id  
            }
        });
        return res.status(200).json({ status: "delete", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });  
    }  
}

export { createProduct, listProduct,deleteProduct };
