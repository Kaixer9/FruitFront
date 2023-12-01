import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFruits } from "../../Services/FrutaService";
import imagenFruta from "../../assets/frutastra.png";
import imagenVerdura from "../../assets/tomate.png";
import compra from "../../assets/compra.mp4";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

const Inicio = () => {
  const [frutas, setFrutas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFrutas, setMostrarFrutas] = useState(true);
  const [mostrarVerduras, setMostrarVerduras] = useState(true);
  const [filtroTemp, setFiltroTemp] = useState("");

  const getAllFruits = async () => {
    const data = await getFruits();
    setFrutas(data);
  };

  useEffect(() => {
    getAllFruits();
  }, []);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const frutasFiltradas = frutas.filter((fruta) => {
    const filtro = fruta.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const filtroGrupoF = mostrarFrutas
      ? fruta.grupo.toLowerCase() === "fruta"
      : fruta.grupo.toLowerCase() === "verdura";
    const filtroGrupoV = mostrarVerduras
      ? fruta.grupo.toLowerCase() === "verdura"
      : fruta.grupo.toLowerCase() === "fruta";

    const filtroEstacionMes = filtroTemp
      ? (fruta.estación && fruta.estación.includes(filtroTemp)) ||
        (fruta.mes_inicio && fruta.mes_inicio.includes(filtroTemp)) ||
        (fruta.mes_fin && fruta.mes_fin.includes(filtroTemp))
      : true;

    return filtro && (filtroGrupoF || filtroGrupoV) && filtroEstacionMes;
  });

  const handleCheckboxChangeF = () => {
    setMostrarFrutas(!mostrarFrutas);
  };
  const handleCheckboxChangeV = () => {
    setMostrarVerduras(!mostrarVerduras);
  };

  const handleFiltroTempChange = (e) => {
    setFiltroTemp(e.target.value);
  };

  return (
    <>
      <div id="videoloop">
        <video controls={false} loop autoPlay muted>
          <source src={compra} type="video/mp4" />
          Tu navegador no puede reproducir este vídeo.
        </video>
      </div>
      <div id="top1">
        <div id="explan">
          <span className="line1">
            Tu página de verduras y frutas de temporada.
          </span>
          <span className="line2">
            Busca una para ver sus valores nutricionales
          </span>
          <span className="line3">y las recetas de nuestros usuarios.</span>
        </div>
        <Box className="buscarGalería">
          <Box className="busqueda">
            <TextField
              id="placeholder"
              type="text"
              placeholder="Buscar..."
              value={busqueda}
              onChange={handleBusqueda}
            />
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  checked={mostrarFrutas}
                  onChange={handleCheckboxChangeF}
                />
              }
              label="Mostrar sólo Frutas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  checked={mostrarVerduras}
                  onChange={handleCheckboxChangeV}
                />
              }
              label="Mostrar sólo Verduras"
            />
          </Box>
          <Box id="Tempotext">
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="filtroTempLabel">
                Filtrar por Temporada o Mes
              </InputLabel>
              <Select
                labelId="filtroTempLabel"
                id="filtroTemp"
                value={filtroTemp}
                onChange={handleFiltroTempChange}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="primavera">Primavera</MenuItem>
                <MenuItem value="verano">Verano</MenuItem>
                <MenuItem value="otoño">Otoño</MenuItem>
                <MenuItem value="invierno">Invierno</MenuItem>
                <MenuItem value="-">-</MenuItem>
                <MenuItem value="enero">Enero</MenuItem>
                <MenuItem value="febrero">Febrero</MenuItem>
                <MenuItem value="marzo">Marzo</MenuItem>
                <MenuItem value="abril">Abril</MenuItem>
                <MenuItem value="mayo">Mayo</MenuItem>
                <MenuItem value="junio">Junio</MenuItem>
                <MenuItem value="julio">Julio</MenuItem>
                <MenuItem value="agosto">Agosto</MenuItem>
                <MenuItem value="septiembre">Septiembre</MenuItem>
                <MenuItem value="octubre">Octubre</MenuItem>
                <MenuItem value="noviembre">Noviembre</MenuItem>
                <MenuItem value="diciembre">Diciembre</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {frutasFiltradas.map((fruta, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <List>
                <ListItem component={Link} to={`/frutas/${fruta.id}`} button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Imagen de ${fruta.grupo}`}
                      src={
                        fruta.grupo === "fruta" ? imagenFruta : imagenVerdura
                      }
                      style={{ width: '80px', height: '80px' }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={fruta.nombre}
                    sx={{ fontSize: "16px", color: "black" }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Inicio;
