import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import FilterProductPage from "../Page/ShopPage/FilterProductPage";

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
                path: 'filterPage',
                element: <FilterProductPage></FilterProductPage>
            },
            {
                path: '*',
                element: <h2>404 | Page Not Found</h2>
            }
        ]
    },
]);