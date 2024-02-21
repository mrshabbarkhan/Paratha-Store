import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../../Features/cart/Cart";
import toast, { Toaster } from "react-hot-toast";

const Product = ({ item }) => {
  const [count, setcount] = useState(item.qty);

  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(remove(id));
  };
  const handleIncrease = (item) => {
    dispatch(increase(item));
    setcount(count + 1);
  };
  const handleDecrease = (item) => {
    dispatch(decrease(item));
    setcount(count > 1 ? count - 1 : 1);
  };
  const notify = () =>
    toast(`${item.name} Removed`, {
      icon: "👏",
    });
  const totalprice = item.price * count;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div class="flex items-center hover:bg-primary -mx-8 px-6 py-5">
        <div class="flex w-2/5">
          {/* <!-- product --> */}
          <div class="w-20">
            <img class="object-fill" src={item.img} alt="" />
          </div>
          <div class="flex flex-col justify-between ml-4 flex-grow">
            <span class="font-bold text-sm">{item.name}</span>
            <span class="text-red-500 text-xs">{item.discription}</span>
            <button
              onClick={() => {
                handleremove(item.id);
                notify();
              }}
              class="font-semibold hover:text-red-500 text-gray-500 text-xs">
              Remove
            </button>
          </div>
        </div>
        <div class="flex justify-center w-1/5">
          <button onClick={() => handleDecrease(item)}>
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>

          <input
            class="mx-2 border text-center w-8 bg-white dark:bg-gray-900 dark:text-white duration-200"
            type="text"
            value={count}
          />

          <button onClick={() => handleIncrease(item)}>
            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span class="text-center w-1/5 font-semibold text-sm">
          ₹{item.price}
        </span>
        <span class="text-center w-1/5 font-semibold text-sm">
          ₹{totalprice}
        </span>
      </div>
    </>
  );
};
export default Product;
