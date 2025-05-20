import React from "react";
import { Outlet } from "react-router";


import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header className="bg-[#70e00080]">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <main className=" bg-[#70e00005]">
       <div className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
         <Outlet></Outlet>
       </div>
      </main>
      <footer className=" bg-[#70e00099]">
        <div className=" w-11/12 mx-auto">
          <Footer></Footer>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
