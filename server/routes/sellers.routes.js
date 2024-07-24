// import { Router } from "express";
// import { requestAccount,getAllMembers,updateSeller} from "../controllers/sellers.controllers.js";
// import { validateSellersInformation } from "../middleware/sellers.middleware.js";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// const sellerrouter = Router();

// sellerrouter.post("/request", validateSellersInformation, requestAccount);
// sellerrouter.get("/sellers",getAllMembers)
// sellerrouter.patch("/update/:id",updateSeller)
// sellerrouter.get("/requests", async (req, res) => {
//   try {
//     const requests = await prisma.seller.findMany();
//     res.status(200).json({ success: true, data: requests });
//   } catch (e) {
//     res.status(500).json({ success: false, message: e.message });
//   }
// });

// export default sellerrouter;
import { Router } from "express";
import { requestAccount, getAllMembers} from "../controllers/sellers.controllers.js";
import { validateSellersInformation } from "../middleware/sellers.middleware.js";

const sellerrouter = Router();

sellerrouter.post("/request", validateSellersInformation, requestAccount);
sellerrouter.get("/sellers", getAllMembers);
// sellerrouter.patch("/sellers/:id", updateSeller);
// sellerrouter.patch("/sellers/:id", updateSeller);
sellerrouter.get("/requests", async (req, res) => {
  try {
    const requests = await prisma.seller.findMany();
    res.status(200).json({ success: true, data: requests });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

export default sellerrouter;
