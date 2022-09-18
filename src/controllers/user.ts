import { color } from "console-log-colors";
import { Request, Response } from "express";
import { PythonShell } from "python-shell";
import { uuid } from "uuidv4";
import { Login, PasswordUser, User } from "../types/user";
import { crypyPassword } from "../utils/crypy";
import { loginJWT } from "../utils/jwt";
import { matchKey } from "../utils/match";
import { prismaClient } from "../utils/prismaClient";
import { Redis } from "../utils/redis";

const { bgGreen, bgRed, bgYellow, bgCyan, bgMagenta } = color;

const createUser = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: '',
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
                description: '',
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

const recoveryCodeUser = async (req: Request, res: Response) => {
    const email = req.params.email;
    console.log(bgMagenta(req.method));
    try {
        const data = await prismaClient.user.findUnique({
            where: {
                email: email,
            },
        });
        if (data != null) {
            try {
                const code = uuid().slice(-8);
                await Redis.connect();
                const shell = new PythonShell("./src/utils/sendmail.py", {
                    mode: "text",
                });
                shell.send(
                    JSON.stringify(`${process.env.EMAIL}, ${process.env.PASSWORD},
            ${data.email} ,${code}
            `)
                );
                shell.on("message", function (message) {
                    console.log(message);
                });
                await Redis.set(code, JSON.stringify(data.id), {
                    EX: 3600,
                });
                await Redis.disconnect();
                return res
                    .status(200)
                    .json({ status: "Código enviado", has_error: false });
            } catch (error) {
                return res.status(400).json({ data: error, has_error: true });
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

const updatePasswordUser = async (req: Request, res: Response) => {
    console.log(bgYellow(req.method));
            /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: '',
                schema: {
                    code: "código que chegou no email",
                    password:"12345"
                }
        } */
    try {
        const { code, password } = <PasswordUser>req.body;
        await Redis.connect();
        const id = await Redis.get(code);
        if (id !== null) {
            console.log(JSON.parse(id));
            const data = await prismaClient.user.update({
                where:{
                    id:JSON.parse(id)
                },
                data:{
                    password:crypyPassword(password)
                }
            });
            console.log(data);
            await Redis.disconnect();
            return res.status(200).json({ status: "update", has_error: false });
        } else {
            await Redis.disconnect();
            return res.status(400).json({
                data: "Código informado não e valido.",
                has_error: true,
            });
        }
    } catch (error) {
        await Redis.disconnect();
        return res.status(400).json({ data: error, has_error: true });
    }
};

export { createUser, loginUser, recoveryCodeUser, updatePasswordUser };
