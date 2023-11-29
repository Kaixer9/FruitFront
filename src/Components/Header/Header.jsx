import React from "react";
import "./Header.css";
import fresh from "../../assets/fresh.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

/*const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img id="fresh" src={fresh} alt={"frutaIMG"} />
        </Link>
        <h1 id="title">Verduras y Frutas de Temporada</h1>
      </header>
      <div id="buttonlog">
        <Button path="/login" text="Login" />
        <Button path="/registro" text="Registrate!" />
      </div>
    </>
  );
};*/

const Header = () => {
  return (
    <>
    <header className="header-container">
      <div className="header-left">
        <Link to="/">
          <img id="fresh" src={fresh} alt={"frutaIMG"} />
        </Link>
      </div>
      <div className="header-right">
        <h1 id="title">Verduras y Frutas de Temporada</h1>
        </div>
    </header>
     <div className="header-buttons">
          <Button path="/login" text="Login" />
          <Button path="/registro" text="Regístrate!" />
      </div>
      </>
  );
};

export default Header;
