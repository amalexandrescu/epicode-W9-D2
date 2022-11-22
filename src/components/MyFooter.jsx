import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p>Footer @2022</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyFooter;
