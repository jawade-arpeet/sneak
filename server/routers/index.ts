import { Router } from "express";
import register from "./auth/register";
import login from "./auth/login";
import sneaker from "./sneaker";

const router = Router();

router.use(register)
router.use(login)
router.use(sneaker)


export default router;