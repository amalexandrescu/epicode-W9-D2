import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";

const Welcome = ({ subtitle }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron fluid>
            <h1>Welcome to your favourite {subtitle}!</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
