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
  formGroupClasses,
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
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";


import { useParams } from "react-router-dom";
import imagenFruta from "../../assets/frutastra.png";
import imagenVerdura from "../../assets/tomate.png";
import Manzanas from "../../assets/Manzanas.png";
import Espárragos from "../../assets/Espárragos.png";
import Fresas from "../../assets/Fresas.png";
import Granadas from "../../assets/Granadas.png";
import Guayabas from "../../assets/Guayabas.png";
import Higos from "../../assets/Higos.png";
import Kiwis from "../../assets/Kiwis.png";
import Lechugas from "../../assets/Lechugas.png";
import Limones from "../../assets/Limones.png";
import Melocotones from "../../assets/Melocotones.png";
import Melones from "../../assets/Melones.png";
import Naranjas from "../../assets/Naranjas.png";
import Nísperos from "../../assets/Nísperos.png";
import Papas from "../../assets/Papas.png";
import Papayas from "../../assets/Papayas.png";
import Peras from "../../assets/Peras.png";
import Pimientos from "../../assets/Pimientos.png";
import Plátanos from "../../assets/Plátanos.png";
import Sandías from "../../assets/Sandías.png";
import Uvas from "../../assets/Uvas.png";
import Zanahorias from "../../assets/Zanahorias.png";
import Aguacates from "../../assets/Aguacates.png";
import Chirimoyas from "../../assets/Chirimoyas.png";
import Calabacines from "../../assets/Calabacines.png"
import Berenjenas from "../../assets/Berenjenas.png"
import Coles from "../../assets/Coles.png"
import Cebollas from "../../assets/Cebollas.png"

import NewRecipe from "../../Components/Receta/Receta.jsx";
import {addReceta} from "../../Services/FrutaService.js"
import { getFruitsId } from "../../Services/FrutaService.js";
//import { getRecipesId } from "../../Services/FrutaService.js";
import { getUserId } from "../../Services/FrutaService.js";
import { getRecipesByFruitId} from "../../Services/FrutaService.js"


const Info = () => {
  const { id } = useParams();
  const [fruta, setFruta] = useState({});
  const [receta, setRecetas] = useState([]);
  const [user, setUser] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [refresh, setRefresh] = useState(true);

  
  const frutasImagenes = {
    "Manzana": Manzanas,
    "Espárrago": Espárragos,
    "Plátano": Plátanos,
    "Papaya": Papayas,
    "Mango": imagenFruta,
    "Aguacate": Aguacates,
    "Níspero": Nísperos,
    "Guayaba": Guayabas,
    "Higo": Higos,
    "Chirimoya": Chirimoyas,
    "Granada": Granadas,
    "Pera": Peras,
    "Naranja": Naranjas,
    "Uva": Uvas,
    "Fresa": Fresas,
    "Kiwi": Kiwis,
    "Sandía": Sandías,
    "Melón": Melones,
    "Piña": imagenFruta,
    "Limón": Limones,
    "Melocotón": Melocotones,
    "Papa": Papas,
    "Zanahoria": Zanahorias,
    "Calabacín": Calabacines,
    "Tomate": imagenVerdura,
    "Pimiento": Pimientos,
    "Berenjena": Berenjenas,
    "Col": Coles,
    "Lechuga": Lechugas,
    "Cebolla": Cebollas
    

    
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

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
      const data = await getRecipesByFruitId(id);
      console.log(id)
      setRecetas(data);
      console.log(data)
    } catch (error) {
      console.error("Error al obtener las recetas:", error.message);
    }
  };
  
  

  const pullUserId = async () => {
    try {
      const data = await getUserId();
      console.log(data)
      setUser(data);
    } catch (error) {
      console.error("Error al obtener usuario", error.message);
    }
  };

  
  
    const handleAddRecipe = async (newRecipeData) => { 
      try {
        await addReceta(newRecipeData, fruta.id);
        
        handleCloseDialog();
        setRefresh(!refresh);
      } catch (error) {
        console.error("Error al añadir la receta:", error.message);
      }
    };

  

  useEffect(() => {
    pullFruitsId();
    pullFruitRecipes();
    pullUserId();
   
  }, [refresh]);



  
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
                    src={frutasImagenes[fruta.nombre ] || imagenFruta }
                    sx={{ width: 80, height: 80, borderRadius: "100%",
                    overflow: "hidden",
                    border: "2px solid #fff",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                  background: "white"}}
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
      </div> {/* botón botón*/}
      <div>
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "#3498db",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
        onClick={handleOpenDialog}
       
      >
        Añade tu propia receta
      </Button>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Recetas</DialogTitle>
          <DialogContent>
            <NewRecipe onSubmit={handleAddRecipe} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Paper elevation={3} style={{ maxHeight: "300px", overflowY: "auto" }}>
        <List><div style={{fontFamily: "cursive", fontSize: "24px" }}>Recetas de {fruta.nombre}</div>
          {receta && receta.map((receta) =>
            <ListItem key={receta.id}>
              {user && (
                <div>
                  <Typography variant="subtitle1" style={{ padding: '10px', color: "blue" }}>{user.nick}</Typography>
                </div>
              )}
              <ListItemText 
                primary={receta.nombre} 
                secondary={
                  <div>

                    <Typography variant="body1"  sx={{paddingRight: "800px", color: "brown"}}>
                      Ingredientes: {receta.ingredientes} 
                    </Typography>
                    <Typography variant="body1" color= "black" > 
                      Preparación: {receta.preparación}
                      
                    </Typography> </div> 
                }
              /><img src={frutasImagenes[fruta.nombre ] || imagenFruta } style={{width: '100px', height: '100px'}}/>
              
            </ListItem>
          )}
        </List>
      </Paper>
    </div>
  );
};

export default Info;