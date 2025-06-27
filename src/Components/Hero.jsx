import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";

import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ recipes }) => {
  const navigate = useNavigate();

  const { user, setHeroEmail } = useContext(AuthContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!user?.email) {
      setHeroEmail(email);
      navigate("/login");
    } else {
      Swal.fire("You Already Success!!");
      navigate("/");
    }
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`)
  };

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {recipes.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full md:h-[400px] h-[500px] rounded-2xl overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${product?.image}")`,
              }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D8BFD8]/50 to-[#87CEFA]/50"></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full md:hero-content p-4 flex flex-col-reverse md:grid grid-cols-3 items-center text-white">
              {/* Text Section */}
              <div className="col-span-2 flex flex-col justify-center items-start px-4">
                <p className="text-sm italic text-white/80 dark:text-gray-300">
                  {product?.cuisineType} Cuisine
                </p>
                {/* Typewriter text */}
                <div className="App">
                  <h1
                    style={{
                      paddingTop: "5rem",
                      margin: "auto 0",
                      fontWeight: "normal",
                    }}
                    className="mb-2"
                  >
                    <span className="text-2xl md:text-4xl font-bold mt-2">
                      {product?.title}
                    </span>{" "}
                    <span
                      className="text-2xl md:text-4xl font-bold text-red-500 mt-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <Typewriter
                        words={[
                          "Delicious!",
                          "Spicy!",
                          "Popular!",
                          "Traditional!",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                      />
                    </span>
                  </h1>
                </div>

                <p className="text-md md:text-lg font-medium mt-2 mb-1 text-white dark:text-gray-200">
                  {product?.instructions}
                </p>
                <p className="text-sm text-white/80 mb-4 dark:text-gray-400">
                  ⏱ Ready in {product?.preparationTime} minutes
                </p>

                <form
                  onSubmit={handleSubscribe}
                  className="w-full md:flex gap-2"
                >
                  <input
                    className="w-full input border border-gray-300 text-black dark:text-gray-900 dark:bg-gray-100"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your Email here..."
                  />
                  <button className="btn hover:border-2 text-gray-800 bg-green-200 dark:bg-green-600 dark:text-white mx-auto flex justify-center mt-2 md:mt-0">
                    Subscribe Now!!
                  </button>
                </form>
              </div>

              {/* Image Section */}
              <div className="col-span-1 flex justify-center items-center">
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="rounded-lg shadow-2xl h-[250px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
