import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference the User model
      required: true,
      unique: true, // Ensure each user has only one cart
    },
    books: [
      {
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Book', // Reference the Book model
          required: true,
        },
        quantity: {
          type: Number,
          default: 1, // Default quantity is 1
          min: 1, // Ensure quantity is at least 1
        },
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
