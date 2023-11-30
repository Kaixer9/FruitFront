import React, { useState } from "react";
import "./Header.css";
import fresh from "../../assets/fresh.png";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';




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


/*const Header = () => {
  return (
    <>
    <header className="header-container">
    <div id="centrado"> 
      <div className="header-left">
        <Link to="/">
          <img id="fresh" src={fresh} alt={"frutaIMG"} />
          <div id="home">Home</div>
        </Link>
      </div>
      <div className="header-right">
        <h1 id="title">VerFrutas</h1>
        </div>
        <Link to="/user/profile">
        <img id="fresh2" src={fresh} alt="Perfil" />
      </Link>
      </div>
    </header>
    <div className="header-buttons">
    {!isAuthenticated &&<Button path="/login" text="Login" />}
    <Button path="/logout" text="Logout" /> 
    <Button path="/registro" text="Regístrate!" />
      </div>
      </>
  );
};

export default Header;*/



const Header = () => {

  const navigate = useNavigate()
  return (
    <>
      <header className="header-container">
        <div id="centrado">
          <div className="header-left">
            <Link to="/">
              <img id="fresh" src={fresh} alt={"frutaIMG"} />
              <div id="home">Inicio</div>
            </Link>
          </div>
          <div className="header-right">
            <h1 id="title">VerFrutas</h1>
          </div>
          <Link to="/user/profile">
            <img id="fresh2" src={fresh} alt="Perfil" />
          </Link>
        </div>
      </header>
      <div className="header-buttons">
        <Button onClick={() => navigate('/login')} sx={{display : localStorage.getItem("token") ? "none" : "block" }}>login</Button>
        <Button onClick={() => navigate('/logout')} sx={{display : localStorage.getItem("token") ? "block" : "none" }}>logout</Button>
        <Button onClick={() => navigate('/registro')} sx={{display : localStorage.getItem("token") ? "none" : "block" }}>Registrate!</Button>
      </div>
    </>
  ); 
};

export default Header;


