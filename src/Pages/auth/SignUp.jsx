import React from 'react';

const SignUp = () => {
    return (
          <div className="card mx-auto bg-base-100 border border-gray-200 my-12 w-full  shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className="text-5xl text-center font-bold">SignUp now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">SignUp</button>
        </fieldset>
        <p> Already You have an Account?<Link to={"/login"} className=" text-blue-500 underline">Login</Link></p>
      </form>
    </div>
    );
};

export default SignUp;