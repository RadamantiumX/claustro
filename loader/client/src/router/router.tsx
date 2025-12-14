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
import Record from "../pages/default/index/Record";
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
                element: <Navigate to="/dashboard"/>
            },
            {
                path: '/dashboard',
                element:<Dashboard/>,
            },
            {
                path: '/index',
                element:<Index/>
            },
            {
                path:"/index/record",
                element:<Record/>
            },
            {
                path:'/add',
                element: <Add/>
            },
            {
                path:'/settings/:username',
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