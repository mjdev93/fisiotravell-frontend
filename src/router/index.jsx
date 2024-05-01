import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
import { Login } from "../pages/logIn/Login.jsx";
import Signup from "../pages/signUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
    {
    path: "/signup",
    element: <Signup/>
  },
  /*{
            path: '/profile/:userId',
            element: <Profile />
          },
          {
            path: '/admin/:userId',
            element: <Admin />
          },
          */
]);

export default router;
