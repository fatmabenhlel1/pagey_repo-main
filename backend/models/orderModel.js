import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference the User model
      required: true,
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
          required: true,
          min: 1, // Ensure quantity is at least 1
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0, // Default total price is 0
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending', // Default status is 'Pending'
    },
    paymentMethod: {
      type: String,
      enum: ['Credit Card', 'PayPal', 'Cash on Delivery'],
      default: 'Credit Card',
    },
    shippingAddress: {
      type: String,
      required: true, // Require a shipping address
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
