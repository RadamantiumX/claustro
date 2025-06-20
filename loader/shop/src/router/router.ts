import { createBrowserRouter, Navigate } from "react-router";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";

import GuestLayout from "../layouts/GuestLayout";
import DefaultLayout from "../layouts/DefaultLayout";

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
    },
    {
        path: "/",
        Component: DefaultLayout,
        children: [
            {
                path: '/',
                Component: Dashboard,
            
            },
            {
                path: '/index',
                Component: Index
            }
        ]
    }
])

export default router