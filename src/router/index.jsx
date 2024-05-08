import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import Login from "../pages/logIn/Login.jsx";
import SignUp from "../pages/Register/SignUp.jsx";
import Admin from "../pages/admin/Admin.jsx";
<<<<<<< HEAD
import UserProfile from "../components/userProfile/UserProfile.jsx";
import CreateUser from "../components/adminPage/createUser/CreateUser.jsx";
=======
import Profile from "../pages/profile/Profile.jsx";


>>>>>>> 1b21ee99377c3df42a57bde76034cce74fa13cdd

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
    path: "/create",
    element: <CreateUser />,
  },
  {
    path: "/profile/",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;
