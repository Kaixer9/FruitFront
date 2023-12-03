import "./Profile.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFruits, getProfile } from "../../Services/FrutaService";
import imagenFruta from "../../assets/frutastra.png";
import imagenVerdura from "../../assets/tomate.png";
import compra from "../../assets/compra.mp4";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
    TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import { getRecipesByUserId } from "../../Services/FrutaService";

const Profile = () => {
  //const { user } = useUser();
  const [users, setUsers] = useState([]);
 
 async function getAllData() {
  const response = await getProfile()
  console.log(response)

 }

 

  useEffect(() => {
   getAllData();
   
  }, []);


 

  return (
    <div>{/*
      

      <Dialog open={selectedUserId !== null} onClose={handleCloseDialog}>
        <DialogTitle>Recetas del Usuario</DialogTitle>
        <DialogContent>
          <ul>
            {userRecipes.map((recipe) => (
              <li key={recipe.id}>{recipe.nombre}</li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogActions>
            </Dialog>*/}
    </div>
  );
};

export default Profile;


