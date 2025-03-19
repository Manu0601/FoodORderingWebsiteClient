import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Cookies from "js-cookie";
import "../App.css";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("https://foodorderingwebsiteserver.onrender.com/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user profile:", error));
  }, [navigate]);
  console.log(user)
  return (
    <>
      <Container fluid>
        <div className="fs-1 fw-bold text-center">Profile</div>
        <div>
          <Row className="my-5">
            <Col xs={12} sm={6} md={3} lg={3} className="d-flex justify-content-center">
              <img
                src={user?.profilePic || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profilepage-image"
              />
            </Col>
            <Col xs={12} sm={6} md={9} lg={9} className="d-flex align-items-center">
              <div className="d-flex flex-column flex-nowrap">
                <div className="d-flex flex-row flex-nowrap gap-3">
                  <p>Name :</p>
                  <p>{user?.name || "Loading..."}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap gap-3">
                  <p>Mail Id :</p>
                  <p>{user?.email || "Loading..."}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="tabHeight shadow-lg p-3 mb-5 bg-body-tertiary rounded-5">
          <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
            <Tab eventKey="Orders" title="Recent Orders" className="d-flex align-items-center justify-content-center">
              <p>Add Order JavaScript</p>
            </Tab>
            <Tab eventKey="address" title="Address" className="d-flex align-items-center justify-content-center">
              <p>Add Address JavaScript</p>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default ProfilePage;