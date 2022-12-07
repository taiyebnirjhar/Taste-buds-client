import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddServices from "./AddServices/AddServices";
import Blog from "./Blog/Blog";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MenuDetails from "./MenuDetails/MenuDetails";
import MyReviews from "./MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menuDetails/:id",
        element: <MenuDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/services",
        element: (
          <>
            <PrivateRoute>
              <AddServices />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <>
            <PrivateRoute>
              <MyReviews />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
