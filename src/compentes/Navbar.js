import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          <img
            src="Images/cloth-img.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            id="logo"
          />
          <span className="text-uppercase fw-lighter text-dark  ms-2 logo-text">
            Outfit Archive
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-all">
          <Nav className="me-auto ">
            <Link to="/" className="nav-link text-uppercase text-dark">
              Home
            </Link>
            <Link
              to="/allcollection"
              className="nav-link text-uppercase text-dark"
            >
              Collection
            </Link>
            <Link to="/special" className="nav-link text-uppercase text-dark">
              Specials
            </Link>
            <Link to="#action2" className="nav-link text-uppercase text-dark">
              Blog
            </Link>
            <Link to="#action2" className="nav-link text-uppercase text-dark">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
