import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Layout from "./Layout.jsx";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "login",
                element: <Login/>,
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);