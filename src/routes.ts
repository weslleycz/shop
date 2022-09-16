import { Router } from "express";
import { createCompany, loginCompany } from "./controllers/company";
import { createUser, loginUser, recoveryCodeUser } from "./controllers/user";

const router = Router();

//User
router.post("/user/signup", createUser);
router.post("/user/login", loginUser);
router.get("/user/recovery/:email", recoveryCodeUser);

//Company
router.post("/company/signup", createCompany);
router.post("/company/login", loginCompany);

export { router };
