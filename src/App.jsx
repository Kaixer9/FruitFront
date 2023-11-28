//import {RouterProvider} from 'react-router-dom'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import router from './Router/Router.jsx'
import "./App.css";

import Inicio from "./Pages/Home/Home.jsx";
import Info from "./Pages/Info/Info.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/info/:id" element={<Info />} />
    </Routes>
  </Router>
);

export default App;

/*return ({
  <>
  <RouterProvider router={router} /> 
</>*/
