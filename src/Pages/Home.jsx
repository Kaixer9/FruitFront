import "./Home.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';


const Home = () => {
    //const [frutas, setFrutas] = useState([]);
    //const [nuevaFruta, setNuevaFruta] = useState('');
    const [busqueda, setBusqueda] = useState('');
  
    useEffect(() => {
      
      // obtener frutas desde bd y asignarlas a setFrutas
      //  fetchFrutasFromDatabase() y luego setFrutas(resultadoDeLaBaseDeDatos) //lo de fetch no sé no sé
    }, []);
  
    /*const guardarFruta = () => {
      // guardo frutas?
    };*/
  
    const handleBusqueda = (e) => {
      setBusqueda(e.target.value);
    };
  
    const frutasFiltradas = frutas.filter((fruta) =>
      fruta.toLowerCase().includes(busqueda.toLowerCase())
    );
  
    const handleBuscarClick = () => {
      // sumar cosas para buscar
      console.log('Realizar búsqueda:', busqueda);
    };

    return (
        <div>
        <h3>FRESH</h3>
        <div className="Buscar">
        <h3>Busca tu fruta o verdura...</h3>
        <div className="busqueda-container">
          <input
            type="text"
            placeholder="Buscar fruta"
            value={busqueda}
            onChange={handleBusqueda}
          />
          <button onClick={handleBuscarClick}>Buscar</button>
        </div>
        <ul>
          {frutasFiltradas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
      </div>
        </div>
)}

export default Home