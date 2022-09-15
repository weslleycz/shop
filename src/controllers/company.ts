import { color } from "console-log-colors";
import { Request, Response } from "express";
import { Company,Login } from "../types/company";
import { crypyPassword } from "../utils/crypy";
import { loginJWT } from "../utils/jwt";
import { matchKey } from "../utils/match";
import { prismaClient } from "../utils/prismaClient";

const { bgGreen, bgRed, bgYellow, bgCyan, bgBlue } = color;

 const createCompany = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    try {
        const { phone, password, name, email, CNPJ, address } = <Company>(
            req.body
        );
        const {city,latitude,longitude,number,street}=address
        const data=await prismaClient.company.create({
            data:{
                CNPJ:CNPJ,
                email: email,
                name:name,
                password:crypyPassword(password),
                phone:phone,
                address:{
                    create:{
                        city,
                        latitude,
                        longitude,
                        street,
                        number
                    }
                }
                
            }
        })
        return res.status(200).json({ status: "create", has_error: false });
    } catch (error) {
        return res.status(400).json({ data: error, has_error: true });
    }
};

const loginCompany = async (req: Request, res: Response) => {
    console.log(bgCyan(req.method));
    try {
        const { email, password } = <Login>req.body;
        const data = await prismaClient.company.findUnique({
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

export {createCompany,loginCompany}