import express from 'express';
import { getCart, addToCart, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();

// Get user's cart
router.get('/:userId', getCart);

// Add a book to the cart
router.post('/:userId/add', addToCart);

// Remove a book from the cart
router.post('/:userId/remove', removeFromCart);

export default router;
