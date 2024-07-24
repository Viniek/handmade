import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();


export const getSellerRequests = async (req, res) => {
    try {
      const sellerRequests = await prisma.seller.findMany();
      res.status(200).json({
        success: true,
        data: sellerRequests,
      });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ success: false, message: e.message });
    }
  };
  

  