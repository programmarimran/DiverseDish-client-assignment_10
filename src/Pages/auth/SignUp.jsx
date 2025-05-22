import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    createUserWithGoogleLogin,
    setLoading,
  } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password, name, photo } = userData;
    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        result?.user && "";
        updateUserProfile(name, photo).then(() => {
          toast.success("User Sign Up Successfully!!");
          navigate("/");
          return;
        });
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleSignUp = () => {
    createUserWithGoogleLogin()
      .then((result) => {
        result?.user && toast.success("You Google Sign Up Successfully!!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleCreateUser} className="card-body">
        <h1 className="text-3xl text-center font-bold">SignUp now!</h1>
        <fieldset className=" fieldset">
          <button
            onClick={handleGoogleSignUp}
            type="button"
            className="btn bg-[#70e00020] mt-4"
          >
            {" "}
            <FcGoogle size={30} /> Sign Up with Google!!
          </button>
        </fieldset>
        <div className="flex my-5 items-center gap-2 w-full">
          <hr className="flex-grow border-2 border-gray-300 border-dashed" />
          <span className="text-gray-500 font-semibold">OR</span>
          <hr className="flex-grow border-2 border-gray-300 border-dashed" />
        </div>
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input bg-[#70e00020] w-full"
            name="name"
            placeholder="Enter Your Name"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input bg-[#70e00020] w-full"
            name="email"
            placeholder="Enter Your Email"
          />
          {/* Photo */}
          <label className="label">Photo_URL</label>
          <input
            type="text"
            className="input bg-[#70e00020] w-full"
            name="photo"
            placeholder="Enter Your Photo URL."
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input bg-[#70e00020] w-full"
            name="password"
            placeholder="Password"
          />
          <button className="btn bg-[#70e00099] mt-4">SignUp</button>
        </fieldset>
        <p className=" text-error my-3">{error}</p>
        <p>
          {" "}
          Already You have an Account?
          <Link to={"/login"} className=" text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
