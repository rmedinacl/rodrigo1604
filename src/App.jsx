import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import perros from "./assets/data";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header title="Adoptando Perritos" />
      <Container>
        <Row>
          {perros.map((data) => (
            <Col xs={3} key={data.id}>
              <MyCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer footerText="Explora nuestra galería de adopcion de Perritos. Tenemos muchos perritos." />
    </>
  );
}

export default App;
