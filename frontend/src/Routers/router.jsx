import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import ShopSidebar from "../Page/ShopPage/ShopSidebar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/beverages',
                element: <h2>Beverages</h2>
            },
            {
                path: '/shopPage',
                element: <ShopSidebar></ShopSidebar>
            },
            {
                path: '*',
                element: <h2>404 | Page Not Found</h2>
            }
        ]
    },
]);