import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "../../App.css";
import useFetch from "../../Hooks/UseFetch.jsx";

function ProfilePage() {
  const [userData, isUserLoading, userError] = useFetch("/user/profile");
  const [addressData, isAddressLoading, addressError] =
    useFetch("/address/get");
  const profile = userData?.user || [];
  const address = addressData?.address || [];
  console.log(address);
  if (isUserLoading || isAddressLoading) return <p>Loading...</p>;
  if (userError || addressError) return <p>Error loading data.</p>;

  return (
    <>
      <Container className="" fluid>
        <div className="fs-1 fw-bold text-center">Profile</div>
        <div>
          <Row className="my-5">
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="d-flex justify-content-center "
            >
              <img
                src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1740756875/Food%20Order%20Website/noeuwugmxrhszkjcq2no.png"
                className="profilepage-image"
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={9}
              lg={9}
              className="d-flex align-items-center "
            >
              <div className="d-flex flex-column flex-nowrap">
                <div className="d-flex flex-row flex-nowrap gap-3">
                  <p>Name :</p>
                  {/* Name javascript add */}
                  <p>{profile.name}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap gap-3">
                  <p>Mail Id :</p>
                  {/* Name javascript add */}
                  <p>{profile.email}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr></hr>
        <div className="tabHeight shadow-lg p-3 mb-5 bg-body-tertiary rounded-5">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab
              eventKey="Orders"
              title="Recent Orders"
              className="d-flex align-items-center justify-content-center"
            >
              <p>Add Order javascript</p>
            </Tab>
            <Tab
              eventKey="address"
              title="Address"
              className="d-flex align-items-center "
            >
              <div className="d-flex flex-column flex-nowrap">
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>Name :</p>
                  <p>{address.name}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>House Name :</p>
                  <p>{address.HouseName}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>Landmark :</p>
                  <p>{address.Landmark}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>City Name :</p>
                  <p>{address.city}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>State Name :</p>
                  <p>{address.State}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>PINCODE No :</p>
                  <p>{address.Pincode}</p>
                </div>
                <div className="d-flex flex-row flex-nowrap  gap-2">
                  <p>Phone No :</p>
                  <p>{address.Phone}</p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default ProfilePage;
