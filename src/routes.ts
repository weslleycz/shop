import { Router } from "express";
import { createUser, loginUser } from "./controllers/user";
import { createCompany,loginCompany } from "./controllers/company";

const router = Router();

//User
router.post("/user/signup", createUser);
router.post("/user/login", loginUser);

//Company
router.post("/company/signup", createCompany);
router.post("/company/login", loginCompany);

export { router };