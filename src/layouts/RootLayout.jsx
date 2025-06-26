import React from "react";
import { Outlet } from "react-router";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <header className="border-b-2 border-gray-200 dark:border-[#00000080] bg-blue-600 dark:bg-blue-900 sticky top-0 z-50 shadow-md hover:border-b-green-500">
        <div className="text-white w-11/12 mx-auto">
          <Navbar />
        </div>
      </header>

      <main className="bg-green-100 dark:bg-green-950">
        <section className="max-w-7xl mx-auto">
          <div className="w-11/12 mx-auto min-h-[calc(100vh-429px)]">
            <Outlet />
          </div>
        </section>
      </main>

      <footer className="bg-green-300 dark:bg-slate-900">
        <div className="w-11/12 mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
