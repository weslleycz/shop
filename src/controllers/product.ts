import { color } from "console-log-colors";
import { Request, Response } from "express";
import { Product } from "../types/product";
import { validatorJWT } from "../utils/jwt";
import { prismaClient } from "../utils/prismaClient";

const { bgMagenta, bgRed, bgYellow, bgCyan } = color;

const createProduct = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    	name:"Maçã",
	                    description:"A maçã é o pseudofruto pomáceo da macieira, árvore da família Rosaceae. É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados pelos seres humanos.",
	                    price:50,
	                    quantity:500,
	                    type:"Fruta",
	                    code_bar:"1234567890128",
	                    discount:0,
	                    url:"url da foto da fruta"
                }
        } */
    const token = req.headers.authorization;
    try {
        const {
            code_bar,
            description,
            discount,
            name,
            price,
            quantity,
            type,
            url,
        } = <Product>req.body;
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
                    url,
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
        const data = await prismaClient.product.findMany();
        return res.status(200).json({ data: data, has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const deleteProduct = async (req: Request, res: Response) => {
    console.log(bgRed(req.method));
    const id = req.params.id;
    try {
        validatorJWT(req.headers.authorization);
        await prismaClient.product.delete({
            where: {
                id: id,
            },
        });
        return res.status(200).json({ status: "delete", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const updateProduct = async (req: Request, res: Response) => {
    console.log(bgYellow(req.method));
    const id = req.params.id;
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    	name:"Maçã",
	                    description:"A maçã é o pseudofruto pomáceo da macieira, árvore da família Rosaceae. É um dos pseudofrutos de árvore mais cultivados, e o mais conhecido dos muitos membros do género Malus que são usados pelos seres humanos.",
	                    price:50,
	                    quantity:500,
	                    type:"Fruta",
	                    code_bar:"1234567890128",
	                    discount:0,
	                    url:"url da foto da fruta"
                }
        } */
    try {
        const data = <Product>req.body;
        validatorJWT(req.headers.authorization);
        await prismaClient.product.update({
            where: {
                id,
            },
            data: {
                ...data,
            },
        });
        return res.status(200).json({ status: "update", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const selectProduct = async (req: Request, res: Response) => {
    console.log(bgMagenta(req.method));
    const id = req.params.id;
    try {
        const data = await prismaClient.product.findUnique({
            where: {
                id,
            },
        });
        return res.status(200).json({ data: data, has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const searchProduct = async (req: Request, res: Response) => {
    console.log(bgMagenta(req.method));
    try {
        const name = req.params.name;
        const data = await prismaClient.product.findMany({
            where:{
                name:{
                    contains: name,
                }
            }
        });
        return res.status(200).json({ data: data, has_error: false });
    } catch (error) {
        return res.status(500).json({ status: "error", has_error: true });
    }
};

export {
    createProduct,
    listProduct,
    deleteProduct,
    updateProduct,
    selectProduct,
    searchProduct
};
