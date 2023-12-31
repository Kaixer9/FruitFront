import React, { useState } from 'react';
import api from '../../Services/Base';
import { useNavigate } from "react-router-dom";

const Registro = ({ onRegistro }) => {
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async () => {
    try {
      const response = await api.post('/auth/signup', {
        nick,
        email,
        contraseña,
      });

     

      console.log(response.data)
      localStorage.setItem('token', response.data.token);
      navigate('/')
  return
    } catch (error) {
      console.error('Error al registrar:', error);
      
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <label>Nick: </label>
      <input type="text" value={nick} onChange={(e) => setNick(e.target.value)} />
      <br />
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Contraseña: </label>
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <br />
      <button onClick={handleRegistro}>Registrarse</button>
    </div>
  );
};

export default Registro;