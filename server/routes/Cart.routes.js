import express from 'express';
import { PrismaClient } from '@prisma/client';

const cartrouter = express.Router();
const prisma = new PrismaClient();

// Add to Cart
cartrouter.post('/add', async (req, res) => {
  const { user_id, item_id } = req.body;
  try {
    const existingCartItem = await prisma.cart.findFirst({
      where: { user_id, item_id },
    });

    if (existingCartItem) {
      return res.status(400).json({ error: 'Item already in cart' });
    }

    const cartItem = await prisma.cart.create({
      data: {
        user_id,
        item_id,
      },
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
    console.log(error.message);
  }
});

// Get Cart Items
cartrouter.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const cartItems = await prisma.cart.findMany({
      where: { user_id },
    });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

// Delete Cart Item
cartrouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.cart.delete({ where: { id: Number(id) } });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ error: 'Failed to delete cart item' });
  }
});

export default cartrouter;
