import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Features/cart/Cart";
import toast, { Toaster } from "react-hot-toast";
import { Puff } from "react-loader-spinner";
import { FaCartShopping } from "react-icons/fa6";
// const ServicesData = [
//   {
//     id: 1,
//     img: Img2,
//     name: "Biryani",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "Chiken kari",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//   },
//   {
//     id: 3,
//     img: Img2,
//     name: "Cold Cofee",
//     description:
//       "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
//   },
// ];

const Services = () => {
  const { product, isloading } = useSelector((state) => state.products);
  const [categories, setcategories] = useState([]);
  const [data, setdata] = useState(product);
  const dispatch = useDispatch();
  const notify = (name) => toast.success(`Added ${name}`);
  const handleAdd = (item) => {
    dispatch(add(item));
    notify(item.name);
  };
  const getUniqparatha = () => {
    const uniqueParatha = [...new Set(product.map((food) => food.category))];
    console.log(uniqueParatha);
    setcategories(uniqueParatha);
  };
  useEffect(() => {
    getUniqparatha();
    setdata(product);
  }, [product]);

  const handleFilter = (cat) => {
    const newItems = product.filter((newVal) => newVal.category === cat);
    setdata(newItems);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-bold">
              Our Services
            </p>
            <p className="text-xs text-gray-400 my-4 mx-16">
              We are Providing Many Types of parathas and also give home
              delhivery service
            </p>
            <div className="flex justify-center my-5">
              {categories.map((fooddata, index) => {
                return (
                  <button
                    className="bg-primary hover:bg-secondary text-white font-bold py-1 px-3 rounded-full"
                    onClick={() => handleFilter(fooddata)}
                    key={index}>
                    {fooddata}
                  </button>
                );
              })}
            </div>
          </div>
          {isloading ? (
            <>
              <div className="flex justify-center">
                <Puff
                  visible={true}
                  height="100"
                  width="100"
                  color="#FEBF01"
                  ariaLabel="puff-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {data ? (
                <>
                  {data.map((item) => (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="300"
                      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[350px] mb-20">
                      <div className="h-[100px]">
                        <img
                          className="max-w-[200px] h-[140px] mx-20 transform -translate-y-14
      group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-3xl"
                          src={item.img}
                          alt=""
                        />
                      </div>
                      <div className="p-4 text-center">
                        <div className="w-full ">
                          <StarRatings
                            rating={4}
                            starRatedColor="yellow"
                            isSelectable={false}
                            starHoverColor="yellow"
                            starDimension="20px"
                            changeRating={() => {}}
                            numberOfStars={5}
                            name="rating"
                          />
                        </div>
                        <h1 className="text-xl font-bold">
                          {item.name}
                          <span className="flex justify-center flex-initial w-100">
                            {" "}
                            <h1 class=" text-1xl font-sans antialiased font-medium leading-relaxed text-blue-gray-900">
                              {item.price}₹
                            </h1>
                            <button
                              className="h-7 mx-2  mt-1"
                              onClick={() => handleAdd(item)}>
                              <FaCartShopping />
                            </button>
                          </span>
                        </h1>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {data.map((item) => (
                    <div
                      data-aos="zoom-in"
                      data-aos-duration="300"
                      className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[350px] mb-20">
                      <div className="h-[100px]">
                        <img
                          src={item.img}
                          alt=""
                          className="max-w-[200px] h-[140px] mx-20 transform -translate-y-14
      group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-3xl"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <div className="w-full ">
                          <StarRatings
                            rating={4}
                            starRatedColor="yellow"
                            isSelectable={false}
                            starHoverColor="yellow"
                            // starSelectingHoverColor
                            starDimension="20px"
                            changeRating={() => {}}
                            numberOfStars={5}
                            name="rating"
                          />
                        </div>
                        <h1 className="text-xl font-bold">
                          {item.name}
                          <span className="flex justify-center flex-initial w-100">
                            {" "}
                            <h1 class=" text-1xl font-sans antialiased font-medium leading-relaxed text-blue-gray-900">
                              {item.price}₹
                            </h1>
                            <button
                              className=" text-sm "
                              onClick={() => handleAdd(item)}>
                              Add cart
                            </button>
                          </span>
                        </h1>
                        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
