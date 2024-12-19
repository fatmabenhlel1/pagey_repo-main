import Order from '../models/orderModel.js';
import Cart from '../models/cartModel.js';

// Create an order using the user's cart
export const createOrderFromCart = async (req, res) => {
    try {
      const { userId, shippingAddress, paymentMethod } = req.body;
  
      // Validate input
      if (!shippingAddress) {
        return res.status(400).json({ message: 'Shipping address is required' });
      }
  
      if (!paymentMethod) {
        return res.status(400).json({ message: 'Payment method is required' });
      }
  
      // Fetch the user's cart
      const cart = await Cart.findOne({ user: userId }).populate('books.book', 'title price');
      if (!cart || cart.books.length === 0) {
        return res.status(400).json({ message: 'Your cart is empty' });
      }
  
      // Calculate total price
      const totalPrice = cart.books.reduce((total, item) => {
        return total + item.book.price * item.quantity;
      }, 0);
  
      // Create the order
      const newOrder = new Order({
        user: userId,
        books: cart.books.map((item) => ({
          book: item.book._id,
          quantity: item.quantity,
        })),
        totalPrice,
        shippingAddress,
        paymentMethod,
      });
  
      await newOrder.save();
  
      // Clear the user's cart
      cart.books = [];
      await cart.save();
  
      res.status(201).json({
        message: 'Order placed successfully',
        order: newOrder,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error placing order', error: error.message });
    }
  };


// Get all orders for a user
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ user: userId }).populate('books.book', 'title price');

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
};
