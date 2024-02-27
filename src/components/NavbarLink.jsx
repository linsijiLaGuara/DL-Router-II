import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarLink() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLink;
