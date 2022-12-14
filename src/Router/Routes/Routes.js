import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllTours from "../../Pages/AllTours/AllTours";
import AddTour from "../../Pages/AddService/AddService";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddService from "../../Pages/AddService/AddService";
import SingleService from "../../Pages/SingleService/SingleService";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://service-review-server-safauu.vercel.app/")
            },
            {
                path: "/services",
                element: <AllTours></AllTours>,
                loader: () => fetch("https://service-review-server-safauu.vercel.app/alltours")
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/myreviews/:userid",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: "/services/:id",
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`https://service-review-server-safauu.vercel.app/services/${params.id}`)
            },
        ]

    }
])