import express from 'express';
import { createOrderFromCart, getUserOrders } from '../controllers/orderController.js';

const router = express.Router();

// Create an order using the user's cart
router.post('/create', createOrderFromCart);

// Get all orders for a user
router.get('/:userId', getUserOrders);

export default router;