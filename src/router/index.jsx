import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import Login from "../pages/logIn/Login.jsx";
import SignUp from "../pages/Register/SignUp.jsx";
import Admin from "../pages/admin/Admin.jsx";
import UserProfile from "../components/userProfile/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin/",
    element: <Admin />,
  },
  {
    path: "/profile/",
    element: <UserProfile />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;
