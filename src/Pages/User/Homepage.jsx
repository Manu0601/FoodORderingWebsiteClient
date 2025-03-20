import React, { useState, useEffect } from "react";
import HomepageCarousel from "../../Components/HomepageCarousel.jsx";
import BestSellerSlider from "../../Components/BestSellerSlider.jsx";
import RestaurantCard from "../../Components/RestaurantCard.jsx";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";

function Homepage() {
  const [productList, setProductList] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://foodorderingwebsiteserver.onrender.com/api/restaurant/all"
      );
      if (Array.isArray(response.data.restaurant)) {
        setProductList(response.data.restaurant);
      } else {
        setProductList([]);
      }
    } catch (error) {
      setProductList([]);
    }
  };

  fetchData();
  return (
    <>
      <div className="backgroundGradient">
        <HomepageCarousel />
        <BestSellerSlider />
        <Container fluid>
          <Row>
            <p className="text-center my-5 fs-1 fw-bold">Restaurants</p>
            {productList.map((item) => (
              <Col xs={12} sm={6} md={4} lg={3} key={item._id}>
                <RestaurantCard
                  title={item.name}
                  image={item.image}
                  status={item.status}
                  id={item._id}
                  rating={item.rating}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Homepage;
