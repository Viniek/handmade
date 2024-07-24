import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const requestAccount = async (req, res) => {
  try {
    const { fullname, emailaddress, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = await prisma.seller.create({
      data: {
        fullname,
        emailaddress,
        password: hashedPassword,
      },
    });
    res
      .status(201)
      .json({
        success: true,
        message: "account requested successfuly...",
        data: newUser,
      });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: e.message });
  }
};

// export const updateSeller = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { fullname, emailaddress, password,approvedAccount,createdAt,updatedAt} = req.body;

//     const data = {};
//     if (fullname) data.fullname = fullname;
//     if (emailaddress) data.emailaddress = emailaddress;
//     if (password) data.password = bcrypt.hashSync(password, 12);
//     if (approvedAccount) data.approvedAccount = approvedAccount;
//     if (createdAt) data.createdAt = createdAt;
//     if (updatedAt) data.updatedAt = updatedAt;
    
//     const updatedSeller = await prisma.seller.update({
//       where: { id: parseInt(id) },
//       data,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Seller updated successfully.",
//       data: updatedSeller,
//     });
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ success: false, message: e.message });
//   }
// };

export const getAllMembers=async (req,res)=>{
 try{
  const sellers=await prisma.user.findMany({
    where:{approvedAccount:true}
  });
  res.status(200).json({success:true,data:sellers})
 }catch(e){
  res.status(500).json({success:true,message:"server error"})
 }
}


// updateseller
export const updateSeller= async (req, res) => {
  const { id } = req.params;
  const {
    fullname,
    emailaddress,
    password,
    role,
    approvedAccount,
    createdAt,
    updatedAt,
  } = req.body;
  try {
    let updatedSeller;

    if (fullname) {
      updatedSeller = await prisma.seller.update({
        where: { id: id },
        data: { fullname },
      });
    }

    if (emailaddress) {
      updatedSeller = await prisma.seller.update({
        where: { id: id },
        data: { emailaddress },
      });
    }

    if (password) {
      updatedSeller = await prisma.seller.update({
        where: { id: id },
        data: { password },
      });
    }

    if (role) {
      updatedSeller= await prisma.seller.update({
        where: { id: id },
        data: { role},
      });
    }

    if (approvedAccount) {
      updatedSeller= await prisma.seller.update({
        where: { id: id },
        data: { approvedAccount },
      });
    }

    if (createdAt) {
      updatedSeller= await prisma.seller.update({
        where: { id: id },
        data: { createdAt},
      });
    }
    if (updatedAt) {
      updatedSeller = await prisma.seller.update({
        where: { id: id },
        data: { ratings },
      });
    }
    res.status(200).json(updatedSeller);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};


