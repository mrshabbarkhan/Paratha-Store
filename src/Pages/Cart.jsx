import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartItem from "../components/CartItem/CartItem";

const Cart = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
   <CartItem/>
      <Footer />
    </div>
  );
};

export default Cart;
