import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import OwnedHouse from "../pages/Dashboard/OwnedHouse";
import BookHouse from "../pages/Dashboard/BookHouse";
import AddAHouse from "../pages/Dashboard/AddAHouse";
import { Route, Routes } from "react-router-dom";
import HouseAndBookings from "../pages/Dashboard/HouseAndBookings";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'bookings',
                element: <BookHouse></BookHouse>
            },
            {
                path: 'addHouse',
                element: <AddAHouse></AddAHouse>
            },
            {
                path: 'ownerHouse',
                element: <OwnedHouse></OwnedHouse>
            },
            {
                path: 'bookHouse',
                element: <HouseAndBookings></HouseAndBookings>
            },
        ]
    },
    
]);