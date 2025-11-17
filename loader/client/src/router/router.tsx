import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/guest/Home";
import Signin from "../pages/guest/Signin";
import Dashboard from "../pages/default/Dashboard";
import Index from "../pages/default/Index";
import GuestLayout from "../layouts/GuestLayout";
import DefaultLayout from '../layouts/DefaultLayout';
import Add from "../pages/default/Add";
import UserSettings from "../pages/default/user/UserSettings";
import Search from "../pages/default/Search";
/**
 * 
 */
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
                element: <Navigate to="/index"/>

            },
            {
                path: '/dashboard',
                element:<Dashboard/>,
            
            },
            {
                path: '/index',
                element: <Index/>
            },
            {
                path:'/add',
                element: <Add/>
            },
            {
                path:'/settings',
                element: <UserSettings/>
            },
            {
                path:'/search',
                element:<Search/>
            }
        ]
    }
])

export default router