import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import booksRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import dotenv from 'dotenv'
import connectDB from './db.js';

dotenv.config()
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB()

// Books Routes
app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Start the Server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
