import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ProductDetails from "./pages/products/ProductDetails";
import UserContextProvider from "./context/UserContext";
import ProtectedRouter from "./ProtectedRouter";
import Checkout from "./pages/checkout/Checkout";


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
                path: "products/:id",
                element: <ProductDetails />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "cart",
                element:
                    <ProtectedRouter>
                        <Cart />
                    </ProtectedRouter>
            },
            {
                path: "checkout",
                element:
                    <ProtectedRouter>
                        <Checkout />
                    </ProtectedRouter>
            },
            {
                path: "login",
                element: <Login />
            },
        ]
    },
]);

export default router