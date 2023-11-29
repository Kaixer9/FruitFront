import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    setShoppingList((prevList) => [...prevList, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <h1>Mi Perfil</h1>
      
      {/*<img src={UserProfileImage} alt="Perfil" />*/}
      <p>Nick del Usuario</p>

      {/* Formulario para la lista de compras */}
      <form>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="button" onClick={handleAddItem}>
          Agregar a la Lista de Compra
        </button>
      </form>

      {/* lista de compra */}
      <h2>Mi Lista de Compra</h2>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      
      <h2>Mis Recetas Guardadas</h2>
      {/* las recetas que el usuario ha guardado */}
    </div>
  );
};

export default Profile;