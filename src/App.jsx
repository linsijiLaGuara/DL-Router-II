// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbarlink from './components/NavbarLink'
import Home from "./views/Home";
import PokemonList from "./views/PokemonList";
import PokemonDetail from "./views/PokemonDetail";
import { PokemonsProvider } from "./contexto/PokemonContext";

import "./App.css";

function App() {
  return (
    <>
      <PokemonsProvider>
        <Navbarlink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemon" element={<PokemonList />} />
          <Route path="/Pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </PokemonsProvider>
    </>
  );
}

export default App;
