import React from "react";
import Card from "react-bootstrap/Card";

function AllOrderCard() {
  return (
    <>
      <Card className="border border-0  shadow-lg p-3 mb-5 bg-body-tertiary rounded-4">
        <Card.Body>
          <Card.Title>Order No :</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Add Order Number Javascript
          </Card.Subtitle>
          <Card.Text>
            Add Cart Details Date : Product X Quantity : Restaurant : Current
            Status : Total Amount : Final Price :
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default AllOrderCard;
