import "./Info.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import imagenFruta from "../../assets/frutastra.png";

import NewRecipe from "../../Components/Receta/Receta.jsx";

import { getFruitsId } from "../../Services/FrutaService.js";
import { getRecipesId } from "../../Services/FrutaService.js";
import { getUserId } from "../../Services/FrutaService.js";
import { addRecipe } from "../../Services/FrutaService.js";

const Info = () => {
  const { id } = useParams();
  const [fruta, setFruta] = useState({});
  const [receta, setRecetas] = useState([]);
  const [user, setUser] = useState([]);

  const pullFruitsId = async () => {
    try {
      const data = await getFruitsId(id);
      setFruta(data);
    } catch (error) {
      console.error("Error al obtener la fruta:", error.message);
    }
  };

  const pullFruitRecipes = async () => {
    try {
      const data = await getRecipesId(id);
      setRecetas(data);
    } catch (error) {
      console.error("Error al obtener las recetas:", error.message);
    }
  };

  const pullUserId = async () => {
    try {
      const data = await getUserId(id);
      setUser(data);
    } catch (error) {
      console.error("Error al obtener usuario", error.message);
    }
  };

  const handleAddRecipe = async (newRecipeData) => {
    try {
      await addRecipe(id, newRecipeData);
      pullFruitRecipes();
    } catch (error) {
      console.error("Error al añadir la receta:", error.message);
    }
  };

  useEffect(() => {
    pullFruitsId();
    pullFruitRecipes();
    pullUserId();
  }, [id]);

  return (
    <div>
      <div className="valores">
        <ul id="info">
          <img id="multifrutas" src={imagenFruta} alt={"frutaIMG"} />
          {fruta && (
            <li id="cuadrovalores">
              <p>{fruta.nombre}</p>
              <p>{fruta.estación}</p>
              <p>{fruta.mes_inicio}</p>
              <p>{fruta.mes_fin}</p>
              <p>{fruta.calorías}</p>
              <p>{fruta.carbohidratos}</p>
              <p>{fruta.proteínas}</p>
              <p>{fruta.grasas}</p>
              <p>{fruta.vitaminas}</p>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h2>Recetas</h2>
        <NewRecipe onSubmit={handleAddRecipe} />
        <ul>
          {receta && (
            <li key={receta.id}>
              {user && (
                <div>
                  <p>{user.nick}</p>
                </div>
              )}
              <p>{receta.nombre}</p>
              <p>Ingredientes: {receta.ingredientes}</p>
              <p>Preparación: {receta.preparación}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Info;
