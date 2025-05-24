import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    createUserWithGoogleLogin,
    setLoading,
  } = use(AuthContext);
  const navigate = useNavigate();
  const [show,setShow]=useState(true)
  const [error, setError] = useState("");
  const [passwordError,setPasswordError]=useState("")
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    const { email, password, name, photo } = userData;
    // console.log(name, photo, email, password);
   //  Password authentication start with regular expression
    const uppercaseRegex = /^(?=.*[A-Z]).{1,}$/;
    const lowercaseRegex = /^(?=.*[a-z]).{1,}$/;
    const passwordLength = /^.{6,}$/;
    if (!uppercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Upercase");
      setError("");
      return;
    } else if (!lowercaseRegex.test(password)) {
      setPasswordError("Please minimum 1 character Lowercase");
      setError("");
      return;
    } else if (!passwordLength.test(password)) {
      setPasswordError("Please Your password minimum 6 character");
      setError("");
      return;
    } else {
      setPasswordError("");
    }
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
        // console.log(error.code);
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
  <div className="py-12">
    <Helmet><title>DiverseDish || SignUp page</title></Helmet>
      <div className="card mx-auto bg-base-100 border border-gray-200  w-full  shrink-0 shadow-2xl">
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
            required
            className="input bg-[#70e00020] w-full"
            name="name"
            placeholder="Enter Your Name"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            required
            className="input bg-[#70e00020] w-full"
            name="email"
            placeholder="Enter Your Email"
          />
          {/* Photo */}
          <label className="label">Photo_URL</label>
          <input
            type="text"
            required
            className="input bg-[#70e00020] w-full"
            name="photo"
            placeholder="Enter Your Photo URL."
          />
          {/* password */}
          <label className="label">Password</label>
            <div className=" flex relative">
              <input
                type={show ? "password" : "text"}
                name="password"
                className="input w-full"
                placeholder="Password" 
                required
              />
              <button
                onClick={() => setShow(!show)}
                type="button"
                className=" absolute top-[16%] right-5"
              >
                {show ? (
                  <MdOutlineRemoveRedEye size={30} />
                ) : (
                  <IoMdEyeOff size={30} />
                )}
              </button>
            </div>
          <p className=" text-error my-3 text-sm">{passwordError}</p>
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
  </div>
  );
};

export default SignUp;
