import express from 'express';
import { PrismaClient } from '@prisma/client';

const cartrouter = express.Router();
const prisma = new PrismaClient();

cartrouter.post('/add', async (req, res) => {
  const { user_id, item_id } = req.body;
  try {
    const existingCartItem = await prisma.Cart.findFirst({
      where: { user_id, item_id },
    });

    if (existingCartItem) {
      return res.status(400).json({ error: 'Item already in cart' });
    }

    const cartItem = await prisma.Cart.create({
      data: { user_id, item_id },
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
    console.log(error.message);
  }
});

// Other routes...

export default cartrouter;
