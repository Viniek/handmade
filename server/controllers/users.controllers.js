import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
export function getourusers(request, response) {
  response.send("getting all users");
}

// createuser
export const createUser = async (req, res) => {
  try {
    const { fullname, emailaddress, password, role } = req.body;
    // if(!fullname)return res.status(400).json({success:false, message:"First name required..."})

    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = await prisma.user.create({
      data: {
        fullname,
        emailaddress,
        password: hashedPassword,
        role,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "hurray!!user created successfuly..." });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: e.message });
  }
};

// login user
export const signupUsers = async (req, res) => {
  const { emailaddress, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: { emailaddress },
    });
    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch === true) {
        const payload = {
          id: user.id,
          fullname: user.fullname,
          emailaddress: user.emailaddress,
          role: user.role,
          // password:user.password
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "100h",
        });
        //   return res.json({ success: true, message: "Signed in successfully...", user });
        res.cookie("access_token", token);
        res.status(200).json({ success: true, data: payload });
      } else {
        return res
          .status(400)
          .json({
            success: false,
            message: "Oops! Wrong login credentials...",
          });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found..." });
    }
  } catch (e) {
    return res.status(500).json({ success: false, message: e.message });
  }
};

// Get all users
export const getallUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ success: false, message: "try again" });
  }
};

// get single user
export const getSingleUsers = async (req, res) => {
  const { id } = req.params.id;
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    if (!user) {
      res.status(404).json({ message: "oops user not found..." });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

// delete user
export const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteOperation = await prisma.user.delete({
      where: { id: id },
    });
    // ("DELETE FROM users WHERE id=$1",[id]);
    //     if (deleteOperation.rowCount ==1){
    //         res.status(200).json({success:true, message: "wohoo!user deleted successfully"})
    //     }else{
    //         res.status(400).json({success:false, message: "oops! invalid user"})
    //     }
    res.status(200).json({ success: true, message: "hurray!!user deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// view requests
export const getRequests = async (req, res) => {
  try {
    const seller = await prisma.user.findMany({
      where: { role: "admin" },
    });
    if (!seller) {
      return res.status(404).json({ message: "oops seller not found..." });
    } else {
      return res.status(200).json(seller);
    }
  } catch (e) {
    return res.status(500).json({ success: false, message: e.message });
  }
};
