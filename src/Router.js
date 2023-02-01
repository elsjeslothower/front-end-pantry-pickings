import Welcome from "./pages/welcome";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

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
];