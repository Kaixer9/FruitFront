import "./Info.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import imagenFruta from "../../assets/frutastra.png";

import { getFruitsId } from "../../Services/FrutaService.js";
import { getRecipesId } from "../../Services/FrutaService.js";

const Info = () => {
  const { id } = useParams();
  const [fruta, setFruta] = useState({});
  const [recipe, setRecipe] = useState([]);

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
      setRecipe(data);
    } catch (error) {
      console.error("Error al obtener la fruta:", error.message);
    }
  };

  const recetasFiltradas = recetas.filter((receta) => {
    const { nombre, ingredientes, preparación } = receta;
    const filtroNombre = nombre
  const filtroIngredientes = ingredientes
  const filtroPreparacion = preparación
    return filtroNombre && filtroIngredientes && filtroPreparacion;
  });


  useEffect(() => {
    pullFruitsId();
    pullFruitRecipes();
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
            )
          }
        </ul>
      </div>
        <div>
          <h2>Recetas</h2>
          <ul>
            {recetasFiltradas.map((receta) => (
              <li key={receta}></li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default Info;
