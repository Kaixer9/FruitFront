import React, { useState } from "react";

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

export default NewRecipe;