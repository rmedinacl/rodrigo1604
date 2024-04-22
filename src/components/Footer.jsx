import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ footerText }) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>{footerText}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
