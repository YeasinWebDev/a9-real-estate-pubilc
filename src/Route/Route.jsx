import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import UpdatePro from "../pages/UpdatePro";
import UserPage from "../pages/UserPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Details from "../pages/Details";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdatePro /></PrivateRoute>
            },
            {
                path: '/user',
                element: <PrivateRoute><UserPage /></PrivateRoute>
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>
            },
            {
                path:"/contact",
                element:<ContactUs></ContactUs>
            }
        ]
    },
]);

export default router