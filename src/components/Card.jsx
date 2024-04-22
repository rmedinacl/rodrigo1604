import { Card, CardGroup } from "react-bootstrap";
import Boton from "./Boton";

function MyCard({ data }) {
  const { image, name, description, colorButton, textButton } = data;
  return (
    <>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Boton colorButton={colorButton} textButton={textButton} />
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default MyCard;
