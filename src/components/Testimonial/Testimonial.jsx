import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Abhishek Sharma",
    text: "Absolutely loved the parathas here! They're always fresh, hot, and bursting with flavor.The variety of fillings is impressive, and each one is as delicious as the next. The service is also fantastic,",
    img: "https://media.licdn.com/dms/image/D4D03AQGW2Nuk26Ot5A/profile-displayphoto-shrink_200_200/0/1703939107791?e=2147483647&v=beta&t=MS2E3ZeWx7XRSkr-f6DEcefMa_LdgFQM4nDTkAwHFTI",
  },
  {
    id: 1,
    name: "Ankit Chouhan",
    text: "I can not get enough of the parathas from this store! They are consistently delicious, and you can tell they are made with high-quality ingredients.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQEtA6SvVsE3COLWRMShp-2EKG49MP_u-UQ&s",
  },
  {
    id: 1,
    name: "Akshay Nagdiya",
    text: "As an avid paratha enthusiast, I have to say that this store exceeds all expectations! The parathas are crispy on the outside and soft on the inside, with a perfect balance of spices in every bite. ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRPggC_D-yB7-wxrRMNRAnPJPBLIJ-MxheQ&s",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
