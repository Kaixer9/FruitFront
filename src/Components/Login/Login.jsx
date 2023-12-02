import React, { useState } from 'react';
import api from '../../Services/Base';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, TextField, Button, Box } from "@mui/material";



const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Enviar solicitud al backend para iniciar sesión
    try {
      const response = await api.post('/auth/login', {
        email,
        contraseña,
      });

      
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/')
      return
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "16px", maxWidth: "300px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          margin="normal"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
