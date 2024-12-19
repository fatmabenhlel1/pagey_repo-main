import Cart from '../models/cartModel.js';
import Book from '../models/bookModel.js';

// Get user's cart
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the cart by user ID
    const cart = await Cart.findOne({ user: userId }).populate('books.book', 'title price');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
};

// Add a book to the cart
export const addToCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { bookId, quantity } = req.body;

    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Find the user's cart or create a new one
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, books: [] });
    }

    // Check if the book is already in the cart
    const existingBook = cart.books.find((item) => item.book.toString() === bookId);

    if (existingBook) {
      // Update quantity if the book is already in the cart
      existingBook.quantity += quantity;
    } else {
      // Add the new book to the cart
      cart.books.push({ book: bookId, quantity });
    }

    await cart.save();
    res.status(200).json({message:"item added to cart" , cart});
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
};

// Remove a book from the cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { bookId } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove the book from the cart
    cart.books = cart.books.filter((item) => item.book.toString() !== bookId);

    await cart.save();
    
    res.status(200).json({message :"item removed from cart",cart});
  } catch (error) {
    res.status(500).json({ message: 'Error removing from cart', error: error.message });
  }
};
