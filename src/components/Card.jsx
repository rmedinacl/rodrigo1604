import { Card, CardGroup } from "react-bootstrap";
import Boton from "./Boton";

function MyCard({ data }) {
  const { image, name, description, colorButton, textButton, raza, razaColor } =
    data;
  return (
    <>
      <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} height={250} width={250} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Boton
              colorButton={colorButton}
              textButton={textButton}
              raza={raza}
              razaColor={razaColor}
            />
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default MyCard;
