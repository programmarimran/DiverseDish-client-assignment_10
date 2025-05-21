import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes/Router";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./providers/ProductProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);
