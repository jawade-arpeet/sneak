import { Router } from "express";
import register from "./auth/register";

const router = Router();

router.use("/api/register", register)

export default router;