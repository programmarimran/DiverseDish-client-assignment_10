import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";
import ProductContext from "../contexts/ProductContext";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Hero = () => {
  const navigate = useNavigate();
  const { recipes } = use(ProductContext);
  const { user, setHeroEmail } = use(AuthContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    if (!user?.email) {
      setHeroEmail(email);
      navigate("/login");
    } else {
      Swal.fire("You Already Success!!");
      navigate("/");
    }
  };

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {recipes.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full md:h-[400px] h-[500px] rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("${product?.image}")`,
              }}
            ></div>

            {/* gradient  */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D8BFD8]/50 to-[#87CEFA]/50"></div>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full text-white md:hero-content p-4 flex flex-col-reverse md:grid grid-cols-3 items-center">
              {/* Text Section */}
              <div className="col-span-2 flex flex-col justify-center items-start px-4">
                <p className="text-sm italic">{product?.cuisineType} Cuisine</p>
                <h1 className="text-2xl md:text-4xl font-bold mt-2">
                  {product?.title}
                </h1>
                <p className="text-md md:text-lg font-medium mt-2 mb-1">
                  {product?.instructions}
                </p>
                <p className="text-sm text-white/80 mb-4">
                  ⏱ Ready in {product?.preparationTime} minutes
                </p>

                <form
                  onSubmit={handleSubscribe}
                  className="w-full md:flex gap-2"
                >
                  <input
                    className="w-full input border-gray-300 text-black"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your Email here..."
                  />
                  <button className=" btn hover:border-2 text-gray-800 bg-green-200 mx-auto flex justify-center">
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
