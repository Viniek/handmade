// export const getallItems = async (req, res) => {
//     try {
//       const items = await prisma.items.findMany();
//       res.status(200).json(items);
//     } catch (e) {
//       res.status(500).json({ success: false, message: "Oops!! Items not found" });
//     }
//   };

import { Prisma, PrismaClient } from "@prisma/client";
import { Router, response } from "express";

const prisma = new PrismaClient();
const itemrouter = Router();

export const getallItems = async (req, res) => {
  try {
  
    const items = await prisma.items.findMany();
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ succes: false, message: "oops!! item not found" });
  }
};

export const getSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await prisma.items.findFirst({ where: { id: id } });
    if (!items) {
      res.status(500).json({ succes: false, message: "item not found" });
    } else {
      res.status(200).json(items);
    }
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ succes: false, message: e.message });
  }
};
// create singleitem
export const createItem = async (req, res) => {
  const {
    image,
    material,
    description,
    seller,
    similarProducts,
    price,
    ratings,
  } = req.body;
  try {
    const items = await prisma.items.create({
      data: {
        image,
        material,
        description,
        seller,
        similarProducts,
        price,
        ratings,
      },
    });
    return res.status(201).json({ succes: true, data: items });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: e.message });
  }
};
// updateitem
export const updatedItem = async (req, res) => {
  const { id } = req.params;
  const {
    image,
    material,
    description,
    seller,
    similarProducts,
    price,
    ratings,
  } = req.body;
  try {
    let updatedItem;

    if (image) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { image },
      });
    }

    if (material) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { material },
      });
    }

    if (description) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { description },
      });
    }

    if (seller) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { seller },
      });
    }

    if (similarProducts) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { similarProducts },
      });
    }

    if (price) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { price },
      });
    }
    if (ratings) {
      updatedItem = await prisma.items.update({
        where: { item_id: id },
        data: { ratings },
      });
    }
    res.status(200).json(updatedItem);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// delete item
export const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.items.delete({ where: { item_id: id } });
    if(!item){
      return response.status(404).json({succes:false, message:"product not found"})
    }

    res.status(200).json({ success: true, message: "product deleted" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false,message: "product not" });
  }
};

