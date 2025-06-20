import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import Index from "../pages/Index";

import GuestLayout from "../layouts/GuestLayout";
import DefaultLayout from '../layouts/DefaultLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to='/home'/>

            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <Signin/>
            }
        ]
    },
    {
        path: "/",
        Component: DefaultLayout,
        children: [
            {
                path:'/',
                element: <Navigate to="/dashboard"/>

            },
            {
                path: '/dashboard',
                element:<Dashboard/>,
            
            },
            {
                path: '/index',
                element: <Index/>
            }
        ]
    }
])

export default router