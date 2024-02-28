import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../../Features/cart/Cart";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Product = ({ item }) => {
  const [count, setcount] = useState(item.qty);
  const [souse, setsouse] = useState(false);

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
        <div class=" md:flex w-2/5 ">
          {/* <!-- product --> */}
          <div class="w-20 md:w-20">
            <img class="object-fill" src={item.img} alt="" />
          </div>
          <div class="flex flex-col justify-between flex-grow">
            <span class="font-bold text-sm md:ml-[25px]">{item.name}</span>
            <button
              onClick={() => {
                handleremove(item.id);
                notify();
              }}
              class="font-semibold hover:text-red-500 text-gray-500 text-xs w-1 md:ml-[25px]">
              Remove
            </button>
          </div>
          <div className="text-xs text-zinc-700 mt-8">
            <label>
              Extra Souce
              <input
                className="ml-2"
                type="checkbox"
                checked={souse}
                onChange={() => setsouse(!souse)}
              />
            </label>
          </div>
        </div>
        <div class="flex justify-center pb-16 md:pb-0  md:w-1/5">
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
        <span class="text-center w-1/5 font-semibold text-sm pb-16 md:pb-0">
          ₹{item.price}
        </span>
        <span class="text-center w-1/5 font-semibold text-sm pb-16 md:pb-0">
          ₹{souse ? totalprice + 5 : totalprice}
        </span>
      </div>
    </>
  );
};
export default Product;
