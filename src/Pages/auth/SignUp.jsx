import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const {createUser,updateUserProfile}=use(AuthContext)
  const navigate=useNavigate()
  const [error,setError]=useState("")
  const handleCreateUser=(e)=>{
    e.preventDefault()
    const form=e.target;
    const formData=new FormData(form)
    const userData=Object.fromEntries(formData.entries())
    const {email,password,name,photo}=userData
    console.log(name,photo,email,password)

    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      updateUserProfile(name,photo)
      .then(()=>{
        toast.success("User Sign In Successfully!!")
        navigate("/")
      })
    })
    .catch(error=>{
      setError(error.code)
    })

  }
  return (
    <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handleCreateUser} className="card-body">
        <h1 className="text-5xl text-center font-bold">SignUp now!</h1>
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full"
            name="name"
            placeholder="Enter Your Name"
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            name="email"
            placeholder="Enter Your Email"
          />
          {/* Photo */}
          <label className="label">Photo_URL</label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            placeholder="Enter Your Photo URL."
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4">SignUp</button>
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
