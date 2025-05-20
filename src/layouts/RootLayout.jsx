import React from "react";
import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header className="bg-base-300">
        <div className=" w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>
      <main className=" w-11/12 mx-auto min-h-[calc(100vh-429px)]">
        <Outlet></Outlet>
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
