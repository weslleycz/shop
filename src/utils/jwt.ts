import * as dotenv from "dotenv";
import { sign, verify } from "jsonwebtoken";
dotenv.config();

const loginJWT = (id: string) => {
    return sign({ data: id }, process.env.JWT_SECRET || "kIB6DFMK", {
        expiresIn: "24h",
    });
};

 type Jwt = {
    data: string;
    iat: number;
    exp: number;
};


const validatorJWT = (token: any) => {
    try {
        const {data} =<Jwt> verify(token, process.env.JWT_SECRET || "kIB6DFMK");
        return data
    } catch (error) {
        throw new Error
    }
};

export { loginJWT, validatorJWT };
