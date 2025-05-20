import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>You have no Account?<Link to={"/signup"} className=" text-blue-500 underline">SignUp</Link></p>
      </form>
    </div>
  );
};

export default Login;
