import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Layout.jsx";
import Inicio from "../Pages/Home/Home.jsx";
import Info from "../Pages/Info/Info.jsx";
import Registro from "../Components/Registro/Registro.jsx";
import Login from "../Components/Login/Login.jsx";

import Logout from '../Components/Logout/Logout.jsx';
import Profile from "../Pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/frutas/:id",
        element: <Info />,
      },
      {
        path: "/Registro",
        element: <Registro />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      { path: "/Logout", 
      element: <Logout />,
    },
      {
        path: "/profile",
        element: <Profile />,
      },
      /*{
        path: "/user/:userId", 
        element: <UserProfile />,
      },*/
    ],
  },
]);

export default router;
