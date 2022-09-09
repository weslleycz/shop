import { Router } from "express";
import { createUser, loginUser } from "./controllers/user";

const router = Router();

//User
router.post("/user/signup", createUser);
router.post("/user/login", loginUser);

export { router };
