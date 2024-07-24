import { Router } from "express";
import { sellerslogin } from "../controllers/auth.controllers.js";

const authrouter = Router();

authrouter.post("/", sellerslogin);
export default authrouter;
