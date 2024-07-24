// import { getourusers } from '../controllers/users.controllers';
import jwt from "jsonwebtoken";
import { Router} from "express";
import { validateInformation } from "../middleware/users.middleware.js";
import {
  createUser,
  signupUsers,
  getallUsers,
  getSingleUsers,
  deleteUsers,
  getRequests,
} from "../controllers/users.controllers.js";

const payload = { password: "1234567" };
const secret = "your_secret_key";

const token = jwt.sign(payload, secret);
console.log(token);
const userrouter = Router();

userrouter.post("/createUser", validateInformation, createUser);
userrouter.post("/signup", signupUsers);
userrouter.get("/users", getallUsers);
userrouter.get("/users/:id", getSingleUsers);
userrouter.delete("/delete/:id", deleteUsers);
userrouter.get("/users/viewrequests", getRequests);
export default userrouter;
