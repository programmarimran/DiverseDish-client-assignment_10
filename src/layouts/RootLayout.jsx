import React from "react";
import { Outlet } from "react-router";


import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className=" border-b-2 border-[#00000050] bg-base-300 hover:border-b-green-500 border-b-gray-200 sticky top-0 z-50 shadow-md">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
       
      </header>
      <main className=" bg-[#70e00010]">
       <div className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
         <Outlet></Outlet>
       </div>
      </main>

      {/* bg-[#70e00099] */}
      <footer className=" bg-green-200">
        <div className=" w-11/12 mx-auto">
          <Footer></Footer>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
