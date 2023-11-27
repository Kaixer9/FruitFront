import React, { useState } from 'react';

const SearchBox = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleChange = (event) => {
    setTerminoBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar el término de búsqueda a la función del componente padre
    onBuscar(terminoBusqueda);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar verduras..."
        value={terminoBusqueda}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBox;