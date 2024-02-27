import { Routes, Route } from "react-router-dom";
import NavbarLink from "./components/NavbarLink";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import "./App.css";

function App() {
  return (
    <>
      <NavbarLink />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
