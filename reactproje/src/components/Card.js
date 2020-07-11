import React from "react";
import { Card, Col } from "react-bootstrap";

const AlbumCard = (props) => {
  return (
    <Col lg={4} className="mb-4">
      <Card>
        <Card.Body>
          <Card.Text>
            {props.data.title}
            <button className="btn btnOne btn-sm btn-outline-secondary">
              View
            </button>
            <button className="btn btnOne btn-sm btn-outline-secondary">
              Edit
            </button>
            <p className="back text-muted">{props.data.id}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default AlbumCard;
