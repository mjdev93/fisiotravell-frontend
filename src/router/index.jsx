import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        //errorElement: <NotFound />,
 /*        children: [
          {
            path: '/',
            element: <Home />
          },
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
