import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./components/Card";
import Header from "./components/Header";
import perros from "./assets/data";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header title="Adoptando Perritos" />
      <Container>
        <Row>
          {perros.map((data) => (
            <Col key={data.id} sm>
              <MyCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
