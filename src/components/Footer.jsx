import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ footerText }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>{footerText}</p>
            <a href="https:www.perritos.com" target="_black">
              Más información en perritos.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
