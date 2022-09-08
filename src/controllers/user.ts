import { prismaClient } from "../utils/prismaClient";
import { color } from "console-log-colors";
import { Request, Response } from "express";
import { crypyPassword } from "../utils/crypyPassword";
import { loginJWT } from "../utils/jwt";
import { User } from "../types/user";

const { bgGreen, bgMagenta, bgRed, bgYellow, bgCyan } = color;

const createUser = async (req: Request, res: Response) => {
    try {
        const { CPF, birth_date, email, password, name, phone } = <User>(
            req.body
        );
        console.log(bgCyan(req.method));
        const data = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                CPF:CPF,
                birth_date: birth_date,
                password: crypyPassword(password),
                phone: phone,
            }
        })
        return res.status(200).json({ status: "create", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

export { createUser };
