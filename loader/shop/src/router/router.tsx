import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "../pages/guest/Home";
import Signin from "../pages/guest/Signin";
import Dashboard from "../pages/default/Dashboard";
import Index from "../pages/default/Index";

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