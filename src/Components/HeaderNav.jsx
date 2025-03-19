import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container fluid className="gap-lg-5 gap-md-3 gap-sm-1 gap-xs-0">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756873/Food%20Order%20Website/Byteeats%20Profile%20Logo.png"
              className="navBar-logimg"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-lg-5 gap-md-3 gap-sm-1 gap-xs-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <NavDropdown
              title={
                <img
                  className="thumbnail-image"
                  src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756875/Food%20Order%20Website/noeuwugmxrhszkjcq2no.png"
                />
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Your Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Your Order</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Sign Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">
              <img
                src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756875/Food%20Order%20Website/hj0p5muuflnvmef2lq9z.png"
                className="thumbnail-image-2"
              />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
