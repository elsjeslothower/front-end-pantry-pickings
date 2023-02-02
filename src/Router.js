import { Navigate } from "react-router-dom";

import Welcome from "./pages/welcome";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import FourOhFour from "./pages/404";
import AddressBook from "./pages/AddressBook";

export const routes = [
  {
    element: <Welcome />,
    path: "/",
  },
  {
    element: <SignUp />,
    path: "/signup",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <AddressBook />,
    path: "/address-book"
  },
  {
    element: <FourOhFour />,
    path: "/404",
  },
  {
    element: <Navigate to="/404" replace />,
    path: "*",
  },
];