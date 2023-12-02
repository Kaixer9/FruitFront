import React, { useState } from "react";
import "./Header.css";
import fresh from "../../assets/fresh.png";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



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
      <div className="header-buttons" style={{ display: "flex"}}>
        <Button onClick={() => navigate('/login')} sx={{display : localStorage.getItem("token") ? "none" : "block" }}>login</Button>
        <Button onClick={() => navigate('/logout')}  sx={{marginLeft: "auto", display : localStorage.getItem("token") ? "block" : "none" }}>logout</Button>
        <Button onClick={() => navigate('/registro')} sx={{ display : localStorage.getItem("token") ? "none" : "block" }}>Registrate!</Button>
      </div>
    </>
  ); 
};

export default Header;


