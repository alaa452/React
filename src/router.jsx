import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "products",
            element: <Products />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "cart",
            element: <Cart />
        },
        {
            path: "login",
            element: <Login />
        },
    ]
  },
]);

export default router