import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const ExternalError = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Helmet><title> DiverseDish ||Error Page</title></Helmet>
      {/* Background Image */}
      <img
        className="w-full opacity-40 h-full object-cover"
        src="https://i.ibb.co/23G6bHVL/racipe.jpg"
        alt="Background"
      />

      {/* Automatically opened modal */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        defaultChecked // ✅ Modal will be open by default
      />
      <div
        className="absolute modal inset-0 flex items-center justify-center"
        role="dialog"
      >
        <div className="">
          <div>
            <img
              src="https://i.ibb.co/Z404s51/404-page-not-found.png"
              alt="404 Error"
              className="w-2/4 mx-auto rounded-full h-full"
            />
          </div>
          <Link className=" mx-auto flex justify-center items-center" to={"/"}>
            <button className="btn btn-secondary bg-[#007200] border-none mt-4">Back to home</button>
          </Link>
        </div>
      
      </div>
    </div>
  );
};

export default ExternalError;
