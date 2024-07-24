import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export const sellerslogin = async (req, res) => {
  try {
    const { emailaddress, password } = req.body;
    const seller = await Prisma.client.findFirst({
      where: { emailaddress, password },
    });
    if (!seller) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid login credentials" });
    }
    if (seller.approvedAccount === false) {
      return res
        .status(400)
        .json({ success: false, message: "Account not yet Approved..." });
    }
    const passwordMatch = bcrypt.compareSync(password, seller.password);
    if (passwordMatch) {
      const payload = {
        id: user_id.id,
        fullname: seller.fullname,
        emailaddress: seller.emailaddress,
        role: seller.role,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET2);
      res.cookie("access_token", token).json({ success: true, data: payload });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid login credentials..." });
    }
  } catch (e) {
    res.status(500).json({ success: false, message: "server error" });
  }
};
