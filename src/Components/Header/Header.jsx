import React from 'react';
import './Header.css'
import fresh from '../../assets/fresh.png'

const Header = () => {
  return (
    <header>
<img id="fresh" src={fresh} alt={"frutaIMG"} />
      <h1 id="title">Verduras y Frutas de Temporada</h1>
    </header>
  );
};

export default Header;