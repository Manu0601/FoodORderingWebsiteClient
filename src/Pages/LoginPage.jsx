import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import Cookies from "js-cookie";
import "../App.css";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("https://foodorderingwebsiteserver.onrender.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        Cookies.set("token", data.token, { expires: 1 });
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/");
        }, 2000);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <Container fluid className="loginBackground">
      <Row>
        <Col xs={12} sm={12} md={9} lg={9} className="d-flex justify-content-center align-items-center">
          <Card className="d-flex text-center border border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded-3">
            <div>
              <p className="fs-4 fw-bold">LOGIN</p>
              {error && <p className="text-danger">{error}</p>}
              <Form className="inputBox-width" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant="warning" type="submit" className="py-2 px-4 fs-6 inputBox-width">Submit</Button>
              </Form>
              <div className="d-flex justify-content-end">
                <a href="#" className="text-decoration-none">
                  <p className="my-3">Sign Up</p>
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3} className="d-flex justify-content-end m-0 p-0">
          <img src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756879/Food%20Order%20Website/eyqxjirzit2trvcv5sv4.png" className="loginImage" alt="Login Illustration" />
        </Col>
      </Row>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Body className="text-center">
          <p className="fs-5 fw-bold text-warning">Logged in successfully!</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default LoginPage;