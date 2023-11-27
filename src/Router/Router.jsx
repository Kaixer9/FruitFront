import { createBrowserRouter } from 'react-router-dom'
import Home from "../Pages/Home.jsx";
import Root from "../Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
},
])

export default router