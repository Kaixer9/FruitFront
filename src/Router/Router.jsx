import { createBrowserRouter } from 'react-router-dom'
import Root from "../Layout/Layout.jsx";
import Inicio from "../Pages/Home/Home.jsx";
import Info from '../Pages/Info/Info.jsx';

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
        path: "/frutas",
        element: <Info />,
      },
      /*{
        path: "/user",
        element: <Profile />,
      },*/
      /*{
        path: "/recetas",
        element: <Recipes />,
      },*/
    ],
},
])

export default router