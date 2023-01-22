import { Router } from "express";
import {
    infoUser,
    login,
    register,
} from "../controllers/auth.controller.js";
import {
    bodyLoginValidator,
    bodyRegisterValidator,
} from "../middlewares/validatorManager.js";

const router = Router();

router.post("/register", bodyRegisterValidator, register);
router.post("/login", bodyLoginValidator, login);
router.get("/Info", infoUser);

export default router;
