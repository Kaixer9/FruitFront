import React, { useState } from "react";
import "./Header.css";
import fresh from "../../assets/fresh.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  const navigate = useNavigate();
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
          
            <img id="fresh2" src={fresh} alt="Perfil" onClick={() => navigate("/profile")} />
          
        </div>
      </header>
      <div className="header-buttons" style={{ display: "flex" }}>
        <Button
          onClick={() => navigate("/login")}
          sx={{
            display: localStorage.getItem("token") ? "none" : "block",
            backgroundColor: "#2980b9",
            color: "white",
            "&:hover": {
              backgroundColor: "#3498db",
            },
          }}
        >
          login
        </Button>
        <Button
          onClick={() => navigate("/logout")}
          sx={{
            marginLeft: "auto",
            display: localStorage.getItem("token") ? "block" : "none",  backgroundColor: "#2980b9",
            color: "white",
            "&:hover": {
              backgroundColor: "#3498db",
            }, 
          }} 
        >
          logout
        </Button>
        <Button
          onClick={() => navigate("/registro")}
          sx={{ display: localStorage.getItem("token") ? "none" : "block" }}
        >
          Registrate!
        </Button>
      </div>
    </>
  );
};

export default Header;
