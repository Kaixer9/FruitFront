import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import "./Layout.css";
import Header from "../Components/Header/Header.jsx";
//import Footer from "../Components/Footer/Footer.jsx";


function Root() {
  return (
    <>
      <Link to='/Inicio'>
      <Header />
    </Link>
<Outlet  />

     {/*<Footer />*/}
    </>
  );
}

export default Root;