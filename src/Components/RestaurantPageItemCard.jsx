import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

function RestaurantPageItemCard(props) {
  return (
    <Container>
      <Row className="shadow-lg p-3 mb-5 bg-body-tertiary rounded-5">
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={props.image} className="menuItemimage rounded-4" />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="fs-6 fw-bold">{props.heading}</p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className="d-flex justify-content-center align-items-center"
        >
          <p>{props.desc}</p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={1}
          lg={1}
          className="d-flex justify-content-center align-items-center"
        >
          <p>Rs {props.price}</p>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={2}
          lg={2}
          className="d-flex justify-content-center align-items-center"
        >
          {" "}
          <Button variant="warning" className="px-4">
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RestaurantPageItemCard;
