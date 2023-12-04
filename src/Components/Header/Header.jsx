import React, { useState, useEffect } from "react";
import VF from "../../assets/VF.png";
import pd from "../../assets/pd.png"
import "./Header.css";
import fresh from "../../assets/fresh.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
//import AppBar from "@mui/material/AppBar";
//import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import avataUrl from "../../Pages/Profile/Profile"

const Header = () => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleLogout = () => {
    
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      navigate("/");
    
  };

  useEffect(() => {
    const storedAvatarUrl = localStorage.getItem('avatarUrl');
    if (storedAvatarUrl) {
      setAvatarUrl(storedAvatarUrl);
    }
  }, []);

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
          <img
        id="VF"
        src={VF}
        alt="ttitular"
        style={{
          width: '450px', 
          height: '120px', 
          
        }}/>
          </div>

          <div >
          <Link to="/profile">
          <img
        id="fresh2"
        src={avatarUrl || pd}
        alt="Perfil"
        style={{
          width: '100px', 
          height: '100px', 
          borderRadius: '100%', 
          overflow: 'hidden',
          border: '2px solid #fff', 
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', 
      cursor: 'pointer',
        }}/>
        
        </Link></div>
      
          
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
          onClick={() => handleLogout()}
          sx={{
            marginLeft: "auto", marginBottom: "10px",
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
