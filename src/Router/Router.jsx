import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home/Home.jsx";
import Root from "../Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      /*{
        path: "/Perfil",
        element: <Profile />,
      },
      {
        path: "/Recetas",
        element: <Recipes />,
      },*/
    ],
},
])

export default router