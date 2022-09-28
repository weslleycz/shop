import { Router } from "express";
import { createCompany, loginCompany } from "./controllers/company";
import {
    createProduct,
    deleteProduct,
    getProductCategorie,
    listProduct,
    searchProduct,
    selectProduct,
    updateProduct,
} from "./controllers/product";
import {
    createUser,
    loginUser,
    recoveryCodeUser,
    updatePasswordUser,
} from "./controllers/user";

const router = Router();

//User
router.post("/user/signup", createUser);
router.post("/user/login", loginUser);
router.get("/user/recovery/:email", recoveryCodeUser);
router.put("/user/updatePasswor", updatePasswordUser);

//Company
router.post("/company/signup", createCompany);
router.post("/company/login", loginCompany);

//Product
router.post("/product/create", createProduct);
router.get("/product/list", listProduct);
router.delete("/product/delete/:id", deleteProduct);
router.put("/product/update/:id", updateProduct);
router.get("/product/select/:id", selectProduct);
router.get("/product/search/:name", searchProduct);
router.get("/product/:categorie", getProductCategorie);

export { router };
