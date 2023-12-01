/*import React, { useState } from "react";

const NewRecipe = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparación, setPreparación] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, ingredientes, preparación });
    setNombre("");
    setIngredientes("");
    setPreparación("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        Ingredientes:
        <textarea
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
        />
      </label>
      <label>
        Preparación:
        <textarea
          value={preparación}
          onChange={(e) => setPreparación(e.target.value)}
        />
      </label>
      <button type="submit">Agregar Receta</button>
    </form>
  );
};

export default NewRecipe;*/

import React, { useState } from "react";
import { TextField, Button, Box, Typography } from '@mui/material';

const NewRecipe = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparacion, setPreparacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nombre, ingredientes, preparacion });
    setNombre("");
    setIngredientes("");
    setPreparacion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Agregar Receta</Typography>

      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <TextField
        label="Ingredientes"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={ingredientes}
        onChange={(e) => setIngredientes(e.target.value)}
      />

      <TextField
        label="Preparación"
        variant="outlined"
        fullWidth
        multiline
        rows={6}
        margin="normal"
        value={preparacion}
        onChange={(e) => setPreparacion(e.target.value)}
      />

      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Agregar Receta
        </Button>
      </Box>
    </form>
  );
};

export default NewRecipe;