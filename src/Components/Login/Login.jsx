import React, { useState } from 'react';
import api from '../../Services/Base';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = async () => {
    // Enviar solicitud al backend para iniciar sesión
    try {
      const response = await api.post('/auth/login', {
        email,
        contraseña,
      });

      
      onLogin(response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Contraseña: </label>
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;