import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "./Product";

const CartItem = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const total = cartItems.reduce((p, c) => p + c.price * c.qty, 0);
  const getInitialState = () => {
    const value = "0";
    return value;
  };
  const [price, setprice] = useState(getInitialState);
  const handleChange = (e) => {
    setprice(e.target.value);
  };
  return (
    <div class="flex container mx-auto flex-row">
      <div class="flex w-full flex-col lg:flex-row shadow-md">
        <div class="lg:w-3/4 bg-white dark:bg-gray-900 dark:text-white duration-200 px-10 py-10 w-full">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cartItems.length === 0 ? (
            <div className="flex justify-center">
              <img
                className="transparent"
                src="https://limasy.com/img/empty-animation1.gif"
                alt="Loading"
              />
            </div>
          ) : (
            cartItems.map((item) => <Product key={item.id} item={item} />)
          )}

          <Link
            to={"/"}
            href="#"
            class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" class=" lg:w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">
              Items {cartItems.length}
            </span>
            <span class="font-semibold text-sm">₹{total}</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select
              value={price}
              onChange={handleChange}
              class="block p-2 text-gray-600 w-full text-sm">
              <option value={0}>
                Upto 5 km - <span className="text-green-500">Free</span>
              </option>
              <option value={15}>Range 5-8 km - ₹15.00</option>
              <option value={25}>Range 9-15 km - ₹25.00</option>
              <option value={40}>Range Above 15 km - ₹40.00</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase">
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full text-black"
            />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div class="border-t mt-8">
            <p class="mt-2">Shipping: {price}</p>
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{total + +price}</span>
            </div>
            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
