import { createBrowserRouter, } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<HomePage></HomePage>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
]);

export default Router;