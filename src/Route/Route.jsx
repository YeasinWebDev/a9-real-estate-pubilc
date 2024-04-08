import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../components/Root";
import UpdatePro from "../pages/UpdatePro";
import UserPage from "../pages/UserPage";
import Signin from "../pages/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path:'/update',
                element:<UpdatePro/>
            },
            {
                path:'/user',
                element:<UserPage/>
            },
            {
                path: "/signin",
                element: <Signin/>
            }
        ]
    },
]);

export default router