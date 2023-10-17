import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/Home";
import LogIn from "../pages/Login/LogIn";
import Register from "../pages/Register/Register";
import Users from "../components/Users";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<HomePage></HomePage>,
                loader: () => fetch('https://online-coffee-store-server-qkjbw3zjx-jinkalas-projects.vercel.app/coffee')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader:({params})=>fetch(`https://online-coffee-store-server-qkjbw3zjx-jinkalas-projects.vercel.app/coffee/${params.id}`)
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<Register></Register>
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('https://online-coffee-store-server-qkjbw3zjx-jinkalas-projects.vercel.app/user')
            }
        ]
    }
]);

export default Router;