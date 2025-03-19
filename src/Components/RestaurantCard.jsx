import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../App.css";

function RestaurantCard(props) {
  return (
    <Link
      className="text-decoration-none text-reset text-center d-flex"
      to={`/restaurant/${props.id}`}
    >
      <Card className="border border-0 rounded-5 my-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="image-container">
          <Card.Img
            variant="top"
            src={props.image}
            className="restaurantCard-image rounded-4"
          />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold">{props.title}</Card.Title>
          <div className="d-flex flex-nowrap gap-3 justify-content-center">
            <Card.Text>{props.rating}</Card.Text>
            <Card.Img
              src="https://res.cloudinary.com/dzmymp0yf/image/upload/v1742377549/Food%20Order%20Website/crk2gldxuwtl8rqp5afi.png"
              className="rating-icon"
            />
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
export default RestaurantCard;
