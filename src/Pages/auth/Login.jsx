import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {loginUser}=use(AuthContext)
  const navigate=useNavigate();
  const [error,setError]=useState("")
  const handleLogin=(e)=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    loginUser(email,password)
    .then(result=>{
      result?.user&&toast.success("You Login Successfully!!")
      navigate("/")
    })
    .catch(error=>{
      setError(error.code)
    })

  }
  return (
    <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
        <fieldset className="fieldset">
          {/* eamil */}
          <label className="label">Email</label>
          <input type="email" className="input w-full" name="email" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input w-full" name="password" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className=" text-error my-3">{error}</p>
        <p>You have no Account?<Link to={"/signup"} className=" text-blue-500 underline">SignUp</Link></p>
      </form>
    </div>
  );
};

export default Login;
