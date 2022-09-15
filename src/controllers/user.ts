import { color } from "console-log-colors";
import { Request, Response } from "express";
import { Login, User } from "../types/user";
import { crypyPassword } from "../utils/crypy";
import { loginJWT } from "../utils/jwt";
import { matchKey } from "../utils/match";
import { prismaClient } from "../utils/prismaClient";

const { bgGreen, bgRed, bgYellow, bgCyan, bgBlue } = color;

const createUser = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    name: "Jhon Doe",
                    email: "jhon@gmail.com",
                    CPF:"346.310.260-90",
                    password:"hamburguer",
                    phone:"(43) 2902-7515"
                }
        } */
    try {
        const { CPF, email, password, name, phone } = <User>req.body;
        const data = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                CPF: CPF,
                password: crypyPassword(password),
                phone: phone,
            },
        });
        return res.status(200).json({ status: "create", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const loginUser = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    try {
        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Some description...',
                schema: {
                    email: "jhon@gmail.com",
                    password:"hamburguer",
                }
        } */
        const { email, password } = <Login>req.body;
        const data = await prismaClient.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        if (data?.password != undefined) {
            if (matchKey(password, data?.password)) {
                return res
                    .status(200)
                    .json({ token: loginJWT(data.id), has_error: false });
            } else {
                return res
                    .status(400)
                    .json({ data: "Senha incorreta!", has_error: true });
            }
        } else {
            return res
                .status(400)
                .json({ data: "Usuário não cadastrado!", has_error: true });
        }
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

export { createUser, loginUser };
