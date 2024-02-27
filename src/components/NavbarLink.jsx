import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbarlink.css";

export default function Navbarlink() {
  return (
    <Navbar className="bg-navb">
      <Container>
        <Navbar.Collapse id="navbar-nav ">
          <NavLink className="nav-link" activeClassName="active" exact to="/Home">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/Pokemon">
            Pokemon
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
