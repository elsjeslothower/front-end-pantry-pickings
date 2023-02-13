import { Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import Pantry from "./pages/Pantry";
import RecipeCalculator from "./pages/Calculator";
import SavedRecipes from "./pages/SavedRecipes";
import AddressBook from "./pages/AddressBook";
import Account from "./pages/Account";
import FourOhFour from "./pages/404";

export const routes = [
  {
    element: <Welcome />,
    path: "/",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register",
  },
  {
    element: <Reset />,
    path: "/reset",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <Pantry />,
    path: "/pantry",
  },
  {
    element: <RecipeCalculator />,
    path: "/calculator",
  },
  {
    element: <SavedRecipes />,
    path: "/saved-recipes",
  },
  {
    element: <AddressBook />,
    path: "/address-book"
  },
  {
    element: <Account />,
    path: "/account",
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