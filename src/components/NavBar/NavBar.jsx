import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Brand from "../Brand/Brand";
import ToggleButton from "../ToggleButton/ToggleButton";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Brand />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Mapa</Nav.Link>
            <Nav.Link href="#link">Barrios</Nav.Link>
            <NavDropdown title="Ubicaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Mandalas de Agua
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fincas de Santa Ana
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Barrio Terrazas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Individuales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <ToggleButton />
      </Container>
    </Navbar>
  );
}

export default NavBar;
