import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFruits } from "../../Services/FrutaService";
import imagenFruta from "../../assets/frutastra.png";

const Home = () => {
  const [frutas, setFrutas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFrutas, setMostrarFrutas] = useState(true);
  const [mostrarVerduras, setMostrarVerduras] = useState(true);
  //const [estacionFiltro, setEstacionFiltro] = useState("");
  //const [mesFiltro, setMesFiltro] = useState("");
  const [filtroTemp, setFiltroTemp] = useState("");

  const getAllFruits = async () => {
    console.log("Hola");
    const data = await getFruits();
    //console.log(data);
    setFrutas(data);
  };

  useEffect(() => {
    getAllFruits();
    // obtener frutas desde bd y asignarlas a setFrutas
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

  /*const handleEstacionChange = (e) => {
    setEstacionFiltro(e.target.value);
  };*/

  /*const handleMesChange = (e) => {
    setMesFiltro(e.target.value);
  };*/

  return (
    <div>
      <h3>FRESH</h3>
      <div className="Buscar">
        <h3>Busca tu fruta o verdura...</h3>
        <div className="busqueda">
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={handleBusqueda}
          />
          <label>
            Mostrar sólo Frutas
            <input
              type="checkbox"
              checked={mostrarFrutas}
              onChange={handleCheckboxChangeF}
            />
          </label>
          <label>
            Mostrar sólo Verduras
            <input
              type="checkbox"
              checked={mostrarVerduras}
              onChange={handleCheckboxChangeV}
            />
          </label>
          <label>
            Filtrar por Temporada o Mes:
            <select value={filtroTemp} onChange={handleFiltroTempChange}>
              <option value="">Todos</option>
              <option value="primavera">Primavera</option>
              <option value="verano">Verano</option>
              <option value="otoño">Otoño</option>
              <option value="invierno">Invierno</option>
              <option value="enero">Enero</option>
              <option value="febrero">Febrero</option>
              <option value="marzo">Marzo</option>
              <option value="abril">Abril</option>
              <option value="mayo">Mayo</option>
              <option value="junio">Junio</option>
              <option value="julio">Julio</option>
              <option value="agosto">Agosto</option>
              <option value="septiembre">Septiembre</option>
              <option value="octubre">Octubre</option>
              <option value="noviembre">Noviembre</option>
              <option value="diciembre">Diciembre</option>
            </select>
          </label>
        </div>
        <ul id="lista">
          {frutasFiltradas.map((fruta, index) => (
            <li key={index}>
              <img id="multifrutas" src={imagenFruta} alt={"frutaIMG"} />
              <p>{fruta.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
