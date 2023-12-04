import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFruits } from "../../Services/FrutaService";
import imagenFruta from "../../assets/frutastra.png";
import imagenVerdura from "../../assets/tomate.png";
import compra from "../../assets/compra.mp4";
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
import Calabacines from "../../assets/Calabacines.png";
import Berenjenas from "../../assets/Berenjenas.png";
import Coles from "../../assets/Coles.png";
import Cebollas from "../../assets/Cebollas.png";

import {
  Box,
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

const Inicio = () => {
  const [frutas, setFrutas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFrutas, setMostrarFrutas] = useState(true);
  const [mostrarVerduras, setMostrarVerduras] = useState(true);
  const [filtroTemp, setFiltroTemp] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());

  const frutasImagenes = {
    Manzana: Manzanas,
    Espárrago: Espárragos,
    Plátano: Plátanos,
    Papaya: Papayas,
    Mango: imagenFruta,
    Aguacate: Aguacates,
    Níspero: Nísperos,
    Guayaba: Guayabas,
    Higo: Higos,
    Chirimoya: Chirimoyas,
    Granada: Granadas,
    Pera: Peras,
    Naranja: Naranjas,
    Uva: Uvas,
    Fresa: Fresas,
    Kiwi: Kiwis,
    Sandía: Sandías,
    Melón: Melones,
    Piña: imagenFruta,
    Limón: Limones,
    Melocotón: Melocotones,
    Papa: Papas,
    Zanahoria: Zanahorias,
    Calabacín: Calabacines,
    Tomate: imagenVerdura,
    Pimiento: Pimientos,
    Berenjena: Berenjenas,
    Col: Coles,
    Lechuga: Lechugas,
    Cebolla: Cebollas,
  };

  const getAllFruits = async () => {
    const data = await getFruits();
    setFrutas(data);
  };

  useEffect(() => {
    getAllFruits();
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toISOString());
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const withinRange = frutas.filter((fruta) => {
    if (fruta.mes_inicio && fruta.mes_fin) {
      const months = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      const currentMonthIndex = new Date().getMonth();
      const startMonthIndex = months.indexOf(fruta.mes_inicio.toLowerCase());
      const endMonthIndex = months.indexOf(fruta.mes_fin.toLowerCase());

      return (
        currentMonthIndex >= startMonthIndex &&
        currentMonthIndex <= endMonthIndex
      );
    }
    return false;
  });

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
    <div>
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
              label={
                <span style={{ fontWeight: "600" }}>
                  Mostrar sólo <span style={{ color: "red" }}>Frutas</span>
                </span>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  checked={mostrarVerduras}
                  onChange={handleCheckboxChangeV}
                />
              }
              label={
                <span style={{ fontWeight: "600" }}>
                  Mostrar sólo <span style={{ color: "green" }}>Verduras</span>
                </span>
              }
            />
          </Box>
          <Box id="Tempotext">
            <FormControl style={{ width: "300px" }}>
              <InputLabel id="filtroTempLabel" style={{ fontWeight: "500" }}>
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

        <Grid id="letras" container spacing={2}>
          {frutasFiltradas.map((fruta, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <List>
                <Paper
                  elevation={3}
                  style={{
                    padding: "16px",
                    textAlign: "center",
                    marginLeft: "10px",
                    backgroundColor: withinRange.includes(fruta)
                      ? "#CCFFC9"
                      : "#FF8091",
                  }}
                >
                  <ListItem component={Link} to={`/frutas/${fruta.id}`} button>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Imagen de ${fruta.nombre}`}
                        src={frutasImagenes[fruta.nombre] || imagenFruta}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "100%",
                          overflow: "hidden",
                          border: "2px solid #fff",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                          background: "white",
                        }}
                      />
                    </ListItemAvatar>
                    <div id="LIT">
                      <ListItemText
                        primary={fruta.nombre}
                        sx={{ color: "black", marginLeft: "20px" }}
                      />
                    </div>
                  </ListItem>
                </Paper>
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Inicio;
