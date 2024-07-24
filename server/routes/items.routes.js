// import { Router } from 'express';
// import { createItem, deleteItem, getSingleItem, getallItems, updatedItem } from '../controllers/items.controllers.js';

// const itemrouter = Router();

// itemrouter.post("/createItem", createItem);
// itemrouter.patch("/updateItem/:id", updatedItem);
// itemrouter.get("/getallItems", getallItems);
// itemrouter.get("/getSingleItem/:id", getSingleItem);
// itemrouter.delete("/delete/:id", deleteItem);

// export default itemrouter;

// import { Router, response } from "express";
// import {
//   createUser,
//   signupUsers,
//   getallUsers,
//   getSingleUsers,
//   deleteUsers,
// } from "../controllers/users.controllers.js";
// import {
//   createItem,
//   deleteItem,
//   getSingleItem,
//   getallItems,
//   updatedItem,
// } from "../controllers/items.controllers.js";

// const itemrouter = Router();

// itemrouter.post("/createItem", createItem);
// itemrouter.patch("/updateItem", updatedItem);
// itemrouter.get("/getallItems", getallItems);
// itemrouter.get("/getSingleItem/:id", getSingleItem);
// itemrouter.delete("/delete/:id", deleteItem);
// export default itemrouter;
// Ensure your routes are correctly imported and set up


// latest
// import { Router } from "express";
// import {
//   createItem,
//   deleteItem,
//   getSingleItem,
//   getallItems,
//   updatedItem,
// } from "../controllers/items.controllers.js";

// const itemrouter = Router();

// itemrouter.post("/createItem", createItem);
// itemrouter.patch("/updateItem/:id", updatedItem);
// itemrouter.get("/getallItems", getallItems);
// itemrouter.get("/getSingleItem/:id", getSingleItem);
// itemrouter.delete("/delete/:id", deleteItem);

// export default itemrouter;
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { deleteItem } from '../controllers/items.controllers.js';
const prisma = new PrismaClient();
const itemrouter = Router();

// Get All Items
itemrouter.get('/getallItems', async (req, res) => {
  try {
    const items = await prisma.items.findMany();
    res.status(200).json(items);
  } catch (e) {
    res.status(500).json({ success: false, message: 'Oops! Items not found' });
  }
});

// Get Single Item
itemrouter.get('/getSingleItem/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.items.findUnique({ where: { id: Number(id) } });
    if (!item) {
      res.status(404).json({ success: false, message: 'Item not found' });
    } else {
      res.status(200).json(item);
    }
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

// Create Item
itemrouter.post('/createItem', async (req, res) => {
  const { image, material, description, seller, similarProducts, price, ratings } = req.body;
  try {
    const item = await prisma.items.create({
      data: { image, material, description, seller, similarProducts, price, ratings },
    });
    res.status(201).json({ success: true, data: item });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
});

// Update Item
itemrouter.patch('/updateItem/:id', async (req, res) => {

  const { id } = req.params;
  const { image, material, description, seller, similarProducts, price, ratings } = req.body;
  try {
    const updatedItem = await prisma.items.update({
      where: { item_id: id },
      data: { image, material, description, seller, similarProducts, price, ratings },
    });
    res.status(200).json(updatedItem);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "an error occured" });
  }
});

// Delete Item
itemrouter.delete('/delete/:id',deleteItem)


export default itemrouter;
