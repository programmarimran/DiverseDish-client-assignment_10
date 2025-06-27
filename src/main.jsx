import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes/Router";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import ProductProvider from "./providers/ProductProvider";
import { HelmetProvider } from "react-helmet-async";

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Aos from "aos";
// ..
Aos.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <HelmetProvider>
<AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
    </HelmetProvider>
    
  </StrictMode>
);
