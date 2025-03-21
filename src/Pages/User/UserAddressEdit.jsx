import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axiosInstance from "../../Axios/axiosInstance.js";
import Popup from "../../Components/User/Popup.jsx";

function UserAddressEdit() {
  const [formData, setFormData] = useState({
    name: "",
    houseName: "",
    streetName: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value.length > 10) return;
    if (name === "pincode" && value.length > 6) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      setLoading(false);
      return;
    }
    if (formData.pincode.length !== 6) {
      setError("Pincode must be exactly 6 digits.");
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.put("/address/update/new", formData);
      if (response.status === 200) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Error updating address:", error);
      if (error.response) {
        setError(error.response.data.message || "Failed to update address");
      }
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowSuccess(false);
    setError("");
  };

  return (
    <Container fluid>
      <div className="text-center fs-3 fw-bold my-5">
        <p>Edit Your Address</p>
      </div>
      <Form onSubmit={handleSubmit} className="my-5">
        <div className="d-flex flex-column gap-3">
          {[
            { label: "Name", type: "text", name: "name" },
            { label: "House Name", type: "text", name: "houseName" },
            { label: "Street Name", type: "text", name: "streetName" },
            { label: "Landmark", type: "text", name: "landmark" },
            { label: "City Name", type: "text", name: "city" },
            { label: "State Name", type: "text", name: "state" },
            { label: "Pincode No", type: "number", name: "pincode", pattern: "\\d{6}" },
            { label: "Phone No", type: "number", name: "phone", pattern: "\\d{10}" },
          ].map((field, index) => (
            <Form.Group key={index} className="d-flex flex-row gap-3 align-items-center">
              <Form.Label className="mb-0" style={{ width: "120px" }}>
                {field.label}:
              </Form.Label>
              <Form.Control
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <div className="text-center my-5">
            <Button type="submit" variant="warning" className="px-5" disabled={loading}>
              {loading ? "Updating..." : "Submit"}
            </Button>
          </div>
        </div>
      </Form>
      {showSuccess && <Popup message="Address Updated successfully!" type="success" onClose={closePopup} />}
      {error && <Popup message={error} type="error" onClose={closePopup} />}
    </Container>
  );
}

export default UserAddressEdit;
