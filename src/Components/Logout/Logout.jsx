import React, { useState } from "react";
import api from "../../Services/Base";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await api.post("/auth/logout");

      localStorage.removeItem("token", response.data.token);

      

      navigate("/");
    } catch (error) {
      console.error("Error de logout:", error);
    }
  };

  return (
    <>
      <h2>Adiós</h2>
      <span>VUELVE PRONTO</span>
      <div></div>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </>
  );
};
export default Logout;
