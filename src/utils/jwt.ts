import * as dotenv from "dotenv";
import { sign } from "jsonwebtoken";
dotenv.config();

const loginJWT = (id: string) => {
    return sign({ data: id }, process.env.JWT_SECRET||"kIB6DFMK", {
        expiresIn: "24h",
    });
};

const createJWT = () => {
    
};

export { loginJWT, createJWT };
