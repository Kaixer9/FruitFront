import "./Info.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  Avatar,
} from "@mui/material";

import { useParams } from "react-router-dom";
import imagenFruta from "../../assets/frutastra.png";
import imagenVerdura from "../../assets/tomate.png";

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

  //https://mui.com/joy-ui/react-button/#icon-button icon favoritos en las recetas, mandar al perfil las fav

  //que las recetas tengan un slider de horno

  //https://mui.com/joy-ui/react-button/#icon-button para las recetas, que se guarden en la fruta

  //poner las frutas que están de temporada que salgan con un icono

  //que se vea el avatar del usuario en fresh2 https://mui.com/joy-ui/react-avatar/

  return (
    <div>
      <div className="valores">
        <TableContainer
          component={Paper}
          style={{
            border: "2px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Table style={{ color: "#ffffff", borderCollapse: "collapse" }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  Estación
                </TableCell>
                <TableCell>Inicio de temporada</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  Fin de temporada
                </TableCell>
                <TableCell>Calorías</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  Carbohidratos
                </TableCell>
                <TableCell>Proteínas</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  Grasas
                </TableCell>
                <TableCell>Vitaminas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Avatar
                    alt={`Imagen de ${fruta.nombre}`}
                    src={fruta.grupo === "frutas" ? imagenFruta : imagenVerdura}
                    sx={{ width: 80, height: 80 }}
                  />
                </TableCell>
                <TableCell>{fruta.nombre}</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  {fruta.estación}
                </TableCell>
                <TableCell>{fruta.mes_inicio}</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  {fruta.mes_fin}
                </TableCell>
                <TableCell>{fruta.calorías}</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  {fruta.carbohidratos}
                </TableCell>
                <TableCell>{fruta.proteínas}</TableCell>
                <TableCell
                  style={{
                    border: "1px solid #e0e0e0",
                    padding: "8px",
                    backgroundColor: "#ffebee",
                  }}
                >
                  {fruta.grasas}
                </TableCell>
                <TableCell>{fruta.vitaminas}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <h2>Recetas</h2>
        <NewRecipe onSubmit={handleAddRecipe} />

    <Paper elevation={3} style={{ maxHeight: "300px", overflowY: "auto" }}>
      <List>
        {receta &&( 
          <ListItem key={receta.id}>
            {user && (
              <div>
                <Typography variant="subtitle1">{user.nick}</Typography>
              </div>
            )}
            <ListItemText
              primary={receta.nombre}
              secondary={
                <>
                  <Typography variant="body2" color="textSecondary">
                    Ingredientes: {receta.ingredientes}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Preparación: {receta.preparacion}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  
      </div>
    </div>
  );
};

export default Info;

/*return (
  <div>
    <div className="valores">
      <TableContainer
        component={Paper}
        style={{
          border: "2px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table style={{ color: "#ffffff", borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                Estación
              </TableCell>
              <TableCell>Inicio de temporada</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                Fin de temporada
              </TableCell>
              <TableCell>Calorías</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                Carbohidratos
              </TableCell>
              <TableCell>Proteínas</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                Grasas
              </TableCell>
              <TableCell>Vitaminas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar
                  alt={`Imagen de ${fruta.nombre}`}
                  src={fruta.grupo === "frutas" ? imagenFruta : imagenVerdura}
                  sx={{ width: 80, height: 80 }}
                />
              </TableCell>
              <TableCell>{fruta.nombre}</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                {fruta.estación}
              </TableCell>
              <TableCell>{fruta.mes_inicio}</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                {fruta.mes_fin}
              </TableCell>
              <TableCell>{fruta.calorías}</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                {fruta.carbohidratos}
              </TableCell>
              <TableCell>{fruta.proteínas}</TableCell>
              <TableCell
                style={{
                  border: "1px solid #e0e0e0",
                  padding: "8px",
                  backgroundColor: "#ffebee",
                }}
              >
                {fruta.grasas}
              </TableCell>
              <TableCell>{fruta.vitaminas}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <div>
      <h2>Recetas</h2>
      <NewRecipe onSubmit={handleAddRecipe} />

      <Paper elevation={3} style={{ maxHeight: "300px", overflowY: "auto" }}>
        <List>
          {receta && (
            <ListItem key={receta.id}>
              {user && (
                <div>
                  <Typography variant="subtitle1">{user.nick}</Typography>
                </div>
              )}
              <ListItemText
                primary={receta.nombre}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      Ingredientes: {receta.ingredientes}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Preparación: {receta.preparacion}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          )}
        </List>
      </Paper>
    </div>
  </div>
);
*/
