import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const location = useLocation();
  // console.log(location)
  const { loginUser, createUserWithGoogleLogin, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
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
    loginUser(email, password)
      .then((result) => {
        result?.user && toast.success("You Login Successfully!!");
        navigate(location?.state || "/");
        return;
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    createUserWithGoogleLogin()
      .then((result) => {
        result?.user && toast.success("You Google Login Successfully!!");
        navigate(location?.state || "/");
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
   <div className=" py-12">
     <div className="card mx-auto  border border-gray-200  w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <fieldset className=" fieldset">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn bg-[#70e00020] mt-4"
          >
            <FcGoogle size={30} /> Log In with Google!!
          </button>
        </fieldset>
        <div className="flex my-5 items-center gap-2 w-full">
          <hr className="flex-grow border-2 border-gray-300 border-dashed" />
          <span className="text-gray-500 font-semibold">OR</span>
          <hr className="flex-grow border-2 border-gray-300 border-dashed" />
        </div>
        <fieldset className="fieldset">
          {/* eamil */}
          <label className="label">Email</label>
          <input
            type="email"
            required
            className="input bg-[#70e00020] w-full"
            name="email"
            placeholder="Email"
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
          <p className=" text-error my-3 ">{passwordError}</p>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#70e00099] mt-4">Login</button>
        </fieldset>
        <p className=" text-error my-3">{error}</p>
        <p>
          You have no Account?
          <Link to={"/signup"} className=" text-blue-500 underline">
            SignUp
          </Link>
        </p>
      </form>
    </div>
   </div>
  );
};

export default Login;
