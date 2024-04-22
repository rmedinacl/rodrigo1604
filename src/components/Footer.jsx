import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>{props.footerText}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
