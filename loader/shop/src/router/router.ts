import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Signin from "../pages/Signin";

import GuestLayout from "../layouts/GuestLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: GuestLayout,
        children:[
            {
                path: '/',
                Component: Home
            },
            {
                path: '/signin',
                Component: Signin
            }
        ]
    }
])

export default router