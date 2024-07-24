import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import imageSrc from "../../assets/djyfly1.jpg";
import Container from "react-bootstrap/Container";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, dimensions, neighbor, corner }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Paz y tranquilidad - Calides a la vuelta de la esquina.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Ubicado en esquina: {corner ? "si" : "no"}
        </ListGroup.Item>
      </ListGroup>

      <Container
        fluid
        bg="dark"
        data-bs-theme="dark"
        className="m-0 p-2 bg-success-subtle text-light d-flex flex-row justify-content-evenly"
      >
        {dimensions} mts²
      </Container>
    </Card>
  );
};

export default ItemDetail;
