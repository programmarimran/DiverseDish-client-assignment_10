import React from "react";

const ExternalError = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover"
        src="https://i.ibb.co/23G6bHVL/racipe.jpg"
        alt="Background"
      />

      {/* Centered 404 Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="https://i.ibb.co/Z404s51/404-page-not-found.png"
          alt="404 Error"
          className="w-1/4 mx-auto rounded-full h-1/4"
        />
      </div>
    </div>
  );
};

export default ExternalError;
