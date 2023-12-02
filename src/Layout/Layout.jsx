import { Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";


function Root() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default Root;
