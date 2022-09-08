import { Router } from "express";
import { createUser } from "./controllers/user";

const router = Router();

//User
router.post("/user/signup", createUser);

export { router };
