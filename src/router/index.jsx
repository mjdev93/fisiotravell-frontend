import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import NotFound from "../pages/notFound/NotFound.jsx";
//import Signup from "../pages/signUp/Signup";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
         /*,children: [
          {
            path: '/signup',
            element: <Signup />
          }
          {
            path: '/profile/:userId',
            element: <Profile />
          },
          {
            path: '/admin/:userId',
            element: <Admin />
          },
          {
            path: '/signup',
            element: < Signup />
          }
          
          {
            path: '/login',
            element: < Login />
          }
        ]
       */
    }])
    
export default router
