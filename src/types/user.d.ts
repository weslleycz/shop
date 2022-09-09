export type User = {
    name: "string";
    email: "string";
    password: "string";
    birth_date: "string";
    CPF: "string";
    phone: "string";
    avatar?: "string";
};

export type Login = {
    email: "string";
    password: "string";
};
