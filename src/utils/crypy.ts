import CryptoJS from "crypto-js";
import * as dotenv from "dotenv";

dotenv.config();

const crypyPassword = (password: string) => {
    const encrypted = CryptoJS.AES.encrypt(
        password,
        process.env.SECRET || "RFMW$e@7g5e9"
    ).toString();
    return encrypted;
};

const encryptiPassword = (password: string) => {
    const decrypted = CryptoJS.AES.decrypt(
        password,
        process.env.SECRET || "RFMW$e@7g5e9"
    );
    return decrypted.toString(CryptoJS.enc.Utf8);
};

export { crypyPassword, encryptiPassword };
