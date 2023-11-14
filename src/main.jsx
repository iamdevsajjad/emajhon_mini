import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import ManageInventory from "./pages/ManageInventory/ManageInventory.jsx";
import OrderReview from "./pages/OrderReview/OrderReview.jsx";
import Main from "./shared/main/Main.jsx";
import cartProductLoader from "./utilities/cardProductLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/orderReview",
        element: <OrderReview/>,
        loader: cartProductLoader
      },
      {
        path: "/manageInventory",
        element: <ManageInventory/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
