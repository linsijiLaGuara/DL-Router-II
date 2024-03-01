import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbarlink.css";

export default function Navbarlink() {
  return (
    <nav className="navbar flex gap-4 items-center justify-end">
      <NavLink
        to="/Home"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Pokemon"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Pokemon
      </NavLink>
    </nav>
  );
}
