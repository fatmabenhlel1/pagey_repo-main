import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import Home from './Home'; // Example Home component
import BookLibrary from './BookLibrary/BookLibrary'; // Example BookLibrary component
import SignInPage from './Signin/SignInPage';
import SignUp from './SignUp/SignUp';
import UserProfile from './UserProfile/UserProfile';
import ClassicsPage from './ClassicsPage/ClassicsPage';
import BookProfile from './BookProfile/BookProfile';
import PdfReader from './ReadeBook/PdfReader';
import ShoppingCart from './Cart/ShoppingCart';
import BookClub from './BookClub/BookClub';
import AudioBookPage from './AudioBook/AudioBookPage';
import SurveyPage from './Survey/SurveyPage';
import TradingSystem from './TradingSystem/TradingSystem';
import BookForm from './LibraryOwner/BookForm';

const HeroSection: React.FC = () => {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      {/* Toast Container for displaying notifications globally */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      
      <Routes> {/* Wrap routes in Routes */}
        {/* Define routes with path and corresponding component */}
        <Route path="/" element={<Home />} /> 
        <Route path="/book-library" element={<BookLibrary />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/classics" element={<ClassicsPage />} />
        <Route path="/book-profile" element={<BookProfile />} />
        <Route path="/pdf-reader" element={<PdfReader />} />
        <Route path="/my-cart" element={<ShoppingCart />} />
        <Route path="/book-club" element={<BookClub />} />
        <Route path="/audio-book" element={<AudioBookPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/trading" element={<TradingSystem />} />
        <Route path="/library-owner" element={<BookForm />} />
      </Routes>
    </Router>
  );
};

export default HeroSection;
