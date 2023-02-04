import { Navigate } from "react-router-dom";

import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import FullPantry from "./pages/FullPantry";
import RecipeCalculator from "./pages/calculator";
import SavedRecipes from "./pages/SavedRecipes";
import AddressBook from "./pages/AddressBook";
import Account from "./pages/account";
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
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <FullPantry />,
    path: "/full-pantry",
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