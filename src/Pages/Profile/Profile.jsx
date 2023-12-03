import React, { useState, useEffect } from "react";
import { getRecipesByFruitId } from "../../Services/FrutaService.js";
import { getUserId } from "../../Services/FrutaService.js";
import QRCode from "qrcode.react";
import {
  Box,
  Typography,
  Avatar,
  Container,
  Grid,
  Paper,
  List,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
const Profile = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  //const [savedRecipes, setSavedRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [receta, setRecetas] = useState([]);
  const [qrData, setQRData] = useState("");

  // función pilla users
  const pullUserId = async () => {
    try {
      const data = await getUserId();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error("Error al obtener usuario", error.message);
    }
  };
  //pilla recipesm por frutas
  const pullFruitRecipes = async () => {
    try {
      const data = await getRecipesByFruitId(id);
      console.log(id);
      setRecetas(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las recetas:", error.message);
    }
  };

  const handleAddToShoppingList = () => {
    if (newItem.trim() !== "") {
      const updatedList = [...shoppingList, newItem.trim()];
      setShoppingList(updatedList);
      setQRData(newItem);
      setNewItem("");

      // Guardar la lista
      localStorage.setItem("shoppingList", JSON.stringify(updatedList));
    }
  };
  const handleClearShoppingList = () => {
    // Limpiar la lista
    setShoppingList([]);
    setQRData("");
    localStorage.removeItem("shoppingList");
  };

  useEffect(() => {
    // Cargar la lista
    const storedShoppingList = localStorage.getItem("shoppingList");
    if (storedShoppingList) {
      setShoppingList(JSON.parse(storedShoppingList));
    }
  }, []);

  const handleAvatarChange = (event) => {
    const selectedValue = event.target.value;
    setAvatarUrl(selectedValue);
  };
  const handleManualUrlChange = () => {
    if (inputUrl.trim() !== "") {
      setAvatarUrl("");
      setInputUrl("");
    }
  };
  useEffect(() => {
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    if (storedAvatarUrl) {
      setAvatarUrl(storedAvatarUrl);
    }
  }, []);

  useEffect(() => {
    pullFruitRecipes();
    pullUserId();
  }, []);
  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
  };
  const handleSaveUrl = () => {
    if (inputUrl.trim() !== "") {
      setAvatarUrl(inputUrl.trim());
      // guardoo
      localStorage.setItem("avatarUrl", inputUrl.trim());
      setInputUrl("");
    }
  };

  return (
    <>
    <Container>
      <Typography variant="h4" component="h1" align="center" mt={4} mb={4}>
        Mi Perfil
      </Typography>
      
        <Container id="foto">
          <Typography variant="h4" component="h1" align="center" mt={4} mb={4}>
            Introduce tu foto de perfil
          </Typography>

          <TextField
            label="URL del Avatar"
            value={inputUrl}
            onChange={handleUrlChange}
            variant="outlined"
          />

          <Button variant="contained" onClick={handleSaveUrl}>
            Guardar URL del Avatar
          </Button>

          {avatarUrl && (
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h5" component="div">
                Vista Previa del Avatar
              </Typography>
              <img
                src={avatarUrl}
                alt="User's avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "10px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "100%",
                  overflow: "hidden",
                  border: "2px solid #fff",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          )}
        </Container>
      

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} p={3}>
            <div style={{ marginBottom: "50px" }}>
              <h3>Lista de la Compra</h3>
              <ul>
                {shoppingList.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </ul>
              <TextField
                label="Nuevo Elemento"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ fontSize: "64px" }}
              />
              {qrData && (
                <div>
                  <h3>Código QR:</h3>
                  <QRCode value={qrData} />
                </div>
              )}
              <Button variant="contained" onClick={handleAddToShoppingList}>
                Agregar
              </Button>
              <Button
                variant="contained"
                onClick={handleClearShoppingList}
                color="secondary"
              >
                Borrar Lista
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Paper elevation={3} style={{ maxHeight: "300px", overflowY: "auto" }}>
        <List>
          {receta &&
            receta.map((receta) => (
              <ListItem key={receta.id}>
                {user && (
                  <div>
                    <Typography variant="subtitle1">{user.nick}</Typography>
                  </div>
                )}
                <ListItemText
                  primary={receta.nombre}
                  secondary={
                    <div>
                      <Typography variant="body2" color="textSecondary">
                        Ingredientes: {receta.ingredientes}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Preparación: {receta.preparación}
                      </Typography>
                    </div>
                  }
                />
              </ListItem>
            ))}
        </List>
      </Paper>
    </Container></>
  );
};

export default Profile;
