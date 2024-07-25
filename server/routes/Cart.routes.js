import { Router } from "express";
import { createCart,removeCart,getCart } from "../controllers/CartController.js";
import VerifyCart from "../middleware/verifyCartUser";
const router = Router();
router.post("/createCart", createCart);
router.get("/getCart/:id", VerifyCart, getCart)
router.delete("/removeCart/:id", VerifyCart, removeCart);

export default router;
