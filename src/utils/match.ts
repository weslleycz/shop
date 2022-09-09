import { encryptiPassword } from "./crypy";
export const matchKey = (password: string,encrypted:string) => {
     return password===encryptiPassword(encrypted)
}