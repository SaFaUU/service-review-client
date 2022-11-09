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
import AddTour from "../../Pages/AddTour/AddTour";
import MyReviews from "../../Pages/MyReviews/MyReviews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/tours",
                element: <AllTours></AllTours>
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
                path: "/addtour",
                element: <AddTour></AddTour>
            },
            {
                path: "/myreviews",
                element: <MyReviews></MyReviews>
            },
        ]

    }
])