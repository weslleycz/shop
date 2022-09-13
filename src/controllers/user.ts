import { color } from "console-log-colors";
import { Request, Response } from "express";
import { Login, User } from "../types/user";
import { crypyPassword } from "../utils/crypy";
import { loginJWT } from "../utils/jwt";
import { matchKey } from "../utils/match";
import { prismaClient } from "../utils/prismaClient";

const { bgGreen, bgRed, bgYellow, bgCyan, bgBlue } = color;

const createUser = async (req: Request, res: Response) => {
    try {
        const { CPF, birth_date, email, password, name, phone } = <User>(
            req.body
        );
        console.log(bgCyan(req.method));
        const data = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                CPF: CPF,
                birth_date: birth_date,
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
    try {
        console.log(bgCyan(req.method));
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
