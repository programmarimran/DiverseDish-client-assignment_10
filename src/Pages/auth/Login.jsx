import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const location=useLocation()
  console.log(location)
  const { loginUser,createUserWithGoogleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        result?.user && toast.success("You Login Successfully!!");
          navigate(location?.state||"/")
      })
      .catch((error) => {
        setError(error.code);
      });  
  };
  const handleGoogleLogin=()=>{
    createUserWithGoogleLogin()
    .then(result=>{
      result?.user&&toast.success("You Google Login Successfully!!")
      navigate(location?.state||"/")
    })
    .catch(error=>{
      console.log(error.code)
      setError(error.code)
    })
  }
  return (
    <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <fieldset className=" fieldset">
          <button onClick={handleGoogleLogin} type="button" className="btn bg-[#70e00020] mt-4">
            
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
            className="input bg-[#70e00020] w-full"
            name="email"
            placeholder="Email"
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input bg-[#70e00020] w-full"
            name="password"
            placeholder="Password"
          />
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
  );
};

export default Login;
