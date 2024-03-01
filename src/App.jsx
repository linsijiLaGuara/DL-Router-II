import { Routes, Route } from "react-router-dom";
import Navbarlink from "./components/Navbarlink";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import PokemonDetail from "./views/PokemonDetail";
import { PokemonsProvider } from "./contexto/PokemonContext";

import "./App.css";

function App() {
  return (
    <>
      <PokemonsProvider>
        <Navbarlink />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Pokemon" element={<Pokemon />} />
          <Route path="/Pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </PokemonsProvider>
    </>
  );
}

export default App;
