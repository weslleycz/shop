export type User = {
    name: "string";
    email: "string";
    password: "string";
    CPF: "string";
    phone: "string";
    avatar?: "string";
};

export type Login = {
    email: "string";
    password: "string";
};

export type PasswordUser={
    code: "string";
    password: "string";
}