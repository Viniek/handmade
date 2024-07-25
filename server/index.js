import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import itemrouter from "./routes/items.routes.js";
import userrouter from "./routes/users.routes.js";
import sellerrouter from "./routes/sellers.routes.js";
import authrouter from "./routes/auth.routes.js";
import cartrouter from "./routes/Cart.routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/items", itemrouter);
app.use("/api/users", userrouter);
// app.use("/api/cart", cart);
app.use("/api/users", sellerrouter);
app.use("/api/users/auth", authrouter);
app.use('/cart', cartrouter);
app.use('/items', itemrouter);

app.use("/cart", cartrouter);

app.listen(5000, () => {
  console.log("server running ...");
});
