import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import ManageInventory from "./pages/ManageInventory/ManageInventory.jsx";
import OrderReview from "./pages/OrderReview/OrderReview.jsx";
import Main from "./shared/main/Main.jsx";

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
      },
      {
        path: "/manageInventory",
        element: <ManageInventory/>,
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
