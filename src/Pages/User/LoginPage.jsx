import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import Cookies from "js-cookie";
import "../../App.css";
import axiosInstance from "../../Axios/axiosInstance.js";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/user/login", formData);
      console.log(response.data);
    
      if (Cookies.get("token")) {
        setShowSuccess(true);
    
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/");
        }, 2000);
      } else {
        console.error("Token not received");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  
  return (
    <Container fluid className="loginBackground min-vh-100 d-flex align-items-center">
      <Row className="w-100">
        <Col xs={12} md={6} lg={6} className="d-flex justify-content-center align-items-center order-md-1 order-2">
          <Card className="text-center border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded-3 w-100" style={{ maxWidth: '400px' }}>
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
                <a href="/signup" className="text-decoration-none">
                  <p className="my-3">Sign Up</p>
                </a>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={6} className="d-flex justify-content-center align-items-center order-md-2 order-1">
          <img 
            src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756879/Food%20Order%20Website/eyqxjirzit2trvcv5sv4.png" 
            className="img-fluid loginImage" 
            alt="Login Illustration" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered>
        <Modal.Body className="text-center">
          <p className="fs-5 fw-bold text-warning">Logged in successfully !</p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default LoginPage;