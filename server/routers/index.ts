import { Router } from "express";
import register from "./auth/register";
import login from "./auth/login";

const router = Router();

router.use("/api/register", register)
router.use("/api/login", login)


export default router;