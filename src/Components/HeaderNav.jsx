import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function HeaderNav() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token and all cookies
    Cookies.remove("token"); // Replace with your cookie key name
    // You can also use Cookies.remove() to clear other cookies if needed

    // Optionally, clear all cookies
    // document.cookie.split(";").forEach(function (cookie) {
    //   document.cookie = cookie.split("=")[0] + "=;expires=" + new Date().toUTCString() + ";path=/";
    // });

    // Display sign-out success message (or redirect)
    alert("Sign Out Successful!");

    // Refresh the page after sign-out
    window.location.reload();  // Force a page reload to reset the state
  };

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
              <NavDropdown.Item href="/profile">Your Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Your Order</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
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
