import { Address } from "./address";
export type Company = {
    CNPJ: "string";
    name: "string";
    email: "string";
    password: "string";
    phone: "string";
    address: Address;
};

export type Login = {
    email: "string";
    password: "string";
};
